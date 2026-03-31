import { createReader } from '@keystatic/core/reader';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import config from '../../../../keystatic.config';

export async function load({ params }) {
  const reader = createReader(process.cwd(), config);
  const post = await reader.collections.posts.read(params.slug);

  if (!post) {
    error(404, 'Post not found');
  }

  return {
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    // Render markdown content to HTML at load time
    contentHtml: await marked(post.content ?? ''),
  };
}
