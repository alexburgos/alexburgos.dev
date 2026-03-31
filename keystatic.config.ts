import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    // Local storage: reads/writes markdown files in the repo.
    // Works in local dev. For Cloudflare Pages production, switch to
    // { kind: 'github', repo: 'alexburgos/alexburgos.dev' }
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.text({ label: 'Content', multiline: true }),
      },
    }),
  },
});
