<template>
  <div v-if="isAuthenticated" class="container">
    <Header />
    <download-files :file-list="fileList" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DownloadFiles from "@/components/DownloadFiles";

export default {
  layout: "portal",
  components: {
    DownloadFiles
  },

  middleware: "auth",

  async asyncData({ app }) {
    const { $axios } = app;

    try {
      const { data } = await $axios.get(`/files/list`);
      // console.log("files list data", data);
      return {
        fileList: data
      };
    } catch (err) {
      console.error(err);
      return {
        fileList: []
      };
    }
  },
  data() {
    return {
      fileList: []
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  }
};
</script>

<style scoped>
.container {
  /* border: 2px solid red; */
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  text-align: center;
  /* margin: 0 auto; */
}

/* .card {
  @apply w-11/12 md:w-1/3;
} */
</style>
