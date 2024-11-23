# Grønn Webteknologi - WebRTC chat applikasjon

Dette prosjektet er en enkel WebRTC-basert chat-applikasjon som inkluderer funksjoner for sanntidskommunikasjon mellom to klienter. WebRTC brukes til direkte datakanaler mellom klientene, mens Socket.IO fungerer som en signaliseringsserver.


## Forutsetninger

- [Node.js](https://nodejs.org) (versjon 14 eller nyere)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Kom i gang

Følg disse trinnene for å laste ned, installere avhengigheter og kjøre applikasjonen.

### 1. Klon repositoriet

```bash
git clone https://github.com/amikalsen/webrtc.git
cd webrtc
```

### 2. Installer avhengigheter

Installer nødvendige Node.js-pakker med `npm`:

```bash
npm install
```

### 3. Start applikasjonen

Du kan starte applikasjonen ved å kjøre:

- **`npm start`**: Kjører det automatiserte skriptet testApp.mjs for server og nettlesere.
- **`node server.js`**: Starter serveren manuelt uten automatisering.
- **`node testApp.mjs`**: Kjører det automatiserte skriptet for server og nettlesere direkte.


### 4. Åpne applikasjonen

Når applikasjonen kjører, åpne [http://localhost:3000](http://localhost:3000) i nettleseren for å begynne å bruke chatte-grensesnittet.

---

## Applikasjonsstruktur

- **`server.js`**: Backend-logikk for signalisering ved hjelp av Socket.IO.
- **`testApp.mjs`**: Automatiserer prosessen med å starte serveren og åpne nettleservinduer.
- **`index.html`**: Frontend for applikasjonen.
- **`package.json`**: Definerer avhengigheter og skript for prosjektet.

---

## Testing

Applikasjonen inkluderer automatiserte funksjoner for å:

- Starte serveren.
- Åpne flere nettleservinduer.
- Generere automatiserte meldinger for å teste WebRTC.

Applikasjonen lukker automatisk serveren og nettleservinduene etter 40 sekunder. Du kan justere denne tiden i `testApp.mjs`.

---