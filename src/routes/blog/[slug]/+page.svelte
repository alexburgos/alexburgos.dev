<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title} — alex.burgos</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-[912px] lg:px-0">
    <p class="text-base-content/50 mb-12 text-sm">
      <a href="/" class="transition-colors hover:text-red-800">alex.burgos</a> /
      <a href="/blog" class="transition-colors hover:text-red-800">blog</a> /
      {data.title}
    </p>

    <article class="prose prose-invert max-w-none">
      <h1>{data.title}</h1>
      {#if data.date}
        <p class="text-base-content/40 text-xs">{data.date}</p>
      {/if}
      {@html data.contentHtml}
    </article>
  </div>
</div>
