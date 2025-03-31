<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';
  
  let carousel: HTMLElement;
  
  function scrollPrev() {
    const scrollAmount = (carousel.querySelector('.carousel-item') as HTMLElement).offsetWidth + 32;
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
  
  function scrollNext() {
    const scrollAmount = (carousel.querySelector('.carousel-item') as HTMLElement).offsetWidth + 32;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
</script>

<div class="px-6 lg:px-0 lg:w-[912px] mx-auto mb-20 lg:mb-28 relative">
  <div bind:this={carousel} class="carousel carousel-center gap-4 md:gap-8 w-full">
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard 
        project="Travel Platform" 
        role="Software Engineer"
        company="Kiwi.com"
        location="Barcelona, Spain"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard 
        project="Smartly Editor" 
        role="Front End Engineer"
        company="Smartly"
        location="Helsinki, Finland"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard 
        project="Personal Website" 
        role="Developer"
        company="Personal"
        location="Helsinki, Finland"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard 
        project="Personal Website" 
        role="Developer"
        company="Personal"
        location="Helsinki, Finland"
      />
    </div>
    <div class="carousel-item w-[85vw] md:w-[280px]">
      <ProjectCard 
        project="Personal Website" 
        role="Developer"
        company="Personal"
        location="Helsinki, Finland"
      />
    </div>
  </div>
  <button onclick={scrollPrev} aria-label="Previous project" class="hidden md:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-75 transition-opacity">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  </button>
  <button onclick={scrollNext} aria-label="Next project" class="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-75 transition-opacity">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  </button>
</div>
