<script>
  import { Moon, Sun } from "lucide-svelte";
  import { isDark } from "../store/darkMode";
  import { get } from "svelte/store";
  import { showNavbar } from "../store/ui";

  let dark = get(isDark);

  function toggleDark() {
    dark = !dark;
    isDark.set(dark);
  }
</script>

{#if $showNavbar}
  <button
    onclick={toggleDark}
    class="hover:cursor-pointer 2xl:mb-1 transition-all duration-300 hover:scale-110 text-secondary dark:text-primary hover:text-red-600"
  >
    {#if dark}
      <Moon size="23" />
    {:else}
      <Sun size="23" />
    {/if}
  </button>
{/if}

{#if !$showNavbar}
  <button
    onclick={toggleDark}
    class="hover:cursor-pointer 2xl:mb-1 transition-all duration-300 hover:scale-110 text-primary dark:text-secondary hover:text-red-600"
  >
    {#if dark}
      <Moon size="23" />
    {:else}
      <Sun size="23" />
    {/if}
  </button>
{/if}
