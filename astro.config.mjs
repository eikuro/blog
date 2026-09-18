import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repository?.endsWith('.github.io') ?? false;

export default defineConfig({
  site: process.env.ASTRO_SITE ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
  base: process.env.ASTRO_BASE ?? (repository ? (isUserSite ? '/' : `/${repository}`) : '/blog'),
});
