<script lang="ts">
  import type { PageData } from './$types';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title} — alex.burgos</title>
</svelte:head>

<div class="flex flex-1 flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'blog', href: '/blog' }, { label: data.title }]} />

    <article class="prose prose-invert max-w-none">
      <h1>{data.title}</h1>
      {#if data.date}
        <p class="text-base-content/40 text-xs">{data.date}</p>
      {/if}
      <!-- Content is authored by the site owner via Keystatic — not user input -->
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html data.contentHtml}
    </article>
  </div>
</div>
