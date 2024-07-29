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
        <div class="card bg-base-100 text-base-content shadow-xl">
          <figure>
            <img src="" alt="">
          </figure>
          <div class="card-body">
            <h3 class="card-title">Unvergessliche Abende</h3>
            <p>Unsere Studentenverbindung bietet ein breites Spektrum an Abendaktivitäten, die von entspannten Spieleabenden über spannende Vorträge bis hin zu geselligen Feiern reichen. Hier findest du den perfekten Ausgleich zum Studienalltag und knüpfst gleichzeitig wertvolle Kontakte.</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl">
          <figure>
            <img src="" alt="">
          </figure>
          <div class="card-body">
            <h3 class="card-title">Gemeinschaft und Zusammenhalt</h3>
            <p>In unserer Verbindung steht die Gemeinschaft an erster Stelle. Wir pflegen ein freundschaftliches und unterstützendes Miteinander, bei dem jeder willkommen ist. Ob bei gemeinsamen Ausflügen, sportlichen Aktivitäten oder einfach nur beim gemütlichen Beisammensein – bei uns findest du Freunde fürs Leben und ein Netzwerk, das dich in jeder Situation unterstützt.</p>
          </div>
        </div>
        <div class="card bg-base-100 text-base-content shadow-xl">
          <figure>
            <img src="" alt="">
          </figure>
          <div class="card-body">
            <h3 class="card-title">Unterstützung im Studium</h3>
            <p>Unser Ziel ist es, dich nicht nur gesellschaftlich, sondern auch akademisch zu fördern. Bei uns profitierst du von einem starken Netzwerk aus erfahrenen Mitgliedern und Alumnis, die dir mit Rat und Tat zur Seite stehen. Ob bei der Prüfungsvorbereitung, der Suche nach Praktika oder dem Austausch von Lernmaterialien – wir unterstützen uns gegenseitig und sorgen gemeinsam für Erfolg im Studium.</p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 bg-accent text-accent-content p-8 flex flex-col items-center justify-center text-center rounded-lg lg:ml-4">
        <div class="badge badge-primary badge-lg">Benefits</div>
        <h2 class="text-4xl font-bold">Was dich erwartet</h2>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="flex flex-col md:flex-row bg-accent text-accent-content p-8">
      <div class="md:w-2/3 p-8 flex flex-col space-y-4">
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content text-xl font-semibold peer-checked:bg-secondary peer-checked:text-secondary-content">
            Was ist die Oeno-Danubia Passau?
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Die Oeno-Danubia Passau ist eine katholische, farbentragende und nichtschlagende Studentenverbindung an der Universität Passau. Gegründet im Jahr 1899, setzt sie auf die Prinzipien religio, amicitia, scientia und patria, die den Glauben, die Freundschaft, die Wissenschaft und die Vaterlandsliebe betonen.</p>
          </div>
        </div>
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content text-xl font-semibold peer-checked:bg-secondary peer-checked:text-secondary-content">
            Was bedeutet "nichtschlagend"?
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>"Nichtschlagend" bedeutet, dass die Mitglieder der Oeno-Danubia nicht an Mensuren (Fechtkämpfen) teilnehmen. Stattdessen legt die Verbindung Wert auf andere Formen des Engagements und der Gemeinschaftspflege</p>
          </div>
        </div>
        <div class="collapse">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content text-xl font-semibold peer-checked:bg-secondary peer-checked:text-secondary-content">
            Wer kann Mitglied werden? 
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Mitglied der Oeno-Danubia kann jeder katholische Student oder Absolvent der Universität Passau werden, der die Werte und Prinzipien der Verbindung teilt. Neue Mitglieder sind immer willkommen und werden durch ein strukturiertes Aufnahmeverfahren eingeführt​.</p>
          </div>
        </div>
      </div>
      <div class="md:w-1/3 bg-neutral text-neutral-content p-8 flex flex-col items-center justify-center text-center rounded-lg lg:ml-4">
        <div class="badge badge-secondary badge-lg">FAQ</div>
        <h2 class="text-4xl font-bold">Antworten auf deine Fragen</h2>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>