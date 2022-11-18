// Llamada a una API
// Proceso muy tardado

// async/await
// El scope principal NO PUEDE SER ASYNC

const promesa1 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

async function proceso() {
  console.log('Linea 1');
  await promesa1()
  console.log('Linea 2');
  console.log('Linea 3');
}
proceso()

// console.log('Linea 1');
// promesa1()
//   .then(() => { console.log('Linea 2') })
// console.log('Linea 3');

