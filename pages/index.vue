<template>
  <div class="flex flex-col">

    <div class="hero min-h-screen" id="hero-section">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-base-100 text-center">
        <div class="max-w-lg" data-aos="fade-down">
          <h1 class="mb-3 text-5xl font-bold">{{ page.layout[0]?.content }}</h1>
          <h2 class="text-xl font-semibold">{{ page.layout[1]?.content }}</h2>
          <div class="divider divider-primary my-2"></div>
          <p class="prose text-base-100 text-lg">
            {{ page.layout[2]?.content }}
          </p>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <section class="min-h-screen flex flex-col bg-base text-base-content p-8">
      <div class="flex flex-col items-center text-center rounded-lg bg-base-200 p-6 mb-8" data-aos="zoom-in">
        <div class="badge badge-primary badge-lg">{{ page.layout[3]?.content }}</div>
        <h2 class="text-base-content text-4xl font-bold">{{ page.layout[4]?.content }}</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
            <img src="/public/Gruppe_Billiard.jpeg" alt="Gruppenbild" class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">{{ page.layout[6]?.content }}</h3>
            <p>{{ page.layout[7]?.content }}</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
            <img src="/public/Fluss_Anstoßen.jpeg" alt="Anstoßen an der Donau"
              class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">{{ page.layout[9]?.content }}</h3>
            <p>{{ page.layout[10]?.content }}</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
            <img src="/public/Wappen_Flagge.jpg" alt="Auszeichnung vor Wappen"
              class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">{{ page.layout[12]?.content }}</h3>
            <p>{{ page.layout[13]?.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="min-h-screen flex flex-col bg-base-200 text-base-content p-8">
      <div class="bg-base-100 flex flex-col items-center text-center rounded-lg p-8 mb-8" data-aos="zoom-in">
        <div class="badge badge-secondary badge-lg">{{ page.layout[14]?.content }}</div>
        <h2 class="text-4xl font-bold">{{ page.layout[15]?.content }}</h2>
      </div>

      <div class="flex flex-col items-center justify-center w-full max-w-4xl p-8 mx-auto">
        <!-- First Question and Answer -->
        <div class="flex items-center mb-8 prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
          <div class="font-semibold text-xl w-2/5 pr-4">{{ page.layout[16]?.content }}</div>
          <div class="divider divider-horizontal divider-primary mx-4"></div>
          <div class="pl-4 w-3/5">
            <p>{{ page.layout[17]?.content }}</p>
          </div>
        </div>

        <!-- Second Question and Answer -->
        <div class="flex items-center mb-8 prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
          <div class="font-semibold text-xl w-2/5 pr-4">{{ page.layout[18]?.content }}</div>
          <div class="divider divider-horizontal divider-secondary mx-4"></div>
          <div class="pl-4 w-3/5">
            <p>{{ page.layout[19]?.content }}</p>
          </div>
        </div>

        <!-- Third Question and Answer -->
        <div class="flex items-center prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
          <div class="font-semibold text-xl w-2/5 pr-4">{{ page.layout[20]?.content }}</div>
          <div class="divider divider-horizontal divider-primary mx-4"></div>
          <div class="pl-4 w-3/5">
            <p>{{ page.layout[21]?.content }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const page = ref({
  _id: '66d17ca0a241519bf04e2f43',
  clientId: 2,
  pageId: 1,
  layout: [
    {
      type: '',
      name: '',
      content: ''
    }
  ]
}
);

async function getPageData() {
  try {
    // Fetch data from the API using pageId
    const res = await axios.get(`http://localhost:3000/page/${page.value._id}`);

    // Log the response data to inspect its structure
    console.log('API Response:', res.data);

    // Ensure that the fetched data has a layout property and it is an array
    if (res.data && res.data.page && Array.isArray(res.data.page.layout)) {
      page.value = res.data.page; // Correctly assign the data to page.value
      console.log('Page Data Assigned:', page.value); // Log the updated page value
    } else {
      console.warn('Layout is missing or not an array in the response:', res.data);
    }
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
}

onMounted(() => {

  const interval = 5000; // 5 seconds for smoother transitions
  let index = 0;

  // Array of background image URLs
  const images = [
    '/carousel/Bier_Fluss_2.jpeg',
    '/carousel/Donau.jpeg',
    '/carousel/Singen_Abend.png',
    '/carousel/Ausflug_Natur.jpg',
    '/carousel/Brücke.jpg',
    '/carousel/Donau.jpeg',
    '/carousel/Schnee_Wanderung.jpg',
    '/carousel/Zapfen.jpg',
  ];

  const heroSection = document.getElementById('hero-section') as HTMLElement;

  // Preload images
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const cycleBackground = () => {
    if (!heroSection) return;
    heroSection.style.backgroundImage = `url(${images[index]})`;
    heroSection.style.opacity = '0'; // Start fade out
    setTimeout(() => {
      heroSection.style.opacity = '1'; // Fade in
    }, 100); // Short delay to trigger the fade effect
    index = (index + 1) % images.length; // Loop through the images
  };

  setInterval(cycleBackground, interval); // Change background every 5 seconds
  cycleBackground(); // Initialize with the first background
  getPageData();
});
</script>

<style scoped>
.image-container {
  height: 14rem;
  overflow: hidden;
}

.hero {
  transition: background-image 1s ease-in-out, opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  opacity: 1;
}
</style>
