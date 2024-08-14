<template>
  <div class="w-full p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Unsere nächsten Programmpunkte</h2>
      <select v-model="selectedFilter" @change="filterEvents" class="p-2 bg-primary text-primary-content rounded-lg">
        <option value="week">Woche</option>
        <option value="month">Monat</option>
        <option value="year">Jahr</option>
      </select>
    </div>
    <div v-if="filteredEvents.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-accent p-6 rounded-md">
      <div v-for="event in filteredEvents" :key="event.id" class="bg-base-100 text-base-content p-4 rounded-lg shadow-xl">
        <h3 class="text-lg font-bold">{{ event.title }}</h3>
        <p class="text-sm">{{ event.date }}</p>
        <p class="text-sm">{{ event.description }}</p>
      </div>
    </div>
    <div v-else class="text-center text-base-content">
      Keine Veranstaltungen im gewählten Filter.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Function to parse date from dd-mm-yyyy format
const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const selectedFilter = ref('month');

// Good for retrieving data from db
const events = ref([
  { id: 1, title: 'Abend 1', date: '01-08-2024', description: 'Beschreibung für Abend 1' },
  { id: 2, title: 'Abend 2', date: '10-08-2024', description: 'Beschreibung für Abend 2' },
  { id: 3, title: 'Abend 3', date: '15-09-2024', description: 'Beschreibung für Abend 3' },
  { id: 3, title: 'Abend 4', date: '22-09-2024', description: 'Beschreibung für Abend 4' },
  { id: 3, title: 'Abend 5', date: '29-09-2024', description: 'Beschreibung für Abend 5' },

  // More events
]);

const filteredEvents = ref(events.value);

const filterEvents = () => {
  const now = new Date();
  filteredEvents.value = events.value.filter(event => {
    const eventDate = parseDate(event.date);
    if (selectedFilter.value === 'week') {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return eventDate >= startOfWeek && eventDate <= endOfWeek;
    } else if (selectedFilter.value === 'month') {
      return eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
    } else if (selectedFilter.value === 'year') {
      return eventDate.getFullYear() === now.getFullYear();
    }
    return false;
  });
};

filterEvents();
</script>

<style scoped>
</style>
