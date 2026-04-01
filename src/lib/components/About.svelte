<script lang="ts">
  interface Props {
    class?: string;
  }

  let { class: className = '' }: Props = $props();

  let paragraphs = $state([
    `Hi I'm Alex 👋, a Frontend engineer with over 10 years of experience turning design and ideas into UIs people enjoy using. My work consists of building accessible, performant web apps. But lately I've been drawn to creative coding and working with AI agents, and I'm really interested in using these tools to expand what's possible while learning new ways to work with code.`,
    `Outside of coding, I like to: shoot photos on film, talk about cinema, and experiment in the kitchen. I come from a background in political organizing, which gave me a lasting appreciation for people and culture, inside and outside of a work environment.`,
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
</div>
