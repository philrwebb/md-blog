import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['..'],
        },
      },
    },
  },

  preprocess: [mdsvex(mdsvexConfig)],
}

export default config
