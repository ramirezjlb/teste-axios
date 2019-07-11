import "./styles.css";
const axios = require("axios");

document.getElementById("app").innerHTML = ``;

let config = {
  method: "get",
  headers: { "Access-Control-Allow-Origin": "*" },
  proxy: {
    host: "cache.bb.com.br",
    port: 80
  },
  url:
    "https://nfce-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico2.asmx"
};

axios(config)
  .then(function(response) {
    console.log(response.status);
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error.message);
    console.log(error.response.status);
  });
