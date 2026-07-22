<script lang="ts">
  import Links from './Links.svelte';

  interface Props {
    class?: string;
  }

  let { class: className = '' }: Props = $props();

  let paragraphs = $state([
    `Hi, I'm Alex. A  software engineer with over 10 years of experience working with product teams. My current stack is React focused but this website is built in Svelte for fun.
    I like to experiment with creative coding AI tools to create 3D graphics and other sorts of visuals.`,
    `Besides coding, I like analog photography, live shows and films, and I dedicate a few hours a week to playing video games with friends.`,
  ]);
</script>

<div class="mx-auto mb-20 space-y-6 px-6 md:mb-24 lg:w-228 lg:px-0 {className}">
  {#each paragraphs as paragraph (paragraph)}
    <p class="normal-case md:text-justify">{paragraph}</p>
  {/each}
  <p>
    <a href="mailto:hello@alexburgos.dev" aria-label="Contact email" class="text-red-800"
      >Drop me a line</a
    > if you'd like to work on something or just chat.
  </p>
  <div class="mt-28">
    <Links />
  </div>
</div>
