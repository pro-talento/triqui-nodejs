// Llamada a una API
// Proceso muy tardado
console.log('Esto es inmediato');
function prepararCena() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Cena lista ✅');
      resolve();
    }, 5000)
  })
}
function irPorElPan() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Llegué con el pan.');
      resolve();
    }, 5000);
  })
}
// Sync => Blocking | Async => Non-Blocking
async function cenar() {
  console.log('Antes de ir por el 🍞');
  // irPorElPan()
  //   .then(() => {
  //     console.log('Después de ir por el 🍞');
  //     prepararCena()
  //       .then(() => {
  //         console.log('Después de prepara la cena');
  //       })
  //   })
  irPorElPan().then(() => null) // Non-blocking
  console.log('Después de ir por el 🍞');
  await prepararCena() // Blocking
  console.log('Después de prepara la cena');
  await cenar();
}
cenar();
  




// async/await
// El scope principal NO PUEDE SER ASYNC

// const promesa1 = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 3000)
//   })
// }

// async function proceso() {
//   console.log('Linea 1');
//   await promesa1()
//   console.log('Linea 2');
//   console.log('Linea 3');
// }
// proceso()

// console.log('Linea 1');
// promesa1()
//   .then(() => { console.log('Linea 2') })
// console.log('Linea 3');

