<script lang="ts">
  interface Link {
    text: string;
    href: string;
    external?: boolean;
  }

  const links: Link[] = [
    { text: 'Blog', href: '/blog' },
    { text: 'Projects', href: '/projects' },
    { text: 'Github', href: 'https://github.com/alexburgos', external: true },
    { text: 'Linkedin', href: 'https://www.linkedin.com/in/alexander-b-67073129', external: true },
  ];
</script>

<div class="flex w-full justify-between">
  {#each links as link (link.text)}
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      class="text-sm transition-colors hover:text-red-800 md:leading-6">{link.text}</a
    >
  {/each}
</div>
