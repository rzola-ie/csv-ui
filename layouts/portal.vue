<template>
  <main>
    <Nuxt />
  </main>
</template>

<script>
export default {
  name: "portal"
};
</script>

<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

main {
  /* @apply bg-blue-300; */
  background: #def0fb;
  flex: 1;
  width: 100vw;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}
</style>
