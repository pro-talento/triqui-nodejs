console.log('Archivo try-catch.js');

// Error generado explicitamente
// throw new Error('nuevo error :(')
let valor = 1;
try { 
  if (valor > 0) {
    throw new Error('El valor es mayor que 0');
    console.log('Esta linea nunca se ejecuta');
  }
  console.log('El programa no genera error ✅')
} catch (error) {
  try {
    if (error.message === 'El valor es mayor que 0') {
      if (valor === 1) {
        throw new Error('colapsa el programa')
        console.log('Esta otra linea nunca se ejecuta tampoco')
      } 
    }
  } catch (error) {
    console.log('Evito que si el valor es 1 colapse el programa 🔥')
  }
  console.log('El error se manejó correctamente ✅')
}
// console.log('Linea que no se debería ver (a menos que haya un try/catch');
console.log('El programa finaliza correctamente 🚀')