<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import BrowserScene from './BrowserScene.svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  const websites = [
    {
      src: '/projects/kiwi.png',
      url: 'https://kiwi.com',
      position: [-3.6, 0, -0.4] as [number, number, number],
      baseRotationY: 0.25,
      phase: 0,
    },
    {
      src: '/projects/smartly.png',
      url: 'https://smartly.io',
      position: [0, 0, 0.4] as [number, number, number],
      baseRotationY: 0,
      phase: 1.2,
    },
    {
      src: '/projects/food52.png',
      url: 'https://food52.com',
      position: [3.6, 0, -0.4] as [number, number, number],
      baseRotationY: -0.25,
      phase: 2.4,
    },
  ];
</script>

<div class="flex flex-1 flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'past work' }]} />
  </div>
  <div class="flex flex-1 flex-col items-center justify-center gap-8">
    <h1>Some products I've worked on in the last few years</h1>
    <div class="h-150 w-full">
      <Canvas>
        <T.PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <T.AmbientLight intensity={0.5} />
        <T.DirectionalLight position={[3, 4, 5]} intensity={1.5} />
        <T.DirectionalLight position={[-3, -1, -2]} intensity={0.3} />

        {#each websites as website (website.src)}
          <BrowserScene {...website} />
        {/each}
      </Canvas>
    </div>
  </div>
</div>
