<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import BrowserScene from './BrowserScene.svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  const MOBILE_BREAKPOINT = 768;

  let isMobile = $state(false);

  $effect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => (isMobile = mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  });

  const desktopLayout = [
    { position: [-3.6, 0, -0.4] as [number, number, number], baseRotationY: 0.25 },
    { position: [0, 0, 0.4] as [number, number, number], baseRotationY: 0 },
    { position: [3.6, 0, -0.4] as [number, number, number], baseRotationY: -0.25 },
  ];

  const mobileLayout = [
    { position: [0, 2.8, 0] as [number, number, number], baseRotationY: 0 },
    { position: [0, 0, 0] as [number, number, number], baseRotationY: 0 },
    { position: [0, -2.8, 0] as [number, number, number], baseRotationY: 0 },
  ];

  const websites = [
    { src: '/projects/kiwi.png', url: 'https://kiwi.com', phase: 0 },
    { src: '/projects/smartly.png', url: 'https://smartly.io', phase: 1.2 },
    { src: '/projects/food52.png', url: 'https://food52.com', phase: 2.4 },
  ];

  const layout = $derived(isMobile ? mobileLayout : desktopLayout);
  const cameraPosition = $derived<[number, number, number]>(isMobile ? [0, 0, 9] : [0, 0, 6]);
</script>

<div class="flex flex-1 flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'past work' }]} />
    <h1>Some products I've worked on in the last few years</h1>
  </div>
  <div class="flex flex-1 flex-col items-center justify-center gap-8">
    <div class="h-[140vh] w-full px-6 md:h-150">
      <Canvas>
        <T.PerspectiveCamera makeDefault position={cameraPosition} />
        <T.AmbientLight intensity={0.5} />
        <T.DirectionalLight position={[3, 4, 5]} intensity={1.5} />
        <T.DirectionalLight position={[-3, -1, -2]} intensity={0.3} />

        {#each websites as website, i (website.src)}
          <BrowserScene {...website} {...layout[i]} />
        {/each}
      </Canvas>
    </div>
  </div>
</div>
