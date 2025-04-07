<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  //ts-ignore
  let carousel: HTMLElement | null = null;

  function scrollPrev() {
    if (!carousel) return;
    const item = carousel.querySelector('.carousel-item') as HTMLElement;
    if (!item) return;
    const scrollAmount = item.offsetWidth + 32;
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  function scrollNext() {
    if (!carousel) return;
    const item = carousel.querySelector('.carousel-item') as HTMLElement;
    if (!item) return;
    const scrollAmount = item.offsetWidth + 32;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
</script>

<div class="relative mx-auto mb-20 px-6 lg:mb-28 lg:w-[912px] lg:px-0">
  <div bind:this={carousel} class="carousel carousel-center w-full gap-4 md:gap-8">
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard
        project="Kiwi.com Account"
        role="Software Engineer"
        company="Kiwi.com"
        location="Barcelona, Spain"
        projectLink="https://www.kiwi.com/en/user"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard
        project="Smartly Editor"
        role="Front End Engineer"
        company="Smartly"
        location="Helsinki, Finland"
        projectLink="https://www.smartly.io"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard
        project="Union Discount"
        role="Developer"
        company="Personal"
        location="Barcelona, Spain"
        projectLink="https://www.uniondiscount.net"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard
        project="Henry's Website"
        role="Developer"
        company="Personal"
        location="Barcelona, Spain"
        projectLink="hhttps://www.henrysbar.es/"
      />
    </div>
  </div>
  <button
    onclick={scrollPrev}
    aria-label="Previous project"
    class="absolute top-1/2 left-[-60px] hidden -translate-y-1/2 transform cursor-pointer transition-opacity hover:opacity-75 md:block"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  </button>
  <button
    onclick={scrollNext}
    aria-label="Next project"
    class="absolute top-1/2 right-[-60px] hidden -translate-y-1/2 transform cursor-pointer transition-opacity hover:opacity-75 md:block"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</div>
