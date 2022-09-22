import PromptSync = require ('prompt-sync');

const prompt = PromptSync();

const calc = (peso: number, altura: number) => {
   const imc = peso / (Math.pow(altura, 2))
return imc
}

const peso = prompt ('Digite seu peso: ')
const peso1 = Number (peso)

const altura = prompt ('Digite sua altura: ')
const altura1 = Number (altura)

console.log (calc(peso1, altura1))
