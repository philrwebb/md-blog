export default defineConfig({
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['/Users/philipwebb/Development']
      }
    }
  })