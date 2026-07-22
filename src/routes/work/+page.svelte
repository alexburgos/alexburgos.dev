<script lang="ts">
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import ProjectCard from './ProjectCard.svelte';

  const projects = [
    { src: '/projects/kiwi.png', url: 'https://kiwi.com' },
    { src: '/projects/smartly.png', url: 'https://smartly.io' },
    { src: '/projects/food52.png', url: 'https://food52.com' },
    { src: '/projects/papidameunbreak.png', url: 'https://www.papidameunbreak.com' },
    { src: '/projects/scarpeltele.png', url: 'https://scarpeltele.com' },
  ];
</script>

<div class="flex flex-col">
  <div class="mx-auto px-6 py-6 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'past work' }]} />
    <h1>
      Some of the work I've done in the last few years or still maintaining, you can download my <a
        href="/Resume.pdf"
        target="_blank"
        class="text-red-800"
        rel="noopener noreferrer">CV</a
      > as well
    </h1>
  </div>
  <div class="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
    {#each projects as project (project.src)}
      <ProjectCard {...project} />
    {/each}
  </div>
</div>
