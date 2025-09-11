# Toastify-UI

Une petite lib  autour de [react-toastify](https://fkhadra.github.io/react-toastify/introduction) pour simplifier l'utilisation des notifications toast dans vos projets **React**.  
Il fournit un `ToastContainerUi` préconfiguré et des helpers (`showToastSuccess`, `showToastWarning`, `showToastError`) pour afficher vos notifications en une seule ligne.

---

## Features
- Simple d'utilisation (API minimaliste)
- Thème sombre préconfiguré (modifiable facilement)
- Supporte les messages multilignes (`\n`)
- Facilement réutilisable dans vos projets ou publiable sur npm
- Config centralisée (pas besoin de répéter `position`, `autoClose`, etc.)

---

## Installation

Installez la lib et ses dépendances si nécessaire :

```bash
npm install toastify-ui react-toastify
# ou
yarn add toastify-ui react-toastify
```

# Exemple d’utilisation
Ajoutez le container une seule fois dans votre app (par exemple dans App.jsx ou _app.jsx pour Next.js) :

```javascript
import React from "react";
import { ToastContainerUi, showToastSuccess, showToastError } from "toastify-ui";

function App() {
  return (
    <div>
      <ToastContainerUi />

      <button onClick={() => showToastSuccess("✅ Succès !")}>
        Show Success
      </button>

      <button onClick={() => showToastError("❌ Erreur\nVeuillez réessayer")}>
        Show Error
      </button>
    </div>
  );
}

export default App;
```

# API rapide

Composant

- ToastContainerUi : composant à placer une seule fois dans l’app, contient la configuration globale des toasts.

Helpers

- showToastSuccess(message: string) : affiche un toast de succès

- showToastWarning(message: string) : affiche un toast d’avertissement

- showToastError(message: string) : affiche un toast d’erreur
