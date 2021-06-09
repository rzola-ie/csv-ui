<template>
  <main>
    <Nuxt />
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </main>
</template>

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
  @apply bg-gradient-to-br from-blue-100 via-blue-300 to-blue-900;
  /* background: #def0fb; */
  flex: 1;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.wave {
  --speed: 200;
  --height: 12;
  --width: 800;
  --opacity: 0.2;

  width: calc(var(--width, 0) * 1vw);
  height: calc(var(--height, 0) * 1vh);
  opacity: var(--opacity);
  -webkit-animation: wave calc(var(--speed, 0) * 1s) infinite linear;
  animation: wave calc(var(--speed, 0) * 1s) infinite linear;
  background-image: url("/wave.svg");
  background-size: 50% 100%;
  position: absolute;
  bottom: -5%;
  left: 0;
  right: 0;
  z-index: 1;

  will-change: transform;
}
@media (max-width: 480px) {
  .wave {
    height: calc(var(--height, 0) * 0.75vh);
  }
}

.wave:nth-of-type(2) {
  --speed: 100;
  --height: 10;
  --width: 1200;
  --opacity: 0.4;
  z-index: 2;
}

.wave:nth-of-type(3) {
  --speed: 50;
  --height: 8;
  --width: 1200;
  --opacity: 0.5;
  z-index: 3;
}

@-webkit-keyframes wave {
  to {
    transform: translate(-25%, 0);
  }
}

@keyframes wave {
  to {
    transform: translate(-25%, 0);
  }
}
</style>

