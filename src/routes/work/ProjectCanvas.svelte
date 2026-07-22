<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import BrowserScene from './BrowserScene.svelte';

  interface Props {
    src: string;
    url: string;
  }

  const { src, url }: Props = $props();

  const CAMERA_POSITION: [number, number, number] = [0, 0, 2.6];
</script>

<Canvas>
  <T.PerspectiveCamera makeDefault position={CAMERA_POSITION} />
  <T.AmbientLight intensity={0.5} />
  <T.DirectionalLight position={[3, 4, 5]} intensity={1.5} />
  <T.DirectionalLight position={[-3, -1, -2]} intensity={0.3} />

  <BrowserScene {src} {url} />
</Canvas>
