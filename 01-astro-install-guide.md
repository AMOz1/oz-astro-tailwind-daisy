

# Astro 5 + Tailwind CSS v4 + DaisyUI v5 + Alpine.js Installation Guide

This guide provides a step-by-step process to set up an Astro project with Tailwind CSS v4, DaisyUI v5, and Alpine.js.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

## 1. Initialize a New Astro Project

1. Create a new directory for your project and navigate into it:

   ```bash
   mkdir my-astro-project
   cd my-astro-project
   ```


2. Initialize a new Astro project:

   ```bash
   npm create astro@latest
   ```


   When prompted:

   - **Template**: Select "A basic, minimal starter"
   - **Install dependencies**: Yes
   - **Initialize git repository**: Yes (optional)

## 2. Install Tailwind CSS v4 and DaisyUI v5

1. Install Tailwind CSS v4 and DaisyUI v5:

   ```bash
   npm install -D tailwindcss@latest @tailwindcss/vite daisyui@latest
   ```


2. Create a CSS file for your styles (e.g., `src/styles/app.css`) and add the following:

   ```css
   @import "tailwindcss";
   @plugin "daisyui" {
     themes: light --default, dark --prefersdark;
   }
   ```


   This setup uses the `@plugin` directive to integrate DaisyUI and defines two themes: `light` as the default and `dark` for users who prefer dark mode.

## 3. Configure Astro to Use Tailwind CSS

1. Update your `astro.config.mjs` to include Tailwind CSS:

   ```javascript
   // astro.config.mjs
   import { defineConfig } from 'astro/config';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     vite: {
       plugins: [tailwindcss()],
     },
   });
   ```


   This configuration ensures that Tailwind CSS is processed correctly during the build.

## 4. Integrate Alpine.js

1. Install the Alpine.js integration for Astro:

   ```bash
   npx astro add alpinejs
   ```


   This command sets up Alpine.js in your Astro project, allowing you to use Alpine.js directives in your components.

## 5. Import Styles in Your Layout

1. In your main layout file (e.g., `src/layouts/Layout.astro`), import the CSS file:

   ```astro
   ---
   import "../styles/app.css";
   ---
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>My Astro Project</title>
     </head>
     <body>
       <slot />
     </body>
   </html>
   ```


   This setup ensures that Tailwind CSS and DaisyUI styles are applied throughout your project.

## 6. Add TypeScript Support for Alpine.js (Optional)

1. If you're using TypeScript, add the following to `src/env.d.ts` to provide type definitions for Alpine.js:

   ```typescript
   /// <reference types="astro/client" />

   interface Window {
     Alpine: import('alpinejs').Alpine;
   }
   ```


## 7. Run the Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```


   Your Astro project is now set up with Tailwind CSS v4, DaisyUI v5, and Alpine.js. You can begin building your components using these technologies.

---