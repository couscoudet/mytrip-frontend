# MyTrip Frontend

Bienvenue dans le frontend de **MyTrip**, une application en cours de construction qui permet de concevoir des voyages sur mesure. Ce projet est construit avec [Vite](https://vitejs.dev/) et [React](https://reactjs.org/), offrant une expérience de développement rapide et moderne. ✨🌟🚀

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine : 🔧📦💡

- **Node.js** (version 16 ou plus récente) : [Télécharger ici](https://nodejs.org/)
- **npm** ou **yarn** : Inclus avec Node.js.

## Installation

1. Clonez ce dépôt : 🖥️📂🔗

   ```bash
   git clone https://github.com/votre-utilisateur/mytrip-frontend.git
   cd mytrip-frontend
   ```

2. Installez les dépendances : 💻⚙️📦

   ```bash
   npm install
   # ou
   yarn install
   ```

## Configuration

### TypeScript

Le projet utilise TypeScript pour des types sûrs et une meilleure maintenabilité. Si vous n'êtes pas familier avec TypeScript, vous pouvez consulter la [documentation officielle](https://www.typescriptlang.org/). 📘🛠️✔️

### Fichier d'environnement

Créez un fichier `.env` à la racine du projet pour définir les variables d'environnement nécessaires. Voici un exemple : ✏️🔒🌐

```env
VITE_GOOGLE_API_KEY=votre_cle_api_google
VITE_API_URL=https://votre-backend-url.com/api
```

- **VITE_GOOGLE_API_KEY** : Clé API pour l'intégration avec Google Maps.
- **VITE_API_URL** : URL de l'API backend pour les appels réseau.

## Scripts disponibles

Voici les commandes disponibles pour gérer le projet : 🖱️⚡📜

- **Démarrer le serveur de développement** :

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

- **Construire pour la production** :

  ```bash
  npm run build
  # ou
  yarn build
  ```

- **Prévisualiser une build de production** :

  ```bash
  npm run preview
  # ou
  yarn preview
  ```

## Fonctionnalités

- **Intégration de Google Maps** : Utilisez votre clé API pour afficher des cartes interactives dans l'application. 🗺️📍✨
- **Connexion au backend** : Interagissez avec l'API backend pour gérer les données des voyages. 🔗📡📊

## Structure du projet

```plaintext
mytrip-frontend/
├── public/           # Fichiers statiques
├── src/              # Code source principal
│   ├── components/   # Composants React
│   ├── pages/        # Pages principales
│   ├── hooks/        # Hooks personnalisés
│   └── services/     # Fonctions de services
├── .env              # Variables d'environnement (à ajouter)
├── package.json      # Gestionnaire de dépendances
└── vite.config.ts    # Configuration Vite
```


---

Bonne aventure dans la construction de vos voyages sur mesure ! 🌍✈️🗺️
