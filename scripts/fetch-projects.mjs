import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataDir = join(root, '_data');
const outputPath = join(dataDir, 'projects.json');

const githubUsername = process.env.GITHUB_USERNAME || '';
const githubOrg = process.env.GITHUB_ORG || '';

async function fetchRepositoryList(url) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'Yummy-Modern-Site-Builder',
  };
  const token = process.env.GITHUB_TOKEN || process.env.JEKYLL_GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}): ${url}`);
  }
  return response.json();
}

const requests = [];
if (githubUsername) {
  requests.push(
    fetchRepositoryList(
      `https://api.github.com/users/${encodeURIComponent(githubUsername)}/repos?per_page=100&sort=updated`
    )
  );
}
if (githubOrg) {
  requests.push(
    fetchRepositoryList(
      `https://api.github.com/orgs/${encodeURIComponent(githubOrg)}/repos?per_page=100&sort=updated`
    )
  );
}

const repositories = (await Promise.all(requests)).flat();
const byFullName = new Map();
repositories.forEach((repo) => {
  byFullName.set(repo.full_name, {
    name: repo.name,
    link: repo.html_url,
    description: repo.description || '',
    stargazers_count: repo.stargazers_count || 0,
    forks_count: repo.forks_count || 0,
    updated_at: repo.updated_at || '',
    fork: Boolean(repo.fork),
    owner: repo.owner.login,
  });
});

const projects = Array.from(byFullName.values()).sort(
  (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
);

mkdirSync(dataDir, { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(projects, null, 2)}\n`, 'utf8');
console.log(`Fetched ${projects.length} projects -> ${outputPath}`);
