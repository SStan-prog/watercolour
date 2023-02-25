<script>
  import { slide } from 'svelte/transition';
  export let menu;
</script>

<ul
  class="absolute top-full z-50 w-full overflow-hidden border-t-4 border-red bg-white px-3 py-5 shadow sm:px-10"
  transition:slide
>
  {#each menu.menuItems.nodes as menuItem}
    {#if menuItem.childItems.edges.length > 0}
      <li
        class="whitespace-nowrap px-2 py-3 transition-all bg-mobile-white-faded"
      >
        <a href={menuItem.uri} class="px-5 font-bold text-black-400">
          {menuItem.label}
        </a>
      </li>
    {:else}
      <li
        class="whitespace-nowrap px-2 py-3 transition-all border-b border-mobile-white-faded sm:ml-10"
      >
        <a href={menuItem.uri} class="px-5 font-bold text-black-400">
          {menuItem.label}
        </a>
      </li>
    {/if}
  {/each}

  <li>
    <a
      href="#register"
      class=" bold block cursor-pointer rounded border-2 border-red bg-red  px-2
              py-1 text-sm uppercase text-white transition duration-100 ease-linear hover:bg-transparent
              hover:text-red 
              "
    >
      register
    </a>
  </li>
</ul>
