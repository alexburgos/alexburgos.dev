<script lang="ts">
  import { onMount } from 'svelte';
  import { Canvas, T } from '@threlte/core';
  import FloatingHeaderText from './FloatingHeaderText.svelte';

  const title = 'alex.burgos';

  let mounted = $state(false);
  onMount(() => {
    mounted = true;
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
    {#if mounted}
      <Canvas>
        <T.PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <T.AmbientLight intensity={0.6} />
        <T.DirectionalLight position={[2, 3, 4]} intensity={1.2} />
        <FloatingHeaderText
          text={title}
          color={textColor}
          hoverColor={HOVER_COLOR}
          onclick={toggleTheme}
        />
      </Canvas>
    {/if}
  </div>

  <!--
  {#if mounted}
    <h1
      in:fly={{ y: -200, duration: 600 }}
      class="text-center text-[4rem] tracking-tight sm:text-[6rem] lg:text-[10rem]"
    >
      <button
        type="button"
        class="cursor-pointer hover:text-red-800"
        onclick={toggleTheme}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {title}
      </button>
    </h1>
  {/if}
  -->
</div>
