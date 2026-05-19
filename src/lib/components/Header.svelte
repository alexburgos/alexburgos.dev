<script lang="ts">
  import { onMount, type Component } from 'svelte';

  const title = 'alex.burgos';

  let HeaderCanvas = $state<Component<{
    text: string;
    color: string;
    hoverColor: string;
    onclick: () => void;
  }> | null>(null);

  onMount(async () => {
    const mod = await import('./HeaderCanvas.svelte');
    HeaderCanvas = mod.default;
  });

  let darkMode = $state(true);

  function toggleTheme(): void {
    darkMode = !darkMode;
    const theme = darkMode ? 'black' : 'lofi';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  $effect(() => {
    const savedTheme = localStorage.getItem('theme') || 'black';
    darkMode = savedTheme === 'black';
    document.documentElement.setAttribute('data-theme', savedTheme);
  });

  const textColor = $derived(darkMode ? '#f5f5f5' : '#0a0a0a');
  const HOVER_COLOR = '#991b1b'; // matches Tailwind red-800
</script>

<div class="relative mt-10 mb-20 md:mt-0 md:mb-24">
  <div class="h-40 w-full sm:h-56 lg:h-72">
    {#if HeaderCanvas}
      <HeaderCanvas
        text={title}
        color={textColor}
        hoverColor={HOVER_COLOR}
        onclick={toggleTheme}
      />
    {/if}
  </div>
</div>
