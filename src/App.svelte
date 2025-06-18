<script>
  import "./app.css";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faGithub,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faCalendarAlt,
    faCameraAlt,
    faEnvelope,
    faGlobe,
    faObjectUngroup,
    faPhone,
    faUser,
    faSearch,
    faHome,
    faPerson,
    faPenFancy,
    faBriefcase,
  } from "@fortawesome/free-solid-svg-icons";
  import { onMount, tick, onDestroy } from "svelte";
  import { slide } from "svelte/transition";
  import DataProfil from "./lib/DataProfil.svelte";
  import Sertifikat from "./lib/Sertifikat.svelte";

  let halamanAktif = "section_1";
  let menuTerbuka = false;

  // Refs
  let gambarRef, aboutRef;
  let card1Section2R, card2Section2R;
  let card1Section3R, card2Section3R, card3Section3R, card4Section3R;
  let card1Section4R, card2Section4R, card3Section4R, card4Section4R;

  // Visibility Flags
  let gambarTerlihat = false;
  let aboutTerlihat = false;
  let card1Section2T = false;
  let card2Section2T = false;
  let card1Section3T = false;
  let card2Section3T = false;
  let card3Section3T = false;
  let card4Section3T = false;
  let card1Section4T = false;
  let card2Section4T = false;
  let card3Section4T = false;
  let card4Section4T = false;

  const profilItems = [
    {
      icon: faUser,
      tulisan: "Aflah Mahdi Yazdi",
    },
    {
      icon: faCameraAlt,
      tulisan: "22 Desember 2005",
    },
    {
      icon: faEnvelope,
      tulisan: "Diyaz.hal22@gmail.com",
    },
    {
      icon: faPhone,
      tulisan: "+62-823-3304-4295",
    },
  ];
  // Observer
  let observer;

  const navItems = [
    { id: "section_1", label: "Home", icon: faHome },
    { id: "section_2", label: "About Me", icon: faUser },
    { id: "section_3", label: "My Skills", icon: faPenFancy },
    { id: "section_4", label: "Portofolio", icon: faBriefcase },
  ];

  function handleScroll() {
    const posisi = window.scrollY + 100; // tambahkan offset bila ada navbar
    const tinggiHalaman = document.documentElement.scrollHeight;
    const tinggiViewport = window.innerHeight;

    const section1 = document.getElementById("section_1");
    const section2 = document.getElementById("section_2");
    const section3 = document.getElementById("section_3");
    const section4 = document.getElementById("section_4");

    const batas1 = section1?.offsetTop ?? 0;
    const batas2 = section2?.offsetTop ?? 0;
    const batas3 = section3?.offsetTop ?? 0;
    const batas4 = section4?.offsetTop ?? 0;

    // Jika sudah mencapai paling bawah halaman, pasti footer
    const sudahDiBawah = window.scrollY + tinggiViewport >= tinggiHalaman - 5;

    if (sudahDiBawah || posisi >= batas4) {
      halamanAktif = "section_4";
    } else if (posisi >= batas3) {
      halamanAktif = "section_3";
    } else if (posisi >= batas2) {
      halamanAktif = "section_2";
    } else {
      halamanAktif = "section_1";
    }

    // Tutup menu mobile ketika discroll
    if (menuTerbuka) {
      menuTerbuka = false;
    }
  }

  function toggleMenu() {
    menuTerbuka = !menuTerbuka;
  }

  onMount(async () => {
    window.addEventListener("scroll", handleScroll);
    await tick();

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;

          if (entry.target === gambarRef) {
            gambarTerlihat = isVisible;
          }

          if (entry.target === aboutRef) {
            aboutTerlihat = isVisible;
            if (isVisible) gambarTerlihat = false;
          }

          if (entry.target === card1Section2R) card1Section2T = isVisible;
          if (entry.target === card2Section2R) card2Section2T = isVisible;

          if (entry.target === card1Section3R) card1Section3T = isVisible;
          if (entry.target === card2Section3R) card2Section3T = isVisible;
          if (entry.target === card3Section3R) card3Section3T = isVisible;
          if (entry.target === card4Section3R) card4Section3T = isVisible;

          if (entry.target === card1Section4R) card1Section4T = isVisible;
          if (entry.target === card2Section4R) card2Section4T = isVisible;
          if (entry.target === card3Section4R) card3Section4T = isVisible;
          if (entry.target === card4Section4R) card4Section4T = isVisible;
        });
      },
      {
        threshold: 0.3,
      }
    );

    // Observing all refs
    [
      gambarRef,
      aboutRef,
      card1Section2R,
      card2Section2R,
      card1Section3R,
      card2Section3R,
      card3Section3R,
      card4Section3R,
      card1Section4R,
      card2Section4R,
      card3Section4R,
      card4Section4R,
    ].forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  });

  // Fungsi scroll tanpa href dan merubah url
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<header>
  <div
    class="fixed w-screen top-0 z-50 px-6 md:px-10 lg:px-24 xl:px-32 h-14 md:h-16 2xl:h-20 flex bg-secondary shadow-lg justify-between"
  >
    <div class="basis-1/3 flex items-center">
      <img
        src="./light-theme.svg"
        alt="logo"
        class="w-15 md:w-20 lg:w-25 h-auto"
      />
    </div>

    <!-- Tombol hamburger -->
    <button
      class="md:hidden text-primary"
      on:click={toggleMenu}
      aria-label="tombol navbar"
    >
      <svg
        class="w-6 h-6 text-primary"
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

    <!-- Ini Navbar dekstop -->
    <nav class="hidden md:flex basis-2/3 p-2 items-center justify-end">
      {#each navItems as item}
        <button
          on:click={() => scrollToSection(item.id)}
          class="font-primary text-center mr-4 pb-1 text-[13px] md:text-[15px] lg:mr-10 w-25 tracking-[1px] text-primary hover:text-green border-b-1 hover:scale-105 hover:cursor-pointer transition-transform duration-75"
          class:border-primary={halamanAktif === item.id}
          class:scale-105={halamanAktif === item.id}
          class:border-transparent={halamanAktif !== item.id}
        >
          {item.label}
        </button>
      {/each}
    </nav>
    <!-- Menu Mobile -->
    {#if menuTerbuka}
      <nav
        transition:slide={{ duration: 400 }}
        class="absolute right-0 top-12 w-screen bg-secondary/90 px-4 pb-4 shadow-md md:hidden"
      >
        {#each navItems as item}
          <button
            on:click={() => scrollToSection(item.id)}
            class="font-primary text-left flex w-full border-b text-primary p-2 justify-center hover:cursor-pointer"
            ><FontAwesomeIcon icon={item.icon} class="text-lg mr-2" />
            {item.label}
          </button>
        {/each}
      </nav>
    {/if}
  </div>
</header>
<main>
  <!-- Section 1 -->
  <section
    class="w-full flex flex-col-reverse lg:flex-row px-6 md:px-10 lg:px-24 xl:px-32 items-center justify-between h-screen relative z-0 overflow-hidden bg-cover bg-[url('./images/back.jpg')]"
    id="section_1"
  >
    <div class="absolute inset-0 bg-secondary/80"></div>

    <!-- Gambar -->
    <div
      bind:this={gambarRef}
      class="relative z-10 h-2/3 lg:h-screen transition-all duration-700 ease-out lg:basis-1/2 transform flex items-end justify-center"
      class:translate-y-100={!gambarTerlihat}
      class:opacity-0={!gambarTerlihat}
      class:translate-y-15={gambarTerlihat}
      class:opacity-100={gambarTerlihat}
    >
      <img
        src="./images/fullbody.png"
        alt="Foto"
        class="h-full lg:w-9/10 object-contain transition-all duration-200 hover:scale-110"
      />
    </div>

    <!-- Teks + Tombol -->
    <div
      class="relative h-1/3 2xl:h-screen lg:mt-10 2xl:mt-0 z-10 flex flex-col justify-center items-center text-center md:text-left mt-8 md:mt-10 space-y-4 px-4 sm:px-6 lg:basis-1/2"
    >
      <h1
        bind:this={gambarRef}
        class="font-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl uppercase font-bold transition-all duration-700 ease-out transform"
        class:-translate-y-10={!gambarTerlihat}
        class:opacity-0={!gambarTerlihat}
        class:translate-y-15={gambarTerlihat}
        class:opacity-100={gambarTerlihat}
      >
        Welcome
      </h1>
      <h3
        bind:this={gambarRef}
        class="font-primary font-medium text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl uppercase tracking-[1.5px] transition-all duration-700 ease-out transform"
        class:-translate-y-10={!gambarTerlihat}
        class:opacity-0={!gambarTerlihat}
        class:translate-y-10={gambarTerlihat}
        class:opacity-100={gambarTerlihat}
      >
        to my web
      </h3>
      <a
        href="#section_2"
        bind:this={gambarRef}
        class="font-primary mt-6 bg-primary hover:bg-brown text-secondary hover:text-light rounded-xl text-sm sm:text-base md:text-lg lg:text-xl py-2 px-5 uppercase shadow transition-all duration-300 ease-out transform"
        class:-translate-y-10={!gambarTerlihat}
        class:opacity-0={!gambarTerlihat}
        class:translate-y-10={gambarTerlihat}
        class:opacity-100={gambarTerlihat}
      >
        About Me
      </a>
    </div>
  </section>

  <!-- Section 2 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-10 lg:px-24 xl:px-32 py-16 md:py-20 lg:py-24 flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-16"
    id="section_2"
  >
    <!-- KIRI: Gambar -->
    <div class="flex flex-col gap-6 w-full">
      <img
        src="./images/foto-personal.jpg"
        alt="Foto Personal"
        bind:this={aboutRef}
        class="w-full aspect-square object-cover rounded-3xl shadow-xl transition-all duration-700 ease-out transform h-100 lg:h-full"
        class:-translate-x-24={!aboutTerlihat}
        class:opacity-0={!aboutTerlihat}
        class:translate-x-0={aboutTerlihat}
        class:opacity-100={aboutTerlihat}
      />
    </div>

    <!-- KANAN: Konten -->
    <div class="w-full text-secondary space-y-8 lg:h-full">
      <!-- Tentang Saya -->
      <div
        bind:this={card1Section2R}
        class:-translate-x-24={!card1Section2T}
        class:opacity-0={!card1Section2T}
        class:translate-x-0={card1Section2T}
        class:opacity-100={card1Section2T}
        class="bg-brown shadow-xl p-6 rounded-2xl transition-all duration-700 ease-out transform"
      >
        <h2
          class="font-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 text-center md:text-left"
        >
          Tentang Saya
        </h2>
        <p
          class="font-display text-sm md:text-sm lg:text-lg xl:text-xl leading-relaxed text-center md:text-justify"
        >
          Saya seorang Front-End developer yang terbiasa mendesain web dari yang
          sederhana sampai cukup kompleks. Saya juga memiliki pengalaman dalam
          fotografi, desain grafis menggunakan Photoshop & CorelDraw, serta
          administrasi dan pencatatan data.
        </p>
      </div>

      <!-- Profil Saya -->
      <div
        bind:this={card2Section2R}
        class:-translate-x-24={!card2Section2T}
        class:opacity-0={!card2Section2T}
        class:translate-x-0={card2Section2T}
        class:opacity-100={card2Section2T}
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
  </section>

  <!-- Section 3 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-16 lg:px-32 py-16 flex flex-col items-center justify-center gap-8 md:pt-30"
    id="section_3"
  >
    <div
      bind:this={card1Section3R}
      class:-translate-x-24={!card1Section3T}
      class:opacity-0={!card1Section3T}
      class:translate-x-0={card1Section3T}
      class:opacity-100={card1Section3T}
      class="bg-brown shadow-light shadow-2xl/20 p-2 md:p-5 mb-10 w-60 md:w-70 lg:w-80 xl:w-100 2xl:w-120 text-center rounded-2xl shadow-xl transition-all duration-700 ease-out transform"
    >
      <h2
        class="font-primary text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-light mb-2"
      >
        MY SKILLS
      </h2>
    </div>
    <div
      class="w-full flex flex-col items-center xl:flex-row lg:flex-wrap xl:flex-nowrap justify-center gap-10 px-4 xl:items-stretch"
    >
      <div
        bind:this={card2Section3R}
        class:-translate-x-24={!card2Section3T}
        class:opacity-0={!card2Section3T}
        class:translate-x-0={card2Section3T}
        class:opacity-100={card2Section3T}
        class="w-full lg:w-1/3 mb-6 flex flex-col items-center text-center transition-all duration-700 ease-out transform"
      >
        <button>
          <FontAwesomeIcon
            icon={faGlobe}
            class="text-brown fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"
          />
        </button>
        <h2
          class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          WEB Development
        </h2>
        <div
          class="w-full bg-brown p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"
        >
          <p
            class="font-display break-words w-full text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl"
          >
            Butuh website buat jualan online, atau website untuk admin kantor?
            Saya dapat membuatnya dengan menggunakan HTML, CSS dan juga
            Javascript. Dijamin responsif bisa dibuka di mana saja.
          </p>
          <hr class="border-t-3 mt-5 border-dark2" />
          <button
            class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faSearch} class="fa-2x" />
          </button>
        </div>
      </div>

      <div
        bind:this={card3Section3R}
        class:-translate-x-24={!card3Section3T}
        class:opacity-0={!card3Section3T}
        class:translate-x-0={card3Section3T}
        class:opacity-100={card3Section3T}
        class="w-full lg:w-1/3 mb-6 flex flex-col items-center text-center transition-all duration-700 ease-out transform"
      >
        <button>
          <FontAwesomeIcon
            icon={faObjectUngroup}
            class="text-brown fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"
          />
        </button>
        <h2
          class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          Desain Grafis
        </h2>
        <div
          class="w-full bg-brown p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"
        >
          <p
            class="break-words w-full font-display text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl"
          >
            Butuh desain yang menarik dan cepat? Saya dapat mewujudkannya dengan
            menggunakan CorelDraw dan juga Photoshop.
          </p>
          <hr class="border-t-3 mt-16 border-dark2" />
          <button
            class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faSearch} class="fa-2x" />
          </button>
        </div>
      </div>

      <div
        bind:this={card4Section3R}
        class:-translate-x-24={!card4Section3T}
        class:opacity-0={!card4Section3T}
        class:translate-x-0={card4Section3T}
        class:opacity-100={card4Section3T}
        class="w-full lg:w-1/3 mb-6 flex flex-col items-center text-center transition-all duration-700 ease-out transform"
      >
        <button>
          <FontAwesomeIcon
            icon={faCameraAlt}
            class="text-brown fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"
          />
        </button>
        <h2
          class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          Fotografi
        </h2>
        <div
          class="w-full bg-brown p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"
        >
          <p
            class="break-words w-full font-display text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl"
          >
            Punya acara tapi tidak punya fotografer? Kamilah solusinya. Dengan
            lebih dari 100 portofolio, bisa dipastikan kami memiliki pengalaman
            banyak dalam bidang ini.
          </p>
          <hr class="border-t-3 mt-8 border-dark2" />
          <button
            class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faSearch} class="fa-2x" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Sertifikat -->
  <Sertifikat />

  <!-- Section 4 -->
  <section
    class="w-full min-h-screen bg-secondary px-6 md:px-16 lg:px-32 py-20 flex flex-col items-center justify-around gap-8 md:pt-30 z-30"
    id="section_4"
  >
    <div
      bind:this={card1Section4R}
      class:-translate-x-24={!card1Section4T}
      class:opacity-0={!card1Section4T}
      class:translate-x-0={card1Section4T}
      class:opacity-100={card1Section4T}
      class="bg-brown shadow-light shadow-2xl/20 p-5 md:p-7 mb-10 w-80 md:w-100 lg:w-120 xl:w-140 2xl:w-160 text-center rounded-2xl shadow-xl transition-all duration-700 ease-out transform"
    >
      <h2
        class="font-primary text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-light mb-2"
      >
        Link Portofolio Saya
      </h2>
    </div>
    <div
      class="flex gap-20 flex-col md:flex-row 2xl:flex-nowrap justify-center md:gap-30 px-4 items-center"
    >
      <!-- Kartu 1 -->
      <div
        bind:this={card2Section4R}
        class:-translate-x-24={!card2Section4T}
        class:opacity-0={!card2Section4T}
        class:translate-x-0={card2Section4T}
        class:opacity-100={card2Section4T}
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
        bind:this={card3Section4R}
        class:translate-x-24={!card3Section4T}
        class:opacity-0={!card3Section4T}
        class:translate-x-0={card3Section4T}
        class:opacity-100={card3Section4T}
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
      bind:this={card4Section4R}
      class:-translate-x-24={!card4Section4T}
      class:opacity-0={!card4Section4T}
      class:translate-x-0={card4Section4T}
      class:opacity-100={card4Section4T}
      class="mt-5 md:mt-30 text-center text-lg md:text-xl font-medium font-primary transition-all duration-700 ease-out transform"
    >
      -- Thanks for your attention --
    </p>
  </section>
