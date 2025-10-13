<script>
  import "./app.css";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  import { onMount, onDestroy } from "svelte";
  import { slide } from "svelte/transition";
  import DataProfil from "./lib/DataProfil.svelte";
  import Sertifikat from "./lib/Sertifikat.svelte";
  import { navItems } from "./lib/store/navItems";
  import { refs, ids, visibleFlags } from "./lib/store/sectionRefs";
  import { scrollToSection } from "./lib/utils/scrollTo";
  import { handleScroll } from "./lib/utils/scrollHandler";
  import Navbar from "./lib/component/Navbar.svelte";
  import {
    halamanAktif,
    navbarLight,
    menuTerbuka,
    toggleMenu,
  } from "./lib/store/ui";
  import { mySkill, profilItems } from "./lib/store/array";
  import Footer from "./lib/component/Footer.svelte";

  // Observer
  let observer;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Object.keys(refs).find(
            (key) => refs[key] === entry.target
          );
          if (id) {
            visibleFlags[id] = entry.isIntersecting;
          }
        });
      },
      { threshold: 0 }
    );

    ids.forEach((id) => {
      const el = refs[id];
      if (el) observer.observe(el);
    });
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect(); // bersihkan observer juga
    };
  });
</script>

<Navbar />

<main>
  <!-- Section 1 -->
  <div class="absolute w-full flex justify-center">
    <div
      id="topNavbar"
      class={`w-full justify-center absolute top-0 z-50 px-8 md:px-20 xl:px-30 h-10 md:h-16 2xl:h-18 flex`}
    >
      <div class="w-full justify-between flex mt-5">
        <!-- Logo -->
        <div class="basis-1/3 flex items-center">
          <img
            src={$navbarLight ? "./dark-theme.svg" : "./light-theme.svg"}
            alt="logo yayasan"
            fetchpriority="high"
            class="w-18 md:w-26 lg:w-34 md:p-2"
            loading="eager"
          />
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden 2xl:flex basis-2/3 p-2 items-center justify-end">
          {#each navItems as item}
            <button
              onclick={() => scrollToSection(item.id)}
              class={`font-primary font-medium text-center mr-4 pb-1 text-[13px] lg:text-[17px] lg:mr-10 w-30 tracking-[1px] hover:cursor-pointer hover:text-light border-b-2 hover:scale-105 transition-transform duration-75 ${$navbarLight ? "text-secondary" : "text-primary"}`}
              class:border-primary={$halamanAktif === item.id}
              class:scale-110={$halamanAktif === item.id}
              class:border-transparent={$halamanAktif !== item.id}
            >
              {item.label}
            </button>
          {/each}
        </nav>

        <!-- Hamburger -->
        <button
          class="2xl:hidden hover:scale-105 transition-transform"
          onclick={toggleMenu}
          aria-label="tombol navbar"
        >
          <svg
            class={`w-6 h-6 ${$navbarLight ? "text-secondary" : "text-primary"}`}
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
        {#if $menuTerbuka}
          <nav
            transition:slide={{ duration: 400 }}
            class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary/50 backdrop-blur-sm 2xl:hidden"
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
  </div>
  <section
    class="relative w-full flex justify-center items-end overflow-hidden h-screen bg-cover bg-[url('./images/back.webp')]"
    id="section_1"
  >
    <div class="absolute inset-0 bg-secondary/80"></div>

    <div
      class="flex lg:mx-20 pt-10 max-w-xl lg:max-w-full h-full justify-center items-end flex-col-reverse lg:flex-row"
    >
      <!-- Gambar -->
      <div
        bind:this={refs["gambarRef"]}
        class="transition-all duration-700 ease-out basis-2/3 transform"
        class:translate-y-100={!visibleFlags["gambarRef"]}
        class:opacity-0={!visibleFlags["gambarRef"]}
        class:translate-y-15={visibleFlags["gambarRef"]}
        class:opacity-100={visibleFlags["gambarRef"]}
      >
        <img
          src="./images/fullbody.webp"
          loading="eager"
          fetchpriority="high"
          alt="Foto"
          class="w-full lg:max-h-screen transition-all duration-200 hover:scale-110"
        />
      </div>

      <!-- Teks + Tombol -->
      <div
        class="flex flex-col w-full h-full basis-1/3 justify-center items-center text-center gap-5"
      >
        <h1
          bind:this={refs["gambarRef"]}
          class="font-primary text-primary text-5xl xl:text-8xl uppercase font-bold transition-all duration-700 ease-out transform"
          class:-translate-y-10={!visibleFlags["gambarRef"]}
          class:opacity-0={!visibleFlags["gambarRef"]}
          class:translate-y-15={visibleFlags["gambarRef"]}
          class:opacity-100={visibleFlags["gambarRef"]}
        >
          Welcome
        </h1>
        <h3
          bind:this={refs["gambarRef"]}
          class="font-primary font-medium text-xl xl:text-4xl uppercase tracking-[1.5px] transition-all duration-700 ease-out transform"
          class:-translate-y-10={!visibleFlags["gambarRef"]}
          class:opacity-0={!visibleFlags["gambarRef"]}
          class:translate-y-10={visibleFlags["gambarRef"]}
          class:opacity-100={visibleFlags["gambarRef"]}
        >
          to my web
        </h3>
        <button
          onclick={() => scrollToSection("section_2")}
          bind:this={refs["gambarRef"]}
          class="font-primary hover:cursor-pointer hover:scale-105 xl:mt-6 bg-primary hover:bg-brown text-secondary hover:text-light rounded-xl text-lg lg:text-2xl py-2 px-5 uppercase shadow transition-transform duration-300 ease-out"
          class:-translate-y-10={!visibleFlags["gambarRef"]}
          class:opacity-0={!visibleFlags["gambarRef"]}
          class:translate-y-10={visibleFlags["gambarRef"]}
          class:opacity-100={visibleFlags["gambarRef"]}
        >
          About Me
        </button>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-10 lg:px-24 xl:px-32 py-16 md:py-20 lg:py-24 flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-16"
    id="section_2"
  >
    <div class="lg:max-w-6xl gap-5 flex flex-col md:flex-row">
      <!-- KIRI: Gambar -->
      <div class="flex flex-col gap-6 w-full">
        <img
          src="./images/personal.webp"
          alt="Foto Personal"
          bind:this={refs["aboutRef"]}
          class="w-full aspect-square object-cover rounded-3xl shadow-xl transition-all duration-700 ease-out transform h-100 md:h-full"
          class:-translate-x-24={!visibleFlags["aboutRef"]}
          class:opacity-0={!visibleFlags["aboutRef"]}
          class:translate-x-0={visibleFlags["aboutRef"]}
          class:opacity-100={visibleFlags["aboutRef"]}
        />
      </div>

      <!-- KANAN: Konten -->
      <div class="w-full text-secondary space-y-8 lg:h-full">
        <!-- Tentang Saya -->
        <div
          bind:this={refs["card1Section2R"]}
          class:-translate-x-24={!visibleFlags["card1Section2R"]}
          class:opacity-0={!visibleFlags["card1Section2R"]}
          class:translate-x-0={visibleFlags["card1Section2R"]}
          class:opacity-100={visibleFlags["card1Section2R"]}
          class="bg-brown shadow-xl p-6 rounded-2xl transition-all flex flex-col items-center duration-700 ease-out transform"
        >
          <h2
            class="font-primary text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-4 text-center md:text-left"
          >
            Tentang Saya
          </h2>
          <p
            class="font-display text-sm md:text-sm lg:text-lg xl:text-xl leading-relaxed text-center"
          >
            Saya seorang Front-End developer yang terbiasa mendesain web dari
            yang sederhana sampai cukup kompleks. Saya juga memiliki pengalaman
            dalam fotografi, desain grafis menggunakan Photoshop & CorelDraw,
            serta administrasi dan pencatatan data.
          </p>
        </div>

        <!-- Profil Saya -->
        <div
          bind:this={refs["card2Section2R"]}
          class:-translate-x-24={!visibleFlags["card2Section2R"]}
          class:opacity-0={!visibleFlags["card2Section2R"]}
          class:translate-x-0={visibleFlags["card2Section2R"]}
          class:opacity-100={visibleFlags["card2Section2R"]}
          class="bg-brown shadow-xl p-6 rounded-2xl space-y-6 transition-all duration-700 ease-out transform"
        >
          <h2
            class="font-primary text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center mb-4"
          >
            Profil Saya
          </h2>

          <!-- Data Profil Grid -->
          <div class="grid grid-cols-2 p-1 gap-6">
            <!-- Nama -->
            {#each profilItems as item (item.tulisan)}
              <DataProfil {item} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-16 lg:px-32 py-16 flex flex-col items-center justify-center gap-8 md:pt-30"
    id="section_3"
  >
    <div class="max-w-lg lg:max-w-6xl flex flex-col items-center">
      <div
        bind:this={refs["card1Section3R"]}
        class:-translate-x-24={!visibleFlags["card1Section3R"]}
        class:opacity-0={!visibleFlags["card1Section3R"]}
        class:translate-x-0={visibleFlags["card1Section3R"]}
        class:opacity-100={visibleFlags["card1Section3R"]}
        class="bg-primary shadow-light shadow-2xl/20 p-2 md:p-5 mb-10 w-60 md:w-70 lg:w-80 xl:w-100 2xl:w-120 text-center rounded-2xl shadow-xl transition-all duration-700 ease-out transform"
      >
        <h2
          class="font-primary text-secondary text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-light mb-2"
        >
          MY SKILLS
        </h2>
      </div>
      <div
        class="w-full flex flex-col items-center xl:flex-row lg:flex-wrap xl:flex-nowrap justify-center gap-10 px-4 xl:items-stretch"
      >
        {#each mySkill as S, i}
          <div
            bind:this={refs[`cardSection3_${i}`]}
            class:-translate-x-24={!visibleFlags[`cardSection3_${i}`]}
            class:opacity-0={!visibleFlags[`cardSection3_${i}`]}
            class:translate-x-0={visibleFlags[`cardSection3_${i}`]}
            class:opacity-100={visibleFlags[`cardSection3_${i}`]}
            class="w-full lg:w-1/3 mb-6 flex flex-col items-center text-center transition-all duration-700 ease-out transform"
          >
            <button>
              <FontAwesomeIcon
                icon={S.logo}
                class="text-primary fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"
              />
            </button>
            <h2
              class="font-primary break-words w-full h-20 text-primary items-center flex justify-center font-bold text-light p-2 text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            >
              {S.judul}
            </h2>
            <div
              class="w-full bg-primary p-6 rounded-2xl shadow-xl/60 flex flex-col justify-between flex-1 h-full"
            >
              <p
                class="font-display text-secondary break-words w-full h-full text-dark2 text-sm md:text-sm lg:text-md xl:text-md 2xl:text-lg"
              >
                {S.deskripsi}
              </p>
              <hr class="border-t-3 mt-5 border-secondary" />
              <button
                class="mt-4 self-center hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faSearch} class="fa-2x text-secondary" />
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Section Sertifikat -->
  <section id="slide-sertifikat" class="py-12 bg-secondary">
    <div
      class="container mx-auto px-4 transition-transform duration-500"
      bind:this={refs["sertifikat"]}
      class:-translate-x-24={!visibleFlags["sertifikat"]}
      class:opacity-0={!visibleFlags["sertifikat"]}
      class:translate-x-0={visibleFlags["sertifikat"]}
      class:opacity-100={visibleFlags["sertifikat"]}
    >
      <Sertifikat />
    </div>
  </section>

  <!-- Section 4 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-16 lg:px-32 py-20 flex flex-col items-center justify-around gap-8 md:pt-30 z-30"
    id="section_4"
  >
    <div class="max-w-lg lg:max-w-4xl flex flex-col items-center">
      <div
        bind:this={refs["card1Section4R"]}
        class:-translate-x-24={!visibleFlags["card1Section4R"]}
        class:opacity-0={!visibleFlags["card1Section4R"]}
        class:translate-x-0={visibleFlags["card1Section4R"]}
        class:opacity-100={visibleFlags["card1Section4R"]}
        class="bg-brown shadow-light shadow-2xl/20 p-5 md:p-7 mb-10 w-80 md:w-100 lg:w-120 xl:w-140 2xl:w-160 text-center rounded-2xl shadow-xl transition-all duration-700 ease-out transform"
      >
        <h2
          class="font-primary text-secondary text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-light mb-2"
        >
          Link Portofolio Saya
        </h2>
      </div>
      <div
        class="flex gap-20 flex-col md:flex-row 2xl:flex-nowrap justify-center md:gap-30 px-4 items-center"
      >
        <!-- Kartu 1 -->
        <div
          bind:this={refs["card2Section4R"]}
          class:-translate-x-24={!visibleFlags["card2Section4R"]}
          class:opacity-0={!visibleFlags["card2Section4R"]}
          class:translate-x-0={visibleFlags["card2Section4R"]}
          class:opacity-100={visibleFlags["card2Section4R"]}
          class="w-full md:w-1/2 transition-all flex justify-center duration-700 ease-out transform"
        >
          <a
            href="https://github.com/MasYaaz"
            target="_blank"
            aria-label="Github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              class="text-[160px] lg:text-[220px] hover:scale-115 duration-700"
            />
          </a>
        </div>

        <!-- Kartu 2 -->
        <div
          bind:this={refs["card3Section4R"]}
          class:translate-x-24={!visibleFlags["card3Section4R"]}
          class:opacity-0={!visibleFlags["card3Section4R"]}
          class:translate-x-0={visibleFlags["card3Section4R"]}
          class:opacity-100={visibleFlags["card3Section4R"]}
          class="w-fit md:w-1/2 transition-all duration-700 ease-out transform"
        >
          <a
            href="https://www.shutterstock.com/g/MasYaaz"
            target="_blank"
            aria-label="Shutterstock"
          >
            <img
              loading="lazy"
              alt="Shutterstock"
              src="./images/shutterstock.svg"
              class="w-45 lg:w-60 h-fit p-4 md:mb-3 hover:scale-115 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
      <p
        bind:this={refs["card4Section4R"]}
        class:-translate-x-24={!visibleFlags["card4Section4R"]}
        class:opacity-0={!visibleFlags["card4Section4R"]}
        class:translate-x-0={visibleFlags["card4Section4R"]}
        class:opacity-100={visibleFlags["card4Section4R"]}
        class="mt-5 md:mt-30 text-center text-primary text-lg md:text-xl font-medium font-primary transition-all duration-700 ease-out transform"
      >
        -- Thanks for your attention --
      </p>
    </div>
  </section>
</main>

<Footer />
