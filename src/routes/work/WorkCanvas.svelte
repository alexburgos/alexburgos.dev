<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import BrowserScene from './BrowserScene.svelte';
  import { useIsMobile } from '$lib/hooks/useIsMobile.svelte';

  const isMobile = useIsMobile();

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

  const layout = $derived(isMobile.current ? mobileLayout : desktopLayout);
  const cameraPosition = $derived<[number, number, number]>(
    isMobile.current ? [0, 0, 9] : [0, 0, 6]
  );
</script>

<Canvas>
  <T.PerspectiveCamera makeDefault position={cameraPosition} />
  <T.AmbientLight intensity={0.5} />
  <T.DirectionalLight position={[3, 4, 5]} intensity={1.5} />
  <T.DirectionalLight position={[-3, -1, -2]} intensity={0.3} />

  {#each websites as website, i (website.src)}
    <BrowserScene {...website} {...layout[i]} />
  {/each}
</Canvas>
