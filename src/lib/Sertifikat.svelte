<script>
  import { onDestroy, onMount } from "svelte";
  import { tweened } from "svelte/motion"; // Import tweened untuk animasi halus
  import { cubicOut } from "svelte/easing";

  export let certificateImages = [
    // Pastikan path ke gambar Anda benar di sini atau dari parent component
    "./images/sertif1.webp",
    "./images/sertif2.webp",
    "./images/sertif3.webp",
  ];

  let currentIndex = 0;

  // Gunakan tweened store untuk menganimasikan nilai translateX secara otomatis
  // Nilai awal adalah 0 (tidak bergeser)
  const translateX = tweened(0, {
    duration: 500, // Durasi animasi 500ms
    easing: cubicOut, // Fungsi easing untuk gerakan yang lebih alami
  });

  // State untuk mencegah interaksi saat animasi sedang berjalan
  let isAnimating = false;

  // Fungsi untuk mengupdate slide
  async function updateSlide(newIndex) {
    if (isAnimating) return; // Jangan lakukan apa-apa jika sedang animasi

    isAnimating = true;

    // Hitung posisi target X. Setiap slide selebar 100% dari container.
    // Jadi, slide 0 di 0%, slide 1 di -100%, slide 2 di -200%, dst.
    const targetX = -newIndex * 100;

    // Set nilai tweened store. Ini akan memicu animasi
    await translateX.set(targetX); // await memastikan animasi selesai

    currentIndex = newIndex; // Update currentIndex setelah animasi selesai
    isAnimating = false;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % certificateImages.length;
    updateSlide(newIndex);
  }

  function prevSlide() {
    let newIndex =
      (currentIndex - 1 + certificateImages.length) % certificateImages.length;
    updateSlide(newIndex);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevSlide();
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });
</script>

<section id="slide-sertifikat" class="py-12 bg-secondary">
  <div class="container mx-auto px-4">
    <h2
      class="text-3xl lg:text-5xl font-primary font-bold text-center mb-8 text-primary"
    >
      Sertifikat Saya
    </h2>

    {#if certificateImages && certificateImages.length > 0}
      <div
        class="relative rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto"
      >
        <div
          class="flex w-full h-full"
          style="transform: translateX({$translateX}%);"
        >
          {#each certificateImages as imagePath, i (imagePath)}
            <div
              class="flex-shrink-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={imagePath}
                alt={`Sertifikat ${i + 1} dari ${certificateImages.length}`}
                class="max-w-full max-h-full object-contain bg-white block"
                loading="lazy"
              />
            </div>
          {/each}
        </div>

        {#if certificateImages.length > 1}
          <div
            class="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-4 z-10"
          >
            <button
              class="bg-primary bg-opacity-50 hover:bg-opacity-75 text-secondary font-bold py-2 px-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              on:click={prevSlide}
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              &larr;
            </button>
            <button
              class="bg-primary bg-opacity-50 hover:bg-opacity-75 text-secondary font-bold py-2 px-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              on:click={nextSlide}
              disabled={isAnimating}
              aria-label="Next slide"
            >
              &rarr;
            </button>
          </div>

          <div
            class="absolute bottom-0 left-0 w-full bg-primary bg-opacity-60 text-secondary text-center py-2 text-sm font-medium z-10"
          >
            {currentIndex + 1} / {certificateImages.length}
          </div>
        {/if}
      </div>
    {:else}
      <p class="text-center text-gray-600 italic">
        Tidak ada foto sertifikat untuk ditampilkan saat ini.
      </p>
    {/if}
  </div>
</section>

<style>
  /* Tidak perlu gaya CSS tambahan yang rumit karena menggunakan Tailwind dan tweened store */
</style>
