<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-base-300 text-base-content">
    <div class="container mx-auto flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-20 relative z-10">
      <div class="text-left lg:w-2/3 lg:order-1">
        <h1 class="text-4xl lg:text-6xl font-bold">Oeno-Danubia<br> im CV zu Passau</h1>
        <p class="text-xl font-semibold text-primary my-4">Bono consilio - opera bona!</p>
        <p class="text-lg my-4">
          Wir treffen uns jeden Mittwoch ab 21 Uhr auf unserem Verbindungshaus in der Schustergasse 14 in Passau.
          Wir laden alle, Damen und Herren, herzlich ein, ein paar schöne Stunden mit uns zu verbringen.
        </p>
        <nuxt-link to="/contact" class="btn btn-primary mt-4">Kontakt</nuxt-link>
      </div>
      <div class="lg:w-1/3 h-full relative lg:order-2">
        <img src="/img/Singen_Abend.jpg" alt="Singen Abend" class="w-1/2 h-full object-cover opacity-60" />
      </div>
    </div>
  </section>

    <!--
        
      <section class="py-16 bg-neutral">
        <div class="container mx-auto w-1/2">
          <h2 class="text-3xl font-bold text-center text-neutral-content mb-8">Benefits / What to Expect</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-accent shadow-lg">
              <div class="card-body text-accent-content">
                <h3 class="card-title text-xl">Networking Opportunities</h3>
                <p>Connect with professionals and peers in your field.</p>
              </div>
            </div>
            <div class="card bg-accent shadow-lg">
              <div class="card-body text-accent-content">
                <h3 class="card-title text-xl">Workshops & Events</h3>
                <p>Participate in exclusive workshops and events.</p>
              </div>
            </div>
            <div class="card bg-accent shadow-lg">
              <div class="card-body text-accent-content">
                <h3 class="card-title text-xl">Career Guidance</h3>
                <p>Receive guidance and support for your career development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
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
      -->
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Add any additional custom styles here */
</style>