<template>
  <div class="flex flex-col">
  
    <div class="hero min-h-screen" id="hero-section">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-base-100 text-center">
        <div class="max-w-lg" data-aos="fade-down">
          <h1 class="mb-3 text-5xl font-bold">Oeno Danubia im CV zu Passau</h1>
          <h2 class="text-xl font-semibold">Bono consilia - opera bona</h2>
          <div class="divider divider-primary my-2"></div>
          <p class="prose text-base-100 text-lg">
            Wir treffen uns jeden Mittwoch ab 21 Uhr auf unserem Verbindungshaus in der
            Schustergasse 14 in Passau. Wir laden alle, Damen und Herren, herzlich ein, ein paar schöne Stunden mit
            uns zu verbringen.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <section class="min-h-screen flex flex-col bg-base text-base-content p-8">
      <div class="flex flex-col items-center text-center rounded-lg bg-base-200 p-6 mb-8" data-aos="zoom-in">
        <div class="badge badge-primary badge-lg">Benefits</div>
        <h2 class="text-base-content text-4xl font-bold">Was dich erwartet</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
            <img src="/public/Gruppe_Billiard.jpeg" alt="Gruppenbild" class="w-full h-56 object-cover rounded-t-lg">
          </figure>
          <div class="card-body">
            <h3 class="text-xl font-semibold">Unvergessliche Abende</h3>
            <p>Unsere Studentenverbindung bietet ein breites Spektrum an Abendaktivitäten, die von entspannten
              Spieleabenden über spannende Vorträge bis hin zu geselligen Feiern reichen. Hier findest du den perfekten
              Ausgleich zum Studienalltag und knüpfst gleichzeitig wertvolle Kontakte.</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
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
        <div class="card bg-base-100 text-base-content shadow-xl max-w-lg mx-auto" data-aos="zoom-in">
          <figure>
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
    </section>

    <!-- Section 3 -->
    <section class="min-h-screen flex flex-col bg-base-200 text-base-content p-8">
  <div class="bg-base-100 flex flex-col items-center text-center rounded-lg p-8 mb-8" data-aos="zoom-in">
    <div class="badge badge-secondary badge-lg">FAQ</div>
    <h2 class="text-4xl font-bold">Antworten auf deine Fragen</h2>
  </div>

  <div class="flex flex-col items-center justify-center w-full max-w-4xl p-8 mx-auto">
    <!-- First Question and Answer -->
    <div class="flex items-center mb-8 prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
      <div class="font-semibold text-xl w-2/5 pr-4">Was ist die Oeno-Danubia Passau?</div>
      <div class="divider divider-horizontal divider-primary mx-4"></div>
      <div class="pl-4 w-3/5">
        <p>Die Oeno-Danubia Passau ist eine katholische, farbentragende und nichtschlagende Studentenverbindung an
          der Universität Passau. Gegründet im Jahr 1899, setzt sie auf die Prinzipien religio, amicitia, scientia
          und patria, die den Glauben, die Freundschaft, die Wissenschaft und die Vaterlandsliebe betonen.</p>
      </div>
    </div>

    <!-- Second Question and Answer -->
    <div class="flex items-center mb-8 prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
      <div class="font-semibold text-xl w-2/5 pr-4">Was bedeutet nicht-schlagend?</div>
      <div class="divider divider-horizontal divider-secondary mx-4"></div>
      <div class="pl-4 w-3/5">
        <p>Nicht-schlagend bedeutet, dass die Mitglieder der Oeno-Danubia nicht an Mensuren (Fechtkämpfen)
          teilnehmen. Stattdessen legt die Verbindung Wert auf andere Formen des Engagements und der
          Gemeinschaftspflege.</p>
      </div>
    </div>

    <!-- Third Question and Answer -->
    <div class="flex items-center prose xl:prose-lg w-full max-w-4xl" data-aos="zoom-in">
      <div class="font-semibold text-xl w-2/5 pr-4">Wer kann Mitglied werden?</div>
      <div class="divider divider-horizontal divider-primary mx-4"></div>
      <div class="pl-4 w-3/5">
        <p>Mitglied der Oeno-Danubia kann jeder katholische Student oder Absolvent der Universität Passau werden,
          der die Werte und Prinzipien der Verbindung teilt. Neue Mitglieder sind immer willkommen und werden
          durch ein strukturiertes Aufnahmeverfahren eingeführt.</p>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script setup lang="ts">
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
