<template>
  <div class="header">
    <button @click="onSignOut" class="signout-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 inline-block mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      sign out
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onSignOut() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.signout-button {
  @apply font-bold text-blue-900 hover:bg-blue-50 hover:shadow-md py-2 px-4 rounded-md float-right transition ease-in-out duration-150;
}
</style>