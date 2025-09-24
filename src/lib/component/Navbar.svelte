<script lang="ts">
  import { slide } from "svelte/transition";
  import { navItems } from "../store/navItems";
  import {
    showNavbar,
    navbarLight,
    toggleMenu,
    menuTerbuka,
    scrollToSection,
    halamanAktif,
  } from "../store/ui";
</script>

<header class="flex justify-center w-full">
  {#if $showNavbar}
    <div
      transition:slide={{ duration: 300 }}
      class={`w-[95%] md:w-[90%] transition-all ease-in duration-200 shadow-xl/50 rounded-bl-xl rounded-tr-xl rounded-md mt-2 fixed top-0 z-50 px-8 md:px-20 xl:px-30 h-10 md:h-16 2xl:h-18 flex bg-primary justify-between ${$navbarLight ? "bg-white/90" : "bg-gray-900/90"}`}
    >
      <div class="w-full justify-between lg:max-w-7xl flex">
        <!-- Logo -->
        <div class="basis-1/3 flex items-center">
          <img
            src={$navbarLight ? "./ligth-theme.svg" : "./dark-theme.svg"}
            alt="logo yayasan"
            class="w-18 md:w-26 lg:w-34 md:p-2"
            loading="eager"
          />
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden 2xl:flex basis-2/3 p-2 items-center justify-end">
          {#each navItems as item}
            <button
              onclick={() => scrollToSection(item.id)}
              class={`font-primary text-center mr-4 pb-1 text-[13px] md:text-[15px] lg:mr-10 w-25 tracking-[1px] hover:cursor-pointer hover:text-light border-b-2 hover:scale-105 transition-transform duration-75 ${$navbarLight ? "text-black" : "text-white"}`}
              class:border-secondary={$halamanAktif === item.id}
              class:scale-110={$halamanAktif === item.id}
              class:border-transparent={$halamanAktif !== item.id}
            >
              {item.label}
            </button>
          {/each}
        </nav>

        <!-- Hamburger -->
        <button
          class="2xl:hidden"
          onclick={toggleMenu}
          aria-label="tombol navbar"
        >
          <svg
            class={`w-6 h-6 ${$navbarLight ? "text-gray-900" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Mobile Menu -->
        {#if !$menuTerbuka}
          <nav
            transition:slide={{ duration: 400 }}
            class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm 2xl:hidden"
          >
            {#each navItems as item}
              <button
                onclick={() => scrollToSection(item.id)}
                class="text-white text-xl font-semibold my-4 border-b w-[80%] p-2 tracking-wide hover:text-secondary transition-colors"
              >
                {item.label}
              </button>
            {/each}
          </nav>
        {/if}
      </div>
    </div>
  {/if}
</header>
