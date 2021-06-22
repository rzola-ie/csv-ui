export default ({ $axios, env }) => {
  $axios.onRequest(config => {
    config.headers.common["Access-Control-Allow-Origin"] = "*";
  });
};
