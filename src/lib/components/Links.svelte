<script>
  const links = [
    { text: 'Blog', href: '/blog' },
    { text: 'Projects', href: '/projects' },
    { text: 'Github', href: 'https://github.com/alexburgos' },
    { text: 'Linkedin', href: 'https://www.linkedin.com/in/alexander-b-67073129' },
  ];
</script>

<div class="flex w-full justify-between">
  {#each links as link (link.text)}
    <a
      href={link.href}
      target={link.target}
      rel={link.rel}
      class="text-sm transition-colors hover:text-red-800 md:leading-6">{link.text}</a
    >
  {/each}
</div>
