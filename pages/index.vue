<template>
    <div>
      <!-- Hero Section -->
      <section class="min-h-screen flex flex-col items-center justify-center bg-base-100 p-8">
        <div class="text-center space-y-4">
          <h1 class="text-4xl font-bold text-primary">K.D.St.V. Oeno-Danubia im CV zu Passau</h1>
          <p class="text-lg text-gray-700">Bono consilio - opera bona!</p>
        </div>
        <div class="md:w-1/2 mt-8">
          <div class="carousel w-full">
            <div class="carousel-item">
              <img src="https://via.placeholder.com/600x400" alt="Image 1" class="rounded-lg shadow-lg" />
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/600x400" alt="Image 2" class="rounded-lg shadow-lg" />
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/600x400" alt="Image 3" class="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Benefits Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center text-primary mb-8">Benefits / What to Expect</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-xl">Networking Opportunities</h3>
                <p>Connect with professionals and peers in your field.</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-xl">Workshops & Events</h3>
                <p>Participate in exclusive workshops and events.</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-xl">Career Guidance</h3>
                <p>Receive guidance and support for your career development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center text-primary mb-8">FAQ</h2>
          <div class="max-w-2xl mx-auto">
            <div class="collapse collapse-arrow bg-base-100 shadow-lg mb-4">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                How can I join the association?
              </div>
              <div class="collapse-content">
                <p>Visit our membership page to sign up and get started.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-100 shadow-lg mb-4">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                What are the membership benefits?
              </div>
              <div class="collapse-content">
                <p>Members get access to exclusive events, resources, and networking opportunities.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-100 shadow-lg mb-4">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium">
                Who can I contact for more information?
              </div>
              <div class="collapse-content">
                <p>Reach out to our support team via the contact page for any inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  