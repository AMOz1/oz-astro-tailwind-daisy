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
        '.btn-dash': {
          borderWidth: '1px'
        },
        '.btn-circle': {
          paddingTop: '2px'
        },
        '.btn-square': {
          paddingTop: '2px'
        },
        // Button loading state
        '.loading': {
          width: 'calc(var(--size-selector, .25rem)* 5)',
          backgroundColor: 'var(--bc)'
        }
      });
    }
  ],
  daisyui: daisyuiCustom,
};