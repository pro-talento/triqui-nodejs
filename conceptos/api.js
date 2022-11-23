const fetch = require('node-fetch');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // -> Promesa
  .then((res) => res.json()) // -> Promesa
  .then((body) => console.log(`El Bitcoin cuesta ${body.bpi.USD.rate} dólares.`))
  .catch((error) => console.error(error))