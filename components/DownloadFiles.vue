<template>
  <div id="content">
    <table>
      <thead>
        <tr>
          <th>
            Files To Download
          </th>
          <th>
            Date
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(f, index) in fileList" :key="index">
          <td id="file-name" @click="onDownloadCsv(f.key)">
            <!-- {{ displayFileName(f.key)[2] }} -->
            {{ displayFileName(f.key) }}
          </td>
          <td id="file-date">
            {{ new Date(displayFileDate(f.key)[1]).toDateString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import general from "@/mixins/general";
export default {
  mixins: [general],
  props: {
    fileList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async onDownloadCsv(fileName) {
      this.loading = true;

      let path = `/files/download?key=${fileName}`;
      const csvFileName = `${fileName.substring(12)}`;

      try {
        // await console.log("csvFileName", csvFileName);
        // console.log("path", path);

        const dataInit = await this.$axios.request({
          url: path,
          method: "GET",
          responseType: "blob"
        });
        const downloadUrlInit = window.URL.createObjectURL(
          new Blob([dataInit.data])
        );

        const linkInit = document.createElement("a");
        linkInit.href = downloadUrlInit;
        linkInit.setAttribute("download", `${csvFileName}`);
        document.body.appendChild(linkInit);
        linkInit.click();
        linkInit.remove();
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
#content {
  /* border: 2px solid blue; */
  /* display: flex; */
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
}

table {
  @apply bg-blue-200;

  width: 100%;
  margin: auto;
  border-collapse: collapse;
  padding: 0px 10px;
}

th {
  @apply bg-blue-800;
  color: white;
  font-size: 1.5rem;
  padding: 16px;
  padding-left: 50px;
  line-height: 0.6;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
  position: sticky;
  top: 0;
}

td {
  font-size: 1rem;
  padding: 10px;

  margin: 5px;
  white-space: nowrap;
  vertical-align: middle;
  text-align: left;
}

#file-name {
  cursor: pointer;
  padding-left: 50px;
}
#file-date {
}
</style>
