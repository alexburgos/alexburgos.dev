<script lang="ts">
  import { onMount, type Component } from 'svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  let WorkCanvas = $state<Component | null>(null);

  onMount(async () => {
    const mod = await import('./WorkCanvas.svelte');
    WorkCanvas = mod.default;
  });
</script>

<div class="flex flex-col">
  <div class="mx-auto px-6 py-6 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'past work' }]} />
    <h1>
      Some products I've worked on in the last few years, you can download my <a
        href="/Resume.pdf"
        target="_blank"
        class="text-red-800"
        rel="noopener noreferrer">CV</a
      > as well
    </h1>
  </div>
  <div class="h-[135vh] w-full px-6 md:h-[175vh] lg:h-[70vh]">
    {#if WorkCanvas}
      <WorkCanvas />
    {/if}
  </div>
</div>
