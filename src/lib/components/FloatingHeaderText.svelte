<script lang="ts">
  import { useTask } from '@threlte/core';
  import { interactivity, Text } from '@threlte/extras';
  import { useIsMobile } from '$lib/hooks/useIsMobile.svelte';
  // Troika only supports .ttf / .otf / .woff (NOT .woff2).
  const FONT_URL = '/fonts/sometype-mono.woff';

  interactivity();

  interface Props {
    text: string;
    color: string;
    hoverColor: string;
    onclick: () => void;
  }

  const { text, color, hoverColor, onclick }: Props = $props();

  let elapsed = $state(0);
  let hovered = $state(false);
  const isMobile = useIsMobile();

  const scale = $derived(isMobile.current ? 1 : 1.5);

  useTask((delta) => {
    elapsed += delta;
  });

  const rotationY = $derived(Math.sin(elapsed * 0.5) * 0.18);
  const rotationX = $derived(Math.sin(elapsed * 0.35 + 1) * 0.08);
  const positionY = $derived(Math.sin(elapsed * 0.8) * 0.06);

  function handleEnter() {
    hovered = true;
    document.body.style.cursor = 'pointer';
  }
  function handleLeave() {
    hovered = false;
    document.body.style.cursor = '';
  }
</script>

<Text
  {text}
  font={FONT_URL}
  fontSize={1.4}
  color={hovered ? hoverColor : color}
  anchorX="center"
  anchorY="middle"
  letterSpacing={-0.04}
  position.y={positionY}
  rotation.y={rotationY}
  rotation.x={rotationX}
  onpointerenter={handleEnter}
  onpointerleave={handleLeave}
  {onclick}
  {scale}
/>
