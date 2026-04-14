<script lang="ts">
  interface Crumb {
    label: string;
    href?: string;
  }

  interface Props {
    crumbs: Crumb[];
  }

  let { crumbs }: Props = $props();
</script>

<p class="text-base-content/50 mb-12 text-sm">
  <a href="/" class="text-2xl transition-colors hover:text-red-800">alex.burgos</a>
  {#each crumbs as crumb (crumb.label)}
    / {#if crumb.href}<a href={crumb.href} class="transition-colors hover:text-red-800"
        >{crumb.label}</a
      >{:else}{crumb.label}{/if}
  {/each}
</p>
