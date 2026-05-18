<script lang="ts">
  import { untrack } from 'svelte';
  import { T, useTask } from '@threlte/core';
  import { interactivity, RoundedBoxGeometry, Text, useTexture } from '@threlte/extras';

  interactivity();

  interface Props {
    src: string;
    url: string;
    position?: [number, number, number];
    baseRotationY?: number;
    phase?: number;
  }

  const { src, url, position = [0, 0, 0], baseRotationY = 0, phase = 0 }: Props = $props();

  const WINDOW_WIDTH = 3;
  const WINDOW_HEIGHT = 2;
  const WINDOW_DEPTH = 0.08;
  const TITLE_BAR_HEIGHT = 0.24;

  const BODY_COLOR = '#1a1a1a';
  const TITLE_BAR_COLOR = '#262626';
  const URL_PILL_COLOR = '#0f0f0f';

  const BODY_FRONT_Z = WINDOW_DEPTH / 2;
  const TITLE_BAR_Z = BODY_FRONT_Z + 0.005;
  const DOT_Z = TITLE_BAR_Z + 0.045;
  const URL_PILL_Z = TITLE_BAR_Z + 0.01;
  const SCREENSHOT_Z = BODY_FRONT_Z + 0.002;

  const TITLE_BAR_Y = WINDOW_HEIGHT / 2 - TITLE_BAR_HEIGHT / 2;
  const DOT_RADIUS = 0.04;
  const DOT_SPACING = 0.12;
  const DOTS_LEFT_X = -WINDOW_WIDTH / 2 + 0.18;

  const CONTENT_HEIGHT = WINDOW_HEIGHT - TITLE_BAR_HEIGHT;
  const CONTENT_Y = -TITLE_BAR_HEIGHT / 2;

  const screenshot = untrack(() => useTexture(src));

  let elapsed = $state(0);
  useTask((delta) => {
    elapsed += delta;
  });

  const rotationY = $derived(baseRotationY + Math.sin(elapsed * 0.6 + phase) * 0.25);
  const positionY = $derived(position[1] + Math.sin(elapsed * 0.8 + phase) * 0.05);

  const HOVER_SCALE = 1.15;
  const SCALE_LERP = 8; // higher = snappier
  let hovered = $state(false);
  let scale = $state(1);

  useTask((delta) => {
    const target = hovered ? HOVER_SCALE : 1;
    scale += (target - scale) * Math.min(1, delta * SCALE_LERP);
  });

  function handleEnter() {
    hovered = true;
    document.body.style.cursor = 'pointer';
  }
  function handleLeave() {
    hovered = false;
    document.body.style.cursor = '';
  }
  function handleClick() {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
</script>

<T.Group
  position.x={position[0]}
  position.y={positionY}
  position.z={position[2]}
  rotation.x={-0.15}
  rotation.y={rotationY}
  {scale}
>
  <T.Mesh onpointerenter={handleEnter} onpointerleave={handleLeave} onclick={handleClick}>
    <RoundedBoxGeometry args={[WINDOW_WIDTH, WINDOW_HEIGHT, WINDOW_DEPTH]} radius={0.05} />
    <T.MeshStandardMaterial color={BODY_COLOR} roughness={0.6} metalness={0.1} />
  </T.Mesh>

  <T.Mesh position={[0, TITLE_BAR_Y, TITLE_BAR_Z - BODY_FRONT_Z]}>
    <RoundedBoxGeometry args={[WINDOW_WIDTH - 0.02, TITLE_BAR_HEIGHT, 0.01]} radius={0.02} />
    <T.MeshStandardMaterial color={TITLE_BAR_COLOR} roughness={0.7} />
  </T.Mesh>

  {#each ['#ff5f56', '#ffbd2e', '#27c93f'] as color, i (color)}
    <T.Mesh position={[DOTS_LEFT_X + i * DOT_SPACING, TITLE_BAR_Y, DOT_Z]}>
      <T.CircleGeometry args={[DOT_RADIUS, 24]} />
      <T.MeshBasicMaterial {color} />
    </T.Mesh>
  {/each}

  <T.Mesh position={[0.2, TITLE_BAR_Y, URL_PILL_Z]}>
    <RoundedBoxGeometry args={[1.4, 0.14, 0.01]} radius={0.06} />
    <T.MeshStandardMaterial color={URL_PILL_COLOR} roughness={0.8} />
  </T.Mesh>
  <Text
    text={url}
    position={[0.2, TITLE_BAR_Y, URL_PILL_Z + 0.01]}
    fontSize={0.08}
    color="#bdbdbd"
    anchorX="center"
    anchorY="middle"
  />

  {#if $screenshot}
    <T.Mesh position={[0, CONTENT_Y, SCREENSHOT_Z]}>
      <T.PlaneGeometry args={[WINDOW_WIDTH - 0.04, CONTENT_HEIGHT - 0.04]} />
      <T.MeshBasicMaterial map={$screenshot} toneMapped={false} />
    </T.Mesh>
  {/if}
</T.Group>
