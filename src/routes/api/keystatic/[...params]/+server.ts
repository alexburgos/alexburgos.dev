import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

async function handle(event: RequestEvent): Promise<Response> {
  if (!dev) error(404);

  // Dynamic imports keep node:path / node:fs out of the production Worker bundle.
  // This code is only reachable in local dev where Node.js is available.
  const [{ makeGenericAPIRouteHandler }, { default: config }] = await Promise.all([
    import('@keystatic/core/api/generic'),
    import('../../../../../keystatic.config'),
  ]);

  const handler = makeGenericAPIRouteHandler({ config, localBaseDirectory: process.cwd() });
  const result = await handler(event.request);

  if (result instanceof Response) return result;

  return new Response((result.body as BodyInit) ?? null, {
    status: result.status,
    headers: result.headers as HeadersInit,
  });
}

export const GET = handle;
export const POST = handle;
