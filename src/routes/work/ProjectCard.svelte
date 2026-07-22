<script lang="ts">
  import { onMount, type Component } from 'svelte';

  interface Props {
    src: string;
    url: string;
  }

  const { src, url }: Props = $props();

  let ProjectCanvas = $state<Component<Props> | null>(null);

  onMount(async () => {
    const mod = await import('./ProjectCanvas.svelte');
    ProjectCanvas = mod.default;
  });
</script>

<div class="aspect-[3/2] w-full">
  {#if ProjectCanvas}
    <ProjectCanvas {src} {url} />
  {/if}
</div>
