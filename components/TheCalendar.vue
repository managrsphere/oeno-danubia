<template>
  <div class="flex flex-row justify-evenly my-4">
    <div class="btn">Download als PDF</div>
    <div class="btn">Kalenderdatei</div>
  </div>
  <div class="w-full max-w-4xl">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Unsere nächsten Programmpunkte</h2>
      <select v-model="selectedFilter" @change="filterEvents" class="p-3 bg-primary text-primary-content rounded-lg">
        <option value="week">Woche</option>
        <option value="month">Monat</option>
        <option value="year">Jahr</option>
      </select>
    </div>

    <!-- Display events grouped by week or month -->
    <div v-if="filteredEvents.length" class="space-y-6 bg-base-100 p-6 rounded-md">
      <div v-for="(group, index) in groupedEvents" :key="index">
        <h3 class="text-lg font-bold mb-4">{{ group.title }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div v-for="event in group.events" :key="event.id" class="bg-base-200 text-base-content p-6 rounded-lg shadow-xl">
            <h4 class="text-md font-semibold">{{ event.title }}</h4>
            <p class="text-sm">{{ event.date }}</p>
            <p class="text-sm">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center text-base-content">
      Keine Veranstaltungen im gewählten Filter.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Define the Event type
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

// Function to parse date from dd-mm-yyyy format
const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const selectedFilter = ref('year');

const events = ref<Event[]>([
  { id: 1, title: 'Abend 1', date: '26-08-2024', description: 'Beschreibung für Abend 1' },
  { id: 2, title: 'Abend 2', date: '31-08-2024', description: 'Beschreibung für Abend 2' },
  { id: 3, title: 'Abend 3', date: '15-09-2024', description: 'Beschreibung für Abend 3' },
  { id: 4, title: 'Abend 4', date: '22-09-2024', description: 'Beschreibung für Abend 4' },
  { id: 5, title: 'Abend 5', date: '29-09-2024', description: 'Beschreibung für Abend 5' },

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

// Group events based on selected filter
const groupedEvents = computed(() => {
  if (selectedFilter.value === 'month') {
    // Group by weeks in the month
    const groups: Record<string, Event[]> = {};
    filteredEvents.value.forEach(event => {
      const eventDate = parseDate(event.date);
      const weekStart = new Date(eventDate);
      weekStart.setDate(eventDate.getDate() - eventDate.getDay());
      
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      const weekTitle = `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
      
      if (!groups[weekTitle]) {
        groups[weekTitle] = [];
      }
      groups[weekTitle].push(event);
    });
    return Object.keys(groups).map(title => ({ title, events: groups[title] }));
  } else if (selectedFilter.value === 'year') {
    // Group by months in the year
    const groups: Record<string, Event[]> = {};
    filteredEvents.value.forEach(event => {
      const eventDate = parseDate(event.date);
      const monthTitle = eventDate.toLocaleString('default', { month: 'long' });
      if (!groups[monthTitle]) {
        groups[monthTitle] = [];
      }
      groups[monthTitle].push(event);
    });
    return Object.keys(groups).map(title => ({ title, events: groups[title] }));
  } else {
    return [{ title: '', events: filteredEvents.value }];
  }
});

filterEvents();
</script>

<style scoped>
</style>
