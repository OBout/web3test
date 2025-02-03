# Generating a Project ID
- To integrate blockchain providers securely, I generated a project ID from Cloud Reown. This project ID is needed for authentication and tracking API usage when using providers like WalletConnect or Infura in Wagmi.

# Installing Required Packages
- I installed the necessary dependencies for blockchain interaction and state management:
- wagmi: Provides hooks and utilities for interacting with Ethereum and other blockchain networks.
- @tanstack/react-query: Enhances state management and caching for blockchain-related data.
- @rainbow-me/rainbowkit: Offers a customizable and user-friendly wallet connection experience.

# Configuring Wagmi
- I created a Wagmi configuration file to:
- Inject supported blockchain networks.
- Define the project ID and project name.
- Specify allowed chains for interaction.

# UI Enhancements
- I've imported the theme file and theme CSS in main.tsx to enhance the application's UI.

# Wrapping Providers in main.tsx
- To ensure global access to blockchain-related functionalities, I wrapped essential providers in main.tsx:
- WagmiProvider: Provides blockchain connectivity.
- QueryClientProvider: Manages state and caching with React Query.
- RainbowKitProvider: Handles wallet connections.

# Run it locally
- Open the projectfolder
- Run ```yarn``` in the terminal
- Run ```yarn dev``` to see the results


##############################################################


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked` 
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
