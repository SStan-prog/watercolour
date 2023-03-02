<script>
  import MobileMenu from './MobileMenu.svelte';

  let openMenu = false;
  let btnText = 'MENU';

  const toggle = () => {
    if (!openMenu) {
      openMenu = true;
      btnText = 'CLOSE';
    } else if (openMenu) {
      openMenu = false;
      btnText = 'MENU';
    }
  };

  export let menu;
</script>

<nav
  class=" mx-auto w-full  px-5 sm:px-10 lg:px-10 sm:sticky sm:top-0 bg-white max-w-[1920px] shadow-md z-50"
>
  <div class=" relative flex items-center ">
    <div class=" w-44  sm:w-60 md:w-80 ">
      <a href="/" class="w-full">
        <img src="/logos/main-logo.png" alt="Watercolour Westport" class=" " />
      </a>
    </div>

    <ul class=" ml-10 hidden w-full items-center justify-around lg:flex">
      {#each menu.menuItems.nodes as menuItem}
        {#if menuItem.childItems.edges.length > 0}
          <li key={menuItem.label} class=" group relative py-5">
            <div class=" flex">
              <span class="text-sm font-bold uppercase  text-black-400">
                {menuItem.label}{' '}
              </span>
              <img
                src="/icons/down-arrow.svg"
                alt="down arrow"
                class="down ml-4 w-4"
              />
            </div>
            <ul
              class=" absolute z-10 mt-4 hidden border-t-4 border-red bg-white py-5 shadow group-hover:block"
            >
              {#each menuItem.childItems.edges as subItem}
                <li
                  key={subItem.label}
                  class="whitespace-nowrap p-2 px-8 text-sm font-bold uppercase  text-black-400"
                >
                  <a class="text-black-400" href={subItem.node.uri}>
                    {subItem.node.label}
                  </a>
                </li>
              {/each}
            </ul>
          </li>
        {/if}
      {/each}

      <li>
        <a
          href="#register"
          class=" bold cursor-pointer rounded border-2 border-red bg-red px-2  py-1
              text-sm uppercase text-white transition duration-100 ease-linear hover:bg-transparent hover:text-red"
        >
          register
        </a>
      </li>
    </ul>

    <button
      class="ml-auto w-24 cursor-pointer border-2 border-red px-4 py-1 text-red sm:py-2 lg:hidden"
      on:click={toggle}
      aria-label="Open mobile menu"
    >
      {btnText}
    </button>

    {#if openMenu}
      <MobileMenu {menu} {openMenu} />
    {/if}
  </div>
</nav>
