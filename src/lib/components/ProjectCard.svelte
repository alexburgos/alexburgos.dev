<script>
  let { 
    project = "PROJECT",
    role = "ROLE",
    company = "COMPANY",
    location = "CITY, COUNTRY"
  } = $props();
</script>

<div class="card rounded-none w-full h-[300px] border border-base-content/20 p-6 flex flex-col justify-between cursor-pointer hover:border-base-content/75 transition-colors">
  <div class="space-y-2">
    <h3 class="text-lg">{project}</h3>
    <p class="text-base-content/75">{role}</p>
    <p class="text-base-content/75">{company}</p>
    <p class="text-base-content/75">{location}</p>
  </div>
  <div class="flex justify-between items-center">
    <span class="text-sm uppercase">VIEW</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform rotate-[-45deg]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  </div>
</div>