# DaisyUI v5 Customization Guide for Astro 5 + Tailwind CSS v4

This guide documents the exact steps to properly implement and customize DaisyUI themes in an Astro 5 project with Tailwind CSS v4.

## Step 1: Create the DaisyUI Custom Theme Configuration

First, ensure your CSS structure is correctly organized. Create or update your main CSS file (e.g., `src/styles/app.css`):

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

@plugin "daisyui/theme";
```

## Step 2: Define Custom Theme Properties

In the same CSS file, add your custom theme properties for light and dark modes:

```css
html[data-theme="light"] {
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(96.12% 0 0);
  --color-base-300: oklch(94.31% 0 0);
  --color-base-400: rgba(0, 0, 0, 0.25);
  --color-base-content: oklch(27% 0.006 286.033);
  --color-primary: oklch(49.98% 0.1936 262.48);
  --color-primary-content: oklch(93.4% 0 0);
  --color-secondary: oklch(16.1% 0.1116 264.05);
  --color-secondary-content: oklch(93.4% 0 0);
  --color-accent: oklch(62.8% 0.2577 29.23);
  --color-accent-content: oklch(93.4% 0 0);
  --color-neutral: oklch(16.1% 0.1116 264.05);
  --color-neutral-content: oklch(93.4% 0 0);
  --color-info: oklch(90% 0.0482 271.24);
  --color-info-content: oklch(0% 0 0);
  --color-success: rgba(0, 0, 0, 0.15);
  --color-success-content: oklch(0% 0 0);
  --color-warning: oklch(92.18% 0.0767 82.03);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(82.27% 0.0993 19.41);
  --color-error-content: oklch(0% 0 0);
  --radius-selector: 0.5rem;
  --radius-field: 0.25rem;
  --radius-box: 0.25rem;
  --size-selector: 0.21875rem;
  --size-field: 0.2rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
  --fontsize: .9rem;
  --color-icon-subtle-gray: #6C6C6C;
  --color-neutral-bg-50: rgba(0, 0, 0, 0.07);
  --color-neutral-bg-100: rgba(0, 0, 0, 0.12);
  --color-error-text: #D20300;
  --color-neutral-border-01: rgba(0, 0, 0, 0.15);
  --color-error-border: #D20300;
}

html[data-theme="dark"] {
  --color-base-100: oklch(25.33% 0.016 252.42);
  --color-base-200: rgba(255, 255, 255, 0.07);
  --color-base-300: oklch(35.16% 0.0187 264.3);
  --color-base-400: rgba(255, 255, 255, 0.25);
  --color-base-content: oklch(93.4% 0 0);
  --color-primary: oklch(43.48% 0.1938 262.51);
  --color-primary-content: oklch(93.4% 0 0);
  --color-secondary: oklch(16.1% 0.1116 264.05);
  --color-secondary-content: oklch(93.4% 0 0);
  --color-accent: oklch(62.8% 0.2577 29.23);
  --color-accent-content: oklch(93.4% 0 0);
  --color-neutral: oklch(43.48% 0.1938 262.51);
  --color-neutral-content: oklch(93.4% 0 0);
  --color-info: oklch(71.8% 0.1425 266.09);
  --color-info-content: oklch(0% 0 0);
  --color-success: rgba(255, 255, 255, 0.15);
  --color-success-content: oklch(0% 0 0);
  --color-warning: oklch(87.29% 0.1173 78.76);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(73.14% 0.1652 21.99);
  --color-error-content: oklch(0% 0 0);
  --radius-selector: 0.5rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.2rem;
  --size-field: 0.1875rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
  --fontsize: .9rem;
  --color-icon-subtle-gray: #6C6C6C;
  --color-neutral-bg-50: rgba(255, 255, 255, 0.07);
  --color-neutral-bg-100: rgba(255, 255, 255, 0.12);
  --color-error-text: #FA6767;
  --color-neutral-border-01: rgba(255, 255, 255, 0.15);
  --color-error-border: #FA6767;
}
```

## Step 3: Add Font Settings

Add these font settings to the same CSS file:

```css
/* Set Source Sans 3 as the default font for the entire website */
:root {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
}

