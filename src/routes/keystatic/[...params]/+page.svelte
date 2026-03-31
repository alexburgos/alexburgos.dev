<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import type { Config } from '@keystatic/core';

  onMount(async () => {
    if (!browser) return;

    const [{ createRoot }, { createElement }, { Keystatic }, adminConfig] = await Promise.all([
      import('react-dom/client'),
      import('react'),
      import('@keystatic/core/ui'),
      import('../../../../keystatic.config'),
    ]);

    const container = document.getElementById('keystatic-app');
    if (!container) return;

    // Our config is narrowly typed by TS; Keystatic's component expects the broader Config.
    // Double-assert through unknown — the types are structurally compatible at runtime.
    createRoot(container).render(
      createElement(Keystatic, { config: adminConfig.default as unknown as Config })
    );
  });
</script>

<svelte:head>
  <title>Keystatic Admin</title>
</svelte:head>

<div id="keystatic-app" style="height: 100vh; width: 100%;"></div>
