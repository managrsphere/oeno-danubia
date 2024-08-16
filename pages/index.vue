<template>
  <div class="flex flex-col">
    <!-- Hero Section with Carousel Effect -->
    <div class="hero min-h-screen" id="hero-section">
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-3 text-5xl font-bold">Oeno Danubia im CV zu Passau</h1>
          <h2 class="text-xl font-semibold">Bono consilia - opera bona</h2>
          <div class="divider divider-primary my-2"></div>
          <p class="prose text-neutral-content text-lg">
            Wir treffen uns jeden Mittwoch ab 21 Uhr auf unserem Verbindungshaus in der
            Schustergasse 14 in Passau. Wir laden alle, Damen und Herren, herzlich ein, ein paar schöne Stunden mit uns zu verbringen.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <section class="flex flex-col-reverse md:flex-row bg-neutral text-neutral-content p-8">
      <div class="md:w-2/3 flex flex-col space-y-4">
        <div class="card bg-base-100 text-base-content shadow-xl max-w-xl mx-auto">
          <figure class="image-container">
            <img src="/public/Gruppe_Billiard.jpeg" alt="Gruppenbild" class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">Unvergessliche Abende</h3>
            <p>Unsere Studentenverbindung bietet ein breites Spektrum an Abendaktivitäten, die von entspannten
              Spieleabenden über spannende Vorträge bis hin zu geselligen Feiern reichen. Hier findest du den perfekten
              Ausgleich zum Studienalltag und knüpfst gleichzeitig wertvolle Kontakte.</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl max-w-xl mx-auto">
          <figure class="image-container">
            <img src="/public/Fluss_Anstoßen.jpeg" alt="Anstoßen an der Donau"
              class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">Gemeinschaft und Zusammenhalt</h3>
            <p>In unserer Verbindung steht die Gemeinschaft an erster Stelle. Wir pflegen ein freundschaftliches und
              unterstützendes Miteinander, bei dem jeder willkommen ist. Ob bei gemeinsamen Ausflügen, sportlichen
              Aktivitäten oder einfach nur beim gemütlichen Beisammensein – bei uns findest du Freunde fürs Leben und
              ein Netzwerk, das dich in jeder Situation unterstützt.</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl max-w-xl mx-auto">
          <figure class="image-container">
            <img src="/public/Wappen_Flagge.jpg" alt="Auszeichnung vor Wappen"
              class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">Unterstützung im Studium</h3>
            <p>Unser Ziel ist es, dich nicht nur gesellschaftlich, sondern auch akademisch zu fördern. Bei uns
              profitierst du von einem starken Netzwerk aus erfahrenen Mitgliedern und Alumnis, die dir mit Rat und Tat
              zur Seite stehen. Ob bei der Prüfungsvorbereitung, der Suche nach Praktika oder dem Austausch von
              Lernmaterialien – wir unterstützen uns gegenseitig und sorgen gemeinsam für Erfolg im Studium.</p>
          </div>
        </div>
      </div>
      <div
        class="md:w-1/3 bg-accent p-8 flex flex-col items-center justify-center text-center rounded-lg sm:mb-4 md:ml-4">
        <div class="badge badge-primary badge-lg">Benefits</div>
        <h2 class="text-accent-content text-4xl font-bold">Was dich erwartet</h2>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="flex flex-col-reverse md:flex-row bg-accent text-accent-content p-8">
      <div class="md:w-2/3 p-8 flex flex-col space-y-4">
        <details class="collapse">
          <summary class="collapse-title bg-primary text-primary-content text-xl font-semibold">Was ist die Oeno-Danubia
            Passau?</summary>
          <div class="collapse-content bg-primary text-primary-content">
            <p>Die Oeno-Danubia Passau ist eine katholische, farbentragende und nichtschlagende Studentenverbindung an
              der Universität Passau. Gegründet im Jahr 1899, setzt sie auf die Prinzipien religio, amicitia, scientia
              und patria, die den Glauben, die Freundschaft, die Wissenschaft und die Vaterlandsliebe betonen.</p>
          </div>
        </details>
        <details class="collapse">
          <summary class="collapse-title bg-primary text-primary-content text-xl font-semibold">Was bedeutet
            "nichtschlagend"?</summary>
          <div class="collapse-content bg-primary text-primary-content">
            <p>"Nichtschlagend" bedeutet, dass die Mitglieder der Oeno-Danubia nicht an Mensuren (Fechtkämpfen)
              teilnehmen. Stattdessen legt die Verbindung Wert auf andere Formen des Engagements und der
              Gemeinschaftspflege.</p>
          </div>
        </details>
        <details class="collapse">
          <summary class="collapse-title bg-primary text-primary-content text-xl font-semibold">Wer kann Mitglied
            werden?</summary>
          <div class="collapse-content bg-primary text-primary-content">
            <p>Mitglied der Oeno-Danubia kann jeder katholische Student oder Absolvent der Universität Passau werden,
              der die Werte und Prinzipien der Verbindung teilt. Neue Mitglieder sind immer willkommen und werden durch
              ein strukturiertes Aufnahmeverfahren eingeführt​.</p>
          </div>
        </details>
      </div>
      <div class="md:w-1/3 bg-neutral p-8 flex flex-col items-center justify-center text-center rounded-lg lg:ml-4">
        <div class="badge badge-secondary badge-lg">FAQ</div>
        <h2 class="text-neutral-content text-4xl font-bold">Antworten auf deine Fragen</h2>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const interval = 3000; // 3 seconds
  let index = 0;

  // Array of background image URLs
  const images = [
    '/carousel/Montur_Gruppe.png',
    '/carousel/Singen_Abend.png',
    '/carousel/Ausflug_Natur.jpg',
    '/carousel/Brücke.jpg',
    '/carousel/Duo_Abend.jpg',
    '/carousel/Schnee_Wanderung.jpg',
    '/carousel/Weltkarte.jpeg',
    '/carousel/Zapfen.jpg',
  ];

  const heroSection = document.getElementById('hero-section') as HTMLElement;

  const cycleBackground = () => {
    if (!heroSection) return;
    heroSection.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Loop through the images
  };

  setInterval(cycleBackground, interval); // Change background every 3 seconds
  cycleBackground(); // Initialize with the first background
});
</script>

<style scoped>
.image-container {
  height: 14rem;
  overflow: hidden;
}

.hero {
  transition: background-image 1s ease-out;
}
</style>
