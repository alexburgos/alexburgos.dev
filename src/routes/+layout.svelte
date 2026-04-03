<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  {@render children()}
  <Footer />
</div>
