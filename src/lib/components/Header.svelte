<script lang="ts">
  const title = 'alex.burgos';

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
  <h1
    class="cursor-pointer text-center text-[4rem] tracking-tight hover:text-red-800 sm:text-[6rem] lg:text-[10rem]"
    onclick={toggleTheme}
    title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {title}
  </h1>
</div>