</main>

<footer class="relative w-full text-dark2 font-primary overflow-hidden">
  <!-- Background Image -->
  <div
    class="absolute inset-0 bg-[url('./images/back.jpg')] bg-cover bg-center"
  ></div>

  <!-- Overlay Transparan -->
  <div class="absolute inset-0 bg-secondary/80"></div>
  <!-- Ubah ke bg-black/60 jika mau gelap -->

  <!-- Konten Footer -->
  <div class="relative z-10 px-6 py-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Kolom 1: Brand/Deskripsi -->
      <div>
        <img
          src="./light-theme.svg"
          alt="logo"
          class="-mb-5 -mt-10 w-30 h-auto"
          loading="lazy"
        />
        <p class="text-sm text-dark2">
          Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk
          menghubungi saya untuk kerja sama atau proyek!
        </p>
      </div>

      <!-- Kolom 2: Navigasi -->
      <div>
        <h3 class="text-xl font-semibold text-dark mb-2">Navigasi</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#section_1" class="hover:text-dark">Home</a></li>
          <li><a href="#section_2" class="hover:text-dark">About me</a></li>
          <li><a href="#section_3" class="hover:text-dark">Skills</a></li>
          <li><a href="#section_4" class="hover:text-dark">Portofolio</a></li>
        </ul>
      </div>

      <!-- Kolom 3: Sosial Media -->
      <div>
        <h3 class="text-xl font-semibold text-dark mb-2">Ikuti Saya</h3>
        <div class="flex space-x-4">
          <a
            target="_blank"
            href="https://www.instagram.com/mas_yazz22/"
            aria-label="Instagram"
            class="hover:text-dark"
          >
            <FontAwesomeIcon icon={faInstagram} class="text-dark text-xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aflah-mahdi-yazdi-a69414355/"
            aria-label="LinkedIn"
            class="hover:text-dark"
          >
            <FontAwesomeIcon icon={faLinkedin} class="text-dark text-xl" />
          </a>
          <a
            target="_blank"
            href="https://github.com/MasYaaz"
            aria-label="GitHub"
            class="hover:text-dark"
          >
            <FontAwesomeIcon icon={faGithub} class="text-dark text-xl" />
          </a>
        </div>
      </div>
    </div>

    <!-- Garis dan copyright -->
    <hr class="my-6 border-dark2" />
    <p class="text-center text-sm text-dark2">
      &copy; 2025 MyPorto - Web Portofolio . All rights reserved.
    </p>
  </div>
</footer>
