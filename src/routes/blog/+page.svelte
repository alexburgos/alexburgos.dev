<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>blog — alex.burgos</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-[912px] lg:px-0">
    <p class="text-base-content/50 mb-12 text-sm">
      <a href="/" class="transition-colors hover:text-red-800">alex.burgos</a> / blog
    </p>

    {#if data.posts.length === 0}
      <div class="flex flex-1 items-center justify-center">
        <p class="text-base-content/40 text-sm">I will write something here soon…</p>
      </div>
    {:else}
      <ul class="flex flex-col gap-8">
        {#each data.posts as post (post.slug)}
          <li>
            <a href="/blog/{post.slug}" class="group block">
              <p class="text-base-content/40 mb-1 text-xs">{post.date ?? ''}</p>
              <h2 class="text-base transition-colors group-hover:text-red-800">{post.title}</h2>
              {#if post.excerpt}
                <p class="text-base-content/60 mt-1 text-sm">{post.excerpt}</p>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
