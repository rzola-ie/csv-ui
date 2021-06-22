<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="card form">
      <h1 class="title mb-12">WELCOME</h1>

      <div class="form-group">
        <label for="email" class="sr-only">Email</label>
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <input
          name="email"
          type="email"
          class="input"
          placeholder="EMAIL"
          v-model="email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <input
          name="password"
          type="password"
          class="input"
          placeholder="PASSWORD"
          v-model="password"
          required
        />
      </div>

      <div v-show="!!errorMessage" class="error">
        {{ errorMessage }}
      </div>

      <Button
        v-if="errorMessage === ''"
        type="submit"
        class="btn mt-8"
        :loading="loading"
      >
        LOG IN</Button
      >
      <div v-if="errorMessage !== ''" @click="routeToLogin">
        <Button type="submit" class="btn mt-8" :loading="loading"
          >Back to Log In
        </Button>
      </div>
    </form>
  </div>
</template>

<script scoped>
import general from "@/mixins/general";

export default {
  auth: false,
  mixins: [general],
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      this.errorMessage = "";

      try {
        const { data } = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });
        // const { data } = await this.$axios.post("/login", {
        //   email: this.email,
        //   password: this.password
        // });
        // console.log("loggedin user data", data);
        localStorage.clear();
        this.$auth.setUserToken(data.idToken);
        delete data.idToken;
        this.$auth.setUser(data);
        this.$auth.$storage.setLocalStorage("user", data, true);
        // this.$auth.$storage.setUniversal("user", data);

        if (this.canDownloadClinPartCSV()) {
          this.$router.push({ name: "dashboard" });
        } else {
          this.errorMessage = "You do not have permission to access this app";
          this.loading = false;
          this.$auth.logout();
          localStorage.clear();
        }
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.$auth.logout();
        if (error.response) {
          switch (error.response.status) {
            case 401:
            case 404:
              this.errorMessage = "You do not have the right login credentials";
              break;
            default:
              this.errorMessage = error.message;
          }
        }
      } finally {
        // this.loading = false;
      }
    },
    routeToLogin() {
      this.loading = false;
      this.errorMessage = "";
      this.email = "";
      this.password = "";
      this.$auth.logout();
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.form {
  @apply w-11/12 md:w-1/3;
}

.form-group {
  @apply relative text-blue-900 rounded-md mb-6 overflow-hidden;
}

.form-group .icon-container {
  @apply absolute inset-y-0 bg-gray-200 w-12 flex justify-center items-center overflow-hidden rounded-l-md shadow-sm;
}

.form-group label {
  @apply sr-only;
}

.form-group .input {
  @apply text-gray-800 h-12 w-full rounded-md border shadow-inner pl-14 focus:outline-none focus:ring focus:border-blue-200;
}
</style>
