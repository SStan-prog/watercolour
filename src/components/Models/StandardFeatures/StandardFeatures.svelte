<script>
  import { fade } from 'svelte/transition';

  export let standardFeatures;
  let options = standardFeatures.features.map((options) => options.name);
  let features = standardFeatures.features;
  let active = options[0];
</script>

<section id="standard">
  <div class="mx-auto flex flex-col items-center">
    <div class="w-full bg-green">
      <h2
        class="p-8 text-center font-heading text-2xl font-bold text-white sm:text-3xl"
      >
        {standardFeatures.heading}
      </h2>
    </div>
    <div class="mx-auto py-20 ">
      <a
        href={standardFeatures.buttonLink.mediaItemUrl}
        target="_blank"
        rel="noreferrer"
        class="bg-red bold border-red  hover:text-red cursor-pointer  border-2 text-center text-white transition duration-100 ease-linear hover:bg-transparent rounded-xl px-2 py-2 text-xl sm:px-5 sm:py-3 sm:text-2xl "
        >Download Standard Features List</a
      >
    </div>
    <div class="max-w-[1000px] w-full px-5  mb-20 ">
      <div class="flex flex-col  md:flex-row w-full  ">
        <ul
          class="md:w-[320px] border border-r md:border-r-0 border-grey-300 h-min shadow-sm"
        >
          {#each options as option}
            <li
              class={`border-b border-grey-300 p-2 font-heading font-bold text-lg  cursor-pointer transition-colors last:border-b-0 h-min`}
              class:bg-red={active === option}
              class:bg-grey-200={active != option}
              class:text-white={active === option}
              class:hover:bg-red={active != option}
              class:hover:bg-opacity-50={active != option}
              on:click={() => (active = option)}
              on:keypress={() => (active = option)}
            >
              {option}
            </li>
          {/each}
        </ul>
        <div class="w-full shadow-sm">
          {#each features as feature}
            {#if active === feature.name}
              <div
                in:fade={{ delay: 500 }}
                out:fade
                class=" h-full w-full bg-cover bg-center overflow-y-scroll text-white [&>ul]:list-disc [&>p]:mb-2 p-5 sm:p-10"
                style={`background-image: linear-gradient(to bottom, rgba(180, 65, 65, 0.8 ), rgba(180, 65, 65, 0.8)),url(${feature.image.sourceUrl})`}
              >
                {@html feature.details}
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
