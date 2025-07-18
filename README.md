# YeahHub Questions

**YeahHub Questions** — это современное веб-приложение для просмотра, фильтрации и изучения технических вопросов для собеседований и подготовки к IT-интервью.

## 🚀 Кратко о проекте

- **Frontend**: React + TypeScript + Redux Toolkit (RTK Query)
- **Архитектура**: Feature-Sliced Design (FSD)
- **Стилизация**: CSS Modules, адаптивная сетка, современный UI

## ⚙️ Основные возможности

- Просмотр и поиск вопросов для подготовки к собеседованиям
- Фильтрация по навыкам, специализациям, сложности, рейтингу и ключевым словам
- Детальная страница вопроса с кратким и развёрнутым ответом
- Удобная пагинация и быстрая навигация
- Реализован модульный подход и переиспользуемые компоненты

## 🧩 Технологии и структура

- **React + TypeScript** — основной стек разработки
- **Redux Toolkit (RTK Query)** — управление состоянием и запросы к API
- **Feature-Sliced Design (FSD)** — масштабируемая архитектура проекта
- **CSS Modules** — инкапсуляция стилей
- **React Router v6** — маршрутизация страниц

## 📦 Запуск проекта

```bash
git clone https://github.com/dimaparamonovv/yeahub-questions.git
cd yeahub-questions
npm install
npm run dev

----------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
