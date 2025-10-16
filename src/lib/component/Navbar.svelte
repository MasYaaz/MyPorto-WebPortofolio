<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import {
    showNavbar,
    toggleMenu,
    menuTerbuka,
    scrollToSection,
    halamanAktif,
  } from "../store/ui";
  import DarkmodeButton from "./DarkmodeButton.svelte";
  import { isDark } from "../store/darkMode";
  import { navItems } from "../store/array";

  $: logoSrc = $isDark ? "./light-theme.svg" : "./dark-theme.svg";
</script>

<header class="flex justify-center w-full">
  {#if $showNavbar}
    <div
      transition:fade={{ duration: 300 }}
      class="w-[92%] md:w-[95%] transition-all ease-in duration-200 shadow-xl/50 rounded-bl-xl rounded-tr-xl rounded-md justify-center mt-2 fixed top-0 z-50 px-8 md:px-20 h-12 md:h-16 xl:h-20 flex bg-primary dark:bg-secondary"
    >
      <div class="w-full justify-between lg:max-w-8xl flex">
        <!-- Logo -->
        <div class="basis-1/3 flex items-center">
          <img
            src={logoSrc}
            alt="logo"
            width="100"
            height="40"
            class="w-18 md:w-26 lg:w-34 md:p-2"
            loading="eager"
          />
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden 2xl:flex basis-2/3 p-2 items-center justify-end">
          {#if !$isDark}
            {#each navItems as item}
              <button
                onclick={() => scrollToSection(item.id)}
                class="text-secondary dark:text-primary font-display text-center mr-4 pb-1 text-[13px] md:text-[15px] lg:mr-10 w-25 tracking-[1px] hover:cursor-pointer hover:text-light border-b-2 hover:scale-105 transition-transform duration-75"
                class:border-secondary={$halamanAktif === item.id}
                class:scale-110={$halamanAktif === item.id}
                class:border-transparent={$halamanAktif !== item.id}
                aria-label={item.aria}
              >
                {item.label}
              </button>
            {/each}
          {/if}
          {#if $isDark}
            {#each navItems as item}
              <button
                onclick={() => scrollToSection(item.id)}
                class="text-secondary dark:text-primary font-display text-center mr-4 pb-1 text-[13px] md:text-[15px] lg:mr-10 w-25 tracking-[1px] hover:cursor-pointer hover:text-light border-b-2 hover:scale-105 transition-transform duration-75"
                class:border-primary={$halamanAktif === item.id}
                class:scale-110={$halamanAktif === item.id}
                class:border-transparent={$halamanAktif !== item.id}
                aria-label={item.aria}
              >
                {item.label}
              </button>
            {/each}
          {/if}
        </nav>

        <div class="h-full flex gap-2">
          <DarkmodeButton />
          <!-- Hamburger -->
          <button
            class="2xl:hidden"
            onclick={toggleMenu}
            aria-label="tombol navbar"
          >
            <svg
              class={`w-6 h-6 ${$isDark ? "text-primary" : "text-secondary"}`}
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
        </div>

        <!-- Mobile Menu -->
        {#if $menuTerbuka}
          <nav
            transition:slide={{ duration: 400 }}
            class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm 2xl:hidden"
          >
            {#each navItems as item}
              <button
                onclick={() => scrollToSection(item.id)}
                aria-label={item.aria}
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
