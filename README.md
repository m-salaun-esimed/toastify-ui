# Toastify-UI

A lightweight library built around react-toastify to simplify the use of toast notifications in your React projects.
It provides a pre-configured ToastContainerUi component and helper functions (showToastSuccess, showToastWarning, showToastError) to display notifications with a single line of code.

## Features

- Easy to use (minimalist API)
- Pre-configured dark theme (easily customizable)
- Supports multiline messages (\n)
- Easily reusable in your projects or publishable to npm
- Centralized configuration (no need to repeat position, autoClose, etc.)

## Installation

Install the library and its dependencies if needed:

```bash
npm install toastify-ui react-toastify
# ou
yarn add toastify-ui react-toastify
```

# Usage Example

Add the container once in your app (e.g., in App.jsx or _app.jsx for Next.js):

```javascript
import { ToastContainerUi, toastHelpers } from "toastify-ui";
import { showToastError } from 'toastify-ui/dist/toastHelpers';

function App() {

  const test = () => {
    return () => {
      showToastError("This is a success message!");
    }
  }

  return (
    <>
        <ToastContainerUi/>
        <button onClick={test()}>test</button>
    </>
  )
}

export default App

```
# Quick API Reference

Component

- ToastContainerUi: A component to be placed once in your app, containing the global configuration for toasts.

Helpers
- showToastSuccess(message: string): Displays a success toast.
- showToastWarning(message: string): Displays a warning toast.
- showToastError(message: string): Displays an error toast.




# FRENCH VERSION 

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
import { ToastContainerUi, toastHelpers } from "toastify-ui";
import { showToastError } from 'toastify-ui/dist/toastHelpers';

function App() {

  const test = () => {
    return () => {
      showToastError("This is a success message!");
    }
  }

  return (
    <>
        <ToastContainerUi/>
        <button onClick={test()}>test</button>
    </>
  )
}

export default App

```

# API rapide

Composant

- ToastContainerUi : composant à placer une seule fois dans l’app, contient la configuration globale des toasts.

Helpers

- showToastSuccess(message: string) : affiche un toast de succès

- showToastWarning(message: string) : affiche un toast d’avertissement

- showToastError(message: string) : affiche un toast d’erreur
