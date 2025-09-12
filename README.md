# Vanilla TypeScript Boilerplate

This is a reusable boilerplate for building vanilla TypeScript projects with TailwindCSS, Prettier, Vite, and more. It is designed for fast prototyping and easy project setup.

## Features

- **TypeScript**: Type-safe development for scalable JavaScript projects.
- **Vite**: Lightning-fast development server and build tool.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Prettier**: Code formatter for consistent style.
- **Lucide**: Beautiful and consistent icon library.
- **ESLint**: Linting tool for code quality and consistency.
- **Anime.js**: Animation library for web interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **date-fns**: Modern JavaScript date utility library.
- **GSAP**: Robust JavaScript animation library.
- **markdown-it**: Markdown parser for JavaScript.
- **marked**: Fast markdown parser and compiler.
- **remark**: Markdown processor powered by plugins.
- **remark-html**: Plugin to compile Markdown to HTML.
- **uuid**: Simple, fast generation of RFC4122 UUIDs.
- **zod**: TypeScript-first schema validation with static type inference.
- **@tailwindcss/forms**: TailwindCSS plugin for better form styles.
- **@tailwindcss/typography**: TailwindCSS plugin for beautiful typographic defaults.
- **@tailwindcss/vite**: TailwindCSS integration for Vite.
- **@eslint/css, @eslint/js, @eslint/json, @eslint/markdown**: ESLint plugins for various file types.
- **@testing-library/dom, @testing-library/user-event**: DOM testing utilities.
- **cross-env**: Set environment variables across platforms.
- **globals**: List of global variables for ESLint.
- **husky**: Git hooks made easy.
- **lint-staged**: Run linters on git staged files.
- **postcss-nested**: PostCSS plugin to nest CSS rules.
- **rollup-plugin-visualizer**: Visualize size of Rollup bundle.
- **sass**: CSS preprocessor.
- **typescript-eslint**: TypeScript plugin for ESLint.
- **vitest**: Vite-native unit testing framework.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muhammad-fiaz/VanillaJS-Boilerplate.git
cd VanillaJS-Boilerplate
```

Or copy the structure and files from this repo into your own project folder.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
├── public/
├── src/
│   ├── main.ts
│   ├── style.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── bun.lock
```

## Customization
- Edit `src/main.ts` for your app logic.
- Edit `src/style.css` for custom styles.
- Configure TailwindCSS in `tailwind.config.js` (if present).
- Update Prettier settings in `.prettierrc` or `.prettierignore`.

## Linting
This project uses ESLint for code quality. To run linting:
```bash
npx eslint src/
```
Configure ESLint rules in `eslint.config.ts`.


## Useful Links
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Lucide Documentation](https://lucide.dev/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Anime.js Documentation](https://animejs.com/)
- [Axios Documentation](https://axios-http.com/)
- [date-fns Documentation](https://date-fns.org/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [markdown-it Documentation](https://markdown-it.github.io/)
- [marked Documentation](https://marked.js.org/)
- [remark Documentation](https://remark.js.org/)
- [uuid Documentation](https://github.com/uuidjs/uuid)
- [zod Documentation](https://zod.dev/)
- [Vitest Documentation](https://vitest.dev/)

## License

This project is licensed as MIT. See [LICENSE](LICENSE) file for full details.

