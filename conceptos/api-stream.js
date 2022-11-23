const fetch = require('node-fetch');

async function fetchBitcoinPrice() { 
  try { 
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // -> Promesa
    const body = await res.json()
    console.log(`El Bitcoin cuesta ${body.bpi.USD.rate} dólares.`)
    console.log(`El Bitcoin cuesta ${body.bpi.GBP.rate} libras.`)
    console.log(`El Bitcoin cuesta ${body.bpi.EUR.rate} euros.`)
  } catch(err) {
    console.error(err)
  }
}

function wait(time) {
  return new Promise((resolve, reject) => { 
    console.log('---------->> cargando... <<----------');
    setTimeout(() => {
      console.log('---------->> listo <<----------');
      resolve();
    }, time)
  })
}

async function loop() { 
  while(true) {
    await wait(10000);
    await fetchBitcoinPrice();
  }
}

loop();