/* Font weight utility classes */
.font-source-sans {
  font-family: "Source Sans 3", system-ui, sans-serif;
}

.font-source-sans-thin {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 200;
}

.font-source-sans-light {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 300;
}

.font-source-sans-regular {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 400;
}

.font-source-sans-medium {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 500;
}

.font-source-sans-semibold {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 600;
}

.font-source-sans-bold {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 700;
}

.font-source-sans-extrabold {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 800;
}

.font-source-sans-black {
  font-family: "Source Sans 3", system-ui, sans-serif;
  font-weight: 900;
}
```

## Step 4: Create a GlobalStyles Component

Create a `GlobalStyles.astro` component with the `is:global` directive to ensure your custom component styles override DaisyUI defaults:

```astro
<!-- src/components/GlobalStyles.astro -->
<style is:global>
  /* BUTTONS */
  .btn {
      font-weight: 400;
      border-width: 0;
      gap: .1rem;

  }

  .btn-primary {
      box-shadow: none;
  }

  .btn-primary:hover {
      background-color: #1646AA;
  }

  .btn-outline {
      border-width: 1px;
      border-color: var(--color-base-400);
  }

  .btn-neutral {
      border-width: 1px;
      border-color: rgba(255, 255, 255, 0);
      background-color: var(--color-neutral-bg-50);
      color: var(--color-base-content);
  }
  .btn-neutral:hover {background-color: var(--color-neutral-bg-100);}

  .btn-dash {
      border-width: 1px;
  }

  .btn-circle {
      padding-top: 2px;
  }

  .btn-square {
      padding-top: 2px;
  }

  /* Button loading state */
  .loading {
      width: calc(var(--size-selector, .25rem)* 5);
      background-color: var(--color-icon-subtle-gray);
  }

  /* INPUTS */
  /* Direct inputs with the .input class get focus styling directly */
  input.input:focus {
    outline: none !important;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 15%, transparent);
  }

  /* Override focus styles for input elements inside labels with .input class */
  label.input > input:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }

  /* Apply the correct focus style to the parent label instead */
  label.input:has(input:focus) {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 15%, transparent);
  }

  /* Ensure inputs inside labels don't have their own borders/outlines */
  label.input > input {
    background: transparent;
    border: none;
    outline: none;
  }

  /* Input validator colors for borders and text */
  .validator {
      &:user-invalid, &:has(:user-invalid) {
          &~.validator-hint {
              color: var(--color-error-text);
              line-height: 1rem;
              margin-top: -10px;
          }
      }
  }

  .validator {
      &:user-valid, &:has(:user-valid) {
          &, &:focus, &:checked, &[aria-checked=true], &:focus-within {
              --input-color: var(--color-success);
          }
      }
  }

  .validator {
      &:user-invalid, &:has(:user-invalid) {
          &, &:focus, &:checked, &[aria-checked=true], &:focus-within {
              --input-color: var(--color-error-border);
          }
      }
  }

  html[data-theme] .validator:user-valid,
  html[data-theme] .validator:has(:user-valid),
  html[data-theme] .validator:user-valid:focus,
  html[data-theme] .validator:has(:user-valid):focus,
  html[data-theme] .validator:user-valid:checked,
  html[data-theme] .validator:has(:user-valid):checked,
  html[data-theme] .validator:user-valid[aria-checked=true],
  html[data-theme] .validator:has(:user-valid)[aria-checked=true],
  html[data-theme] .validator:user-valid:focus-within,
  html[data-theme] .validator:has(:user-valid):focus-within {
    --input-color: var(--su);
  }

  html[data-theme] .validator:user-invalid,
  html[data-theme] .validator:has(:user-invalid),
  html[data-theme] .validator:user-invalid:focus,
  html[data-theme] .validator:has(:user-invalid):focus,
  html[data-theme] .validator:user-invalid:checked,
  html[data-theme] .validator:has(:user-invalid):checked,
  html[data-theme] .validator:user-invalid[aria-checked=true],
  html[data-theme] .validator:has(:user-invalid)[aria-checked=true],
  html[data-theme] .validator:user-invalid:focus-within,
  html[data-theme] .validator:has(:user-invalid):focus-within {
    --input-color: var(--er);
  }

  /* LIST */
  .list {
      font-size: 1.05rem;
  }
