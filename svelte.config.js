import adapter from '@sveltejs/adapter-cloudflare';

const config = {
  kit: {
    adapter: adapter({
      build: {
        output: '.svelte-kit/cloudflare'
      }
    })
  }
};

export default config;
