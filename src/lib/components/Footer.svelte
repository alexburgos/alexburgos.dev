<script>
  let links = {
    left: [
      { text: 'RESUME', href: '/Resume.pdf', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'EMAIL', href: 'mailto:hello@alexburgos.dev' },
    ],
    right: [
      { text: 'GITHUB', href: 'https://github.com/alexburgos' },
      { text: 'LINKEDIN', href: 'https://www.linkedin.com/in/alexander-b-67073129' },
    ],
  };

  let darkMode = $state(true);

  function toggleTheme() {
    darkMode = !darkMode;
    const theme = darkMode ? 'black' : 'lofi';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Set initial theme
  $effect(() => {
    const savedTheme = localStorage.getItem('theme') || 'black';
    darkMode = savedTheme === 'black';
    document.documentElement.setAttribute('data-theme', savedTheme);
  });
</script>

<footer class="bg-base-100 sticky right-0 bottom-0 left-0 p-6">
  <div class="flex items-center justify-between">
    <div class="flex flex-col space-x-4">
      {#each links.left as link (link.text)}
        <a
          href={link.href}
          target={link.target}
          rel={link.rel}
          class="text-sm transition-colors hover:text-red-800 md:leading-6">{link.text}</a
        >
      {/each}
    </div>
    <div class="flex flex-col space-x-4">
      {#each links.right as link (link.text)}
        <a href={link.href} class="text-sm transition-colors hover:text-red-800 md:leading-6"
          >{link.text}</a
        >
      {/each}
    </div>
    <div class="flex flex-col space-x-4 self-end">
      <button
        class="hover: mt-auto cursor-pointer text-sm transition-colors hover:opacity-75 md:leading-6"
        onclick={toggleTheme}
      >
        DARK MODE: {darkMode ? 'ON' : 'OFF'}
      </button>
    </div>
  </div>
</footer>