</style>
```

## Step 5: Update the Layout Component

Modify your main layout component to:
1. Import the CSS file (`app.css`)
2. Include the `GlobalStyles` component
3. Set the default theme
4. Include the font CDN link

```astro
---
import '../styles/app.css';
import ThemeToggle from '../components/ThemeToggle.astro';
import GlobalStyles from '../components/GlobalStyles.astro';

// Default theme
const defaultTheme = 'light';
---

<!doctype html>
<html lang="en" data-theme={defaultTheme}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro 5 + Tailwind CSS v4 + DaisyUI v5 + Alpine.js</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <GlobalStyles />
    <slot />
  </body>
</html>
```

## Step 6: Configure Tailwind to Use DaisyUI Custom Theme

Update your `tailwind.config.js` to use the DaisyUI custom theme:

```javascript
/** @type {import('tailwindcss').Config} */
import daisyuiCustom from './src/styles/daisyui-custom.js';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    // Add custom components directly as a plugin
    function({ addComponents }) {
      addComponents({
        // Button customizations
        '.btn': {
          fontWeight: '400',
          borderWidth: '0',
          gap: '.1rem',
        },
        '.btn-primary': {
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#1646AA'
          }
        },
        '.btn-outline': {
          borderWidth: '1px',
          borderColor: 'var(--b3)'
        },
        '.btn-neutral': {
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0)',
          backgroundColor: 'var(--b2)',
          color: 'var(--bc)',
          '&:hover': {
            backgroundColor: 'var(--b3)'
          }
        },
        // ... other component customizations
      });
    }
  ],
  daisyui: daisyuiCustom,
};
```

## Step 7: Create a Theme Toggle Component

Create a `ThemeToggle.astro` component to allow users to switch between light and dark modes:

```astro
<script>
  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
  });
</script>

<div 
  x-data="{ 
    isDark: false,
    toggleTheme() {
      this.isDark = !this.isDark;
      const theme = this.isDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    },
    init() {
      // Initialize the toggle state based on the current theme
      const currentTheme = document.documentElement.getAttribute('data-theme');
      this.isDark = currentTheme === 'dark';
    }
  }"
  x-init="init()"
  class="flex items-center gap-2"
>
  <span class="text-sm">Theme:</span>
  <label class="swap swap-rotate">
    <!-- sun icon -->
    <svg 
      x-show="isDark" 
      @click="toggleTheme()"
      class="swap-on fill-current w-6 h-6 cursor-pointer" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
    >
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>
    <!-- moon icon -->
    <svg 
      x-show="!isDark" 
      @click="toggleTheme()"
      class="swap-off fill-current w-6 h-6 cursor-pointer" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
    >
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    </svg>      
  </label>
</div>
```

## Common Issues and Solutions

### 1. CSS Imports Order
Always ensure your CSS imports are in the correct order. The `@import "tailwindcss"` must come first, followed by the DaisyUI plugin configuration.

### 2. CSS File Import Path
Make sure your Layout.astro is importing the correct CSS file. If you have multiple CSS files (like global.css and app.css), consolidate them to avoid conflicts.

### 3. Custom Properties Not Applying
If your custom properties aren't applying correctly, check that:
- The `data-theme` attribute is set on the HTML element
- Your CSS selectors have sufficient specificity (use `html[data-theme="light"]` instead of just `.light`)
- Your `GlobalStyles` component is included in the Layout

### 4. Error with Assets Path
If you see a 404 error for `/src/assets/app.css`, check all import paths in your project and ensure they correctly point to the files in your directory structure.

### 5. Running the Development Server
Always run the development server from the project directory:
```bash
cd my-astro-project
npm run dev
```

By following these steps, you'll have a properly configured DaisyUI theme with custom properties in your Astro 5 project using Tailwind CSS v4.
