<template>
    <div class="flex justify-center min-h-screen">
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
            <div class="prose xl:prose-lg mb-3">
                <h2>{{ page.layout[1]?.content }}</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[3]?.content }}</h2>
                        <p>{{ page.layout[4]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[6]?.content }}</h2>
                        <p>{{ page.layout[7]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[9]?.content }}</h2>
                        <p>{{ page.layout[10]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[12]?.content }}</h2>
                        <p>{{ page.layout[13]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[15]?.content }}</h2>
                        <p>{{ page.layout[16]?.content }}</p>
                    </div>
                </div>
            </div>
            <div class="prose xl:prose-lg mt-6 mb-3">
                <h2>{{ page.layout[17]?.content }}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[19]?.content }}</h2>
                        <p>{{ page.layout[20]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[22]?.content }}</h2>
                        <p>{{ page.layout[23]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[25]?.content }}</h2>
                        <p>{{ page.layout[26]?.content }}</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ page.layout[28]?.content }}</h2>
                        <p>{{ page.layout[29]?.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const page = ref({
  _id: '66d18692a241519bf04e31c1',
  clientId: 2,
  pageId: 3,
  layout: [
    {
      type: '',
      name: '',
      content: ''
    }
  ]
}
);

async function getPageContent() {
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
    const image = '/carousel/Singen_Abend.png';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;

    getPageContent()
})
</script>

<style scoped></style>