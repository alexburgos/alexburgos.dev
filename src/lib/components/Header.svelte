<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const title = 'alex.burgos';

  let mounted = $state(false);
  onMount(() => { mounted = true; });

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
</script>

<div class="relative mt-10 mb-20 md:mt-0 md:mb-24">
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
</div>
