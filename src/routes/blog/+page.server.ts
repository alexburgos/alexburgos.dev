import { createReader } from '@keystatic/core/reader';
import config from '../../../keystatic.config';

export async function load() {
  const reader = createReader(process.cwd(), config);
  const posts = await reader.collections.posts.all();

  return {
    posts: posts
      .map((post) => ({
        slug: post.slug,
        title: post.entry.title,
        date: post.entry.date,
        excerpt: post.entry.excerpt,
      }))
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
  };
}
