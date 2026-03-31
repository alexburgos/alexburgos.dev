import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import config from '../../../../../keystatic.config';

const handler = makeGenericAPIRouteHandler({ config, localBaseDirectory: process.cwd() });

async function handle(event: RequestEvent): Promise<Response> {
  if (!dev) error(404);

  const result = await handler(event.request);

  // The generic handler returns a plain object, not a Web Response
  if (result instanceof Response) return result;

  return new Response((result.body as BodyInit) ?? null, {
    status: result.status,
    headers: result.headers as HeadersInit,
  });
}

export const GET = handle;
export const POST = handle;
