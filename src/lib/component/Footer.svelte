<script>
  import { scrollToSection } from "../utils/scrollTo";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { isDark } from "../store/darkMode";
  import { navItems, socialMedia } from "../store/array";
  $: logoSrc = $isDark ? './dark-theme.svg' : './light-theme.svg';
</script>

<footer class="relative w-full text-dark2 font-primary overflow-hidden">
  <!-- Background Image -->
  <div
    class="absolute inset-0 bg-[url('./images/back.webp')] bg-cover bg-center"
  ></div>

  <!-- Overlay Transparan -->
  <div class="absolute inset-0 bg-secondary/80 dark:bg-primary/90"></div>
  <!-- Ubah ke bg-black/60 jika mau gelap -->

  <!-- Konten Footer -->
  <div class="relative z-10 px-6 py-10 text-primary dark:text-secondary">
    <div class="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Kolom 1: Brand/Deskripsi -->
      <div>
        <img
          src={logoSrc}
          alt="logo"
          class="-mb-5 -mt-10 w-30 h-auto"
          loading="lazy"
        />
        <p class="text-sm text-justify max-w-md">
          Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk
          menghubungi saya untuk kerja sama atau proyek!
        </p>
      </div>

      <!-- Kolom 2: Navigasi -->
      <div class="flex flex-col lg:ml-20">
        <h3 class="text-xl font-semibold text-dark mb-2">Navigasi</h3>
        <ul class="space-y-1 text-sm">
          {#each navItems as nav}
            <li>
              <button
                onclick={() => scrollToSection(nav.id)}
                class="hover:scale-105 hover:cursor-pointer">{nav.label}</button
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Kolom 3: Sosial Media -->
      <div class="flex flex-col lg:items-end">
        <h3 class="text-xl font-semibold text-dark mb-2">Ikuti Saya</h3>
        <div class="flex space-x-4">
          {#each socialMedia as s}
            <a
              target="_blank"
              href={s.href}
              aria-label={s.aria}
              class="hover:scale-105"
            >
              <FontAwesomeIcon icon={s.icon} class="text-dark text-xl" />
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Garis dan copyright -->
    <div class="max-w-7xl mx-auto flex flex-col">
      <hr class="my-6 border-primary dark:border-secondary border-[0.5px]" />
      <p class="text-center text-sm text-dark2">
        &copy; 2025 MyPorto - Web Portofolio . All rights reserved.
      </p>
    </div>
  </div>
</footer>
