# Toastify-UI

Un petit wrapper autour de [react-toastify](https://fkhadra.github.io/react-toastify/introduction) pour simplifier l'utilisation des notifications toast dans vos projets **React**.  
Il fournit un `ToastContainerUi` préconfiguré et des helpers (`showToastSuccess`, `showToastWarning`, `showToastError`) pour afficher vos notifications en une seule ligne.

---

## Features
- Simple d'utilisation (API minimaliste).
- Thème sombre préconfiguré (modifiable facilement).
- Supporte les messages multilignes (`\n`).
- Facilement réutilisable dans vos projets ou publiable sur npm.
- Config centralisée (pas besoin de répéter `position`, `autoClose`, etc.).

---

## Installation

```bash
npm install react-toastify
# ou
yarn add react-toastify
```

Puis clonez ou importez toastify-ui dans votre projet. Ajouter les fichiers la ou vous le souhaitez.

# Exemple utilisation 

Ajoutez le container une seule fois dans votre app (par ex. dans App.jsx ou _app.jsx pour Next.js) :

```javascript
import React from "react";
import ToastContainerUi from './ui/ToastContainerUi.jsx'
import { showToastError, showToastSuccess } from './utils/Toast.jsx';

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

