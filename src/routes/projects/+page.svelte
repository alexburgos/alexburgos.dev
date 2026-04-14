<script lang="ts">
  import { Canvas } from '@threlte/core';
  import CubeScene from './CubeScene.svelte';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<div class="flex flex-1 flex-col">
  <div class="mx-auto flex w-full flex-1 flex-col px-6 py-10 lg:w-228 lg:px-0">
    <Breadcrumb crumbs={[{ label: 'projects' }]} />

    <div class="flex flex-1 flex-col items-center justify-center gap-8">
      <div class="h-100 w-full max-w-150">
        <Canvas>
          <CubeScene />
        </Canvas>
      </div>

      <p class="text-base-content/50 text-sm">something is being built here</p>
    </div>
  </div>
</div>
