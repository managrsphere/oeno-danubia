<template>
    <div class="flex justify-center">
        <div class="flex flex-col p-8 max-w-4xl mx-auto">
            <div class="hero min-h-64 md:max-h-96 rounded-xl" id="hero-section">
                <div class="hero-overlay bg-opacity-70 rounded-xl"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-base-100 font-bold text-5xl">{{ page.layout[0]?.content }}</h1>
                    </div>
                </div>
            </div>
            <div class="divider divider-secondary"></div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="p-6 prose xl:prose-lg mx-auto bg-base-200 rounded-lg w-full">
                    <h2 class="text-2xl font-semibold" data-aos="zoom-in">{{ page.layout[1]?.content }}</h2>
                    <p><span class="font-semibold">{{ page.layout[2]?.content }}</span>{{ page.layout[3]?.content }}</p>
                    <p><span class="font-semibold">{{ page.layout[4]?.content }}</span>{{ page.layout[5]?.content }}</p>
                    <p><span class="font-semibold">{{ page.layout[6]?.content }}</span>{{ page.layout[7]?.content }}</p>
                </div>
                <div class="p-6 prose xl:prose-lg mx-auto bg-base-200 rounded-lg w-full">
                    <h2 class="text-2xl font-semibold" data-aos="zoom-in">Hier findest du uns</h2>
                    <iframe class="w-full" src="https://www.openstreetmap.org/export/embed.html?bbox=13.46778988838196%2C48.5729353554045%2C13.471330404281616%2C48.57451838695456&amp;layer=transportmap&amp;marker=48.57372687737515%2C13.469560146331787" style="border: 1px solid black"></iframe>
                    <br/>
                        <nuxt-link to="https://www.openstreetmap.org/?mlat=48.573727&amp;mlon=13.469560#map=19/48.573727/13.469560&amp;layers=T" class="btn btn-primary" target="_blank">
                            Größere Karte anzeigen
                        </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const page = ref({
  _id: '66d1acd6a241519bf04e3269',
  clientId: 2,
  pageId: 5,
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
    const image = '/carousel/Bier_Fluss_2.jpeg';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;

    getPageData();
})
</script>

<style scoped>
</style>