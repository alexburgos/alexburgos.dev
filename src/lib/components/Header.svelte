<script lang="ts">
  const title = 'alex.burgos';
  const TYPING_SPEED_MS = 120;

  let displayedText = $state('');

  $effect(() => {
    let charCount = 0;
    const timer = setInterval(() => {
      charCount += 1;
      displayedText = title.slice(0, charCount);
      if (charCount >= title.length) {
        clearInterval(timer);
      }
    }, TYPING_SPEED_MS);

    return () => clearInterval(timer);
  });
</script>

<div class="relative mt-10 mb-20 flex justify-center md:mt-0 md:mb-24">
  <h1 class="text-4xl font-bold tracking-tight text-red-800 sm:text-5xl lg:text-6xl">
    {displayedText}<span class="terminal-cursor" aria-hidden="true">&nbsp;</span>
  </h1>
</div>

<style>
  .terminal-cursor {
    display: inline-block;
    width: 0.55em;
    border-right: 3px solid currentColor;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
