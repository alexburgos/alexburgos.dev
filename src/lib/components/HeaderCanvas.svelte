<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import FloatingHeaderText from './FloatingHeaderText.svelte';

  interface Props {
    text: string;
    color: string;
    hoverColor: string;
    onclick: () => void;
  }

  const { text, color, hoverColor, onclick }: Props = $props();
</script>

<Canvas>
  <T.PerspectiveCamera makeDefault position={[0, 0, 5]} />
  <T.AmbientLight intensity={0.6} />
  <T.DirectionalLight position={[2, 3, 4]} intensity={1.2} />
  <FloatingHeaderText {text} {color} {hoverColor} {onclick} />
</Canvas>
