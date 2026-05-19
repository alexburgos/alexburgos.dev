<script lang="ts">
  import { onMount, type Component } from 'svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  let WorkCanvas = $state<Component | null>(null);

  onMount(async () => {
    const mod = await import('./WorkCanvas.svelte');
    WorkCanvas = mod.default;
  });
</script>

<div class="flex flex-1 flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-228 lg:px-0">
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
  <div class="flex flex-1 flex-col items-center justify-center gap-8">
    <div class="h-[140vh] w-full px-6 md:h-150">
      {#if WorkCanvas}
        <WorkCanvas />
      {/if}
    </div>
  </div>
</div>
