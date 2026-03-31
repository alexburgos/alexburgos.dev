<script lang="ts">
  import { T, useTask } from '@threlte/core';

  let rotationY = $state(0);

  useTask((delta) => {
    rotationY += delta * 0.8;
  });
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 4]} />
<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[5, 5, 5]} intensity={1} />

<T.Mesh rotation.y={rotationY} rotation.x={0.3}>
  <T.BoxGeometry args={[1.5, 1.5, 1.5]} />
  <T.MeshStandardMaterial color="#c8c8c8" wireframe />
</T.Mesh>
