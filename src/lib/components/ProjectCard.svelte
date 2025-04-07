<script lang="ts">
  let {
    project = 'PROJECT',
    role = 'ROLE',
    company = 'COMPANY',
    location = 'CITY, COUNTRY',
    projectLink,
  } = $props();

  function handleClick() {
    window.open(projectLink, '_blank', 'noopener,noreferrer');
  }
</script>

<button
  onclick={handleClick}
  class="card border-base-content/20 hover:border-base-content/75 flex h-[300px] w-full cursor-pointer flex-col justify-between rounded-none border p-6 text-left transition-colors"
>
  <div class="space-y-2">
    <h3 class="text-lg">{project}</h3>
    <p class="text-base-content/75">{role}</p>
    <p class="text-base-content/75">{company}</p>
    <p class="text-base-content/75">{location}</p>
  </div>
  <div class="flex items-center justify-between">
    <span class="text-sm uppercase">VIEW</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="rotate-[-45deg] transform"
      ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
      ></polyline></svg
    >
  </div>
</button>
