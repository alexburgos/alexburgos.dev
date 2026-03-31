<script lang="ts">
  import { Canvas } from '@threlte/core';
  import CubeScene from './CubeScene.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-[912px] lg:px-0">
    <p class="text-base-content/50 mb-12 text-sm">
      <a href="/" class="transition-colors hover:text-red-800">alex.burgos</a> / projects
    </p>

    <div class="flex flex-1 flex-col items-center justify-center gap-8">
      <div class="h-[400px] w-full max-w-[600px]">
        <Canvas>
          <CubeScene />
        </Canvas>
      </div>

      <p class="text-base-content/50 text-sm">something is being built here</p>
    </div>
  </div>
</div>
