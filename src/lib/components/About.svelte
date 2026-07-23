<script lang="ts">
  import Links from './Links.svelte';

  interface Props {
    class?: string;
  }

  let { class: className = '' }: Props = $props();

  let paragraphs = $state([
    `Hi there, I'm Alex, a software engineer with over a decade of experience building alongside product teams. I work mostly in React these days, though I built this site in Svelte just for the fun of it. Lately I've been playing with creative coding and AI tools to make 3D graphics and other visual experiments`,
    `When I'm not coding, you'll find me shooting analog photography, out at live shows, watching films, or spending a few hours a week gaming with friends.`,
  ]);
</script>

<div class="mx-auto mb-20 space-y-6 px-6 md:mb-24 lg:w-228 lg:px-0 {className}">
  {#each paragraphs as paragraph (paragraph)}
    <p class="normal-case md:text-justify">{paragraph}</p>
  {/each}
  <p>
    <a href="mailto:hello@alexburgos.dev" aria-label="Contact email" class="text-red-800"
      >Drop me a line</a
    > if you'd like to build something together — or just to chat.
  </p>
  <div class="mt-28">
    <Links />
  </div>
</div>
