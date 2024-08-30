<template>
    <div class="flex justify-center">
        <div class="flex flex-col p-8 max-w-4xl mx-auto">
            <div class="hero min-h-64 md:max-h-96 rounded-xl" id="hero-section">
                <div class="hero-overlay bg-opacity-70 rounded-xl"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-base-100 font-bold text-3xl">{{ page.layout[0]?.content }}</h1>
                    </div>
                </div>
            </div>
            <div class="divider divider-primary"></div>
            <div class="w-full">
            <TheCalendar />
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const page = ref({
  _id: '66d1986ea241519bf04e3205',
  clientId: 2,
  pageId: 4,
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
    const image = '/Bier3.jpeg';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;

    getPageData();
});
</script>

<style scoped></style>