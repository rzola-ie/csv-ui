<template>
  <div class="container">
    <Header />
    <div class="card">
      <h1 class="title">hello</h1>
      <p>Click the button to download the thing, I guess...</p>
      <Button :loading="loading" @click.native="onDownloadCsv">Download</Button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "portal",
  data() {
    return {
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async onDownloadCsv() {
      this.loading = true;
      console.log("huh");

      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(alert("Yup, you certainly downloaded the thing!"));
          }, 5000);
        });
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  @apply w-11/12 md:w-1/3;
}
</style>