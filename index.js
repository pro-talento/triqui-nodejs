const chalk = require("chalk")
const fs = require('fs')
const Prompt = require('prompt-sync')
const prompt = Prompt({ sigint: true })

const name = prompt('Cuál es tu nombre ? ')

try {
  console.log('Intenta abrir archivo 📖')
  fs.openSync('puntos.txt')
  console.log('El archivo si existe ✅')
  fs.appendFileSync('puntos.txt', `\nNombre de usuario: ${name}`)
} catch(err) {
  console.log('Crea nuevo archivo !');
  fs.writeFileSync('puntos.txt', `Nombre del jugador: ${name}`)
}

console.log(chalk.green(`Hola ${name}, vamos a jugar un juego 🔥`))
console.log(chalk.blue('Tienes que adivinar un numero del 1 al 10 😈'))
console.log(chalk.blue('Si no... te mueres :)'))

const numeroParaEncontrar = Math.floor(Math.random() * 10) + 1
let numeroEncontrado = false

while (!numeroEncontrado) {
  let intento = prompt('Dame un número del 1 al 10: ')
  intento = Number(intento)

  if (intento === numeroParaEncontrar) {
    console.log(chalk.green(`Ganaste !!! Encontraste el número 🚀`))
    numeroEncontrado = true
  } else { 
    console.log(chalk.yellow('Incorrecto, intenta de nuevo! 😞'))
  }
}