export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "csv-ui",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/axios"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
    // "@nuxtjs/proxy"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://localhost:3004/api",
    // baseURL: process.env.CSV_API_URL,
    credentials: false
    // proxy: true
  },
  // proxy: {
  //   "/api/login": {
  //     target: "process.env.CSV_API_ORIGINAL_URL",
  //     // pathRewrite: {
  //     //   "^/api/": ""
  //     // },
  //     changeOrigin: true
  //   }
  // },

  auth: {
    cookies: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: "/login", method: "post", propertyName: false },
          logout: false,
          user: false
        },
        tokenRequired: true,
        globalToken: true,
        tokenType: "Bearer",
        autoFetchUser: false
      }
    },
    redirect: {
      login: "/",
      logout: "/",
      home: "/dashboard"
    },
    localStorage: {
      prefix: ""
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Server Configuration: 🤷🏻‍♂️
  server: {
    port: 3003
  }
};
