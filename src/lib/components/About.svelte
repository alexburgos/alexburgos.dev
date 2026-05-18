<script lang="ts">
  import Links from './Links.svelte';

  interface Props {
    class?: string;
  }

  let { class: className = '' }: Props = $props();

  let paragraphs = $state([
    `Hi I'm Alex 👋, a product software engineer with over 10 years of experience. Building accessible, performant web apps with thousands of visitors. My current stack is React focused but this website is built in Svelte.
    Lately I've been drawn to creative coding and working with AI models to create 3D graphics and other sorts of visuals.`,
    `Besides coding, I like to shoot photos on film, mix music, talk about movies, and play some games with friends.`,
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
