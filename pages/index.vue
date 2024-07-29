<template>
  <div class="flex flex-col">

    <!-- Section 1 -->
    <section class="min-h-screen flex flex-col md:flex-row items-center bg-base-300 p-8">
      <div class="flex flex-col items-start justify-center md:w-2/3 space-y-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold">Oeno Danubia im CV zu Passau</h1>
        <div class="w-3/4">
          <h2 class="text-xl md:text-2xl font-semibold">Bono consilia - opera bona</h2>
          <hr class="border-primary mt-2">
        </div>
        <p class="prose text-lg md:text-xl">Wir treffen uns jeden Mittwoch ab 21 Uhr auf unserem Verbindungshaus in der Schustergasse 14 in Passau.
          Wir laden alle, Damen und Herren, herzlich ein, ein paar schöne Stunden mit uns zu verbringen.</p>
        <div class="flex space-x-4">
          <nuxt-link to="/about.vue" class="btn btn-primary">Mehr erfahren</nuxt-link>
          <nuxt-link to="/contact.vue" class="btn btn-secondary">Mitglied werden</nuxt-link>
        </div>
      </div>
      <div class="md:w-1/3 relative">
        <img src="public/Singen_Abend.png" alt="Gemeinsames Singen bei Kerzenlicht" class="w-full h-full object-cover rounded-lg opacity-70">
      </div>
    </section>

    <!-- Section 2 -->
    <section class="flex flex-col md:flex-row bg-neutral text-neutral-content p-8">
      <div class="md:w-2/3 flex flex-col space-y-4">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">Our Mission</h3>
            <p>To create value for our customers by delivering high-quality solutions.</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">Our Vision</h3>
            <p>To be the leading provider of innovative solutions in the industry.</p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 bg-accent text-accent-content p-8 flex flex-col items-center justify-center text-center rounded-lg">
        <div class="badge badge-primary badge-lg">Benefits</div>
        <h2 class="text-4xl font-bold">Join Us</h2>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="flex flex-col md:flex-row bg-accent text-accent-content p-8">
      <div class="md:w-2/3 p-8 flex flex-col space-y-4">
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What services do you offer?
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>We offer a wide range of services including web development, mobile app development, and more.</p>
          </div>
        </div>
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            How can I contact you?
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>You can contact us via our contact form or by emailing us at contact@ourcompany.com.</p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 bg-neutral text-neutral-content flex flex-col items-center justify-center text-center rounded-lg">
        <div class="badge badge-secondary badge-lg">FAQ</div>
        <h2 class="text-4xl font-bold">Antworten auf deine Fragen</h2>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>