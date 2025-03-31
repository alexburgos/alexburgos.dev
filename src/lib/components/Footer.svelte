<script>
  let links = {
    left: [
      { text: 'RESUME', href: '/Resume.pdf', target: '_blank', rel: 'noopener noreferrer' },
      { text: 'EMAIL', href: 'mailto:hello@alexburgos.dev' }
    ],
    right: [
      { text: 'GITHUB', href: 'https://github.com/alexburgos' },
      { text: 'LINKEDIN', href: 'https://www.linkedin.com/in/alexander-b-67073129' }
    ]
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

<footer class="sticky bottom-0 left-0 right-0 p-6 bg-base-100">
  <div class="flex justify-between items-center">
    <div class="space-x-4 flex flex-col">
      {#each links.left as link}
        <a href={link.href} target={link.target} rel={link.rel} class="text-sm md:leading-6 hover:opacity-75 transition-colors">{link.text}</a>
      {/each}
    </div>
    <div class="space-x-4 flex flex-col">
      {#each links.right as link}
        <a href={link.href} class="text-sm md:leading-6  hover:opacity-75 transition-colors">{link.text}</a>
      {/each}
    </div>
    <div class="space-x-4 flex flex-col self-end">
      <button class="text-sm md:leading-6 cursor-pointer mt-auto hover:opacity-75 transition-colors" onclick={toggleTheme}>
        DARK MODE: {darkMode ? 'ON' : 'OFF'}
      </button>
    </div>
  </div>
</footer>