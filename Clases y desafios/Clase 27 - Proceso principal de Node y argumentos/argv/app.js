console.log(process.argv)
//[1,2,3,4] ->slice 2 -> [3,4]
const argumentos = process.argv.slice(2);
console.log(argumentos)

const suma = argumentos.reduce((acc, value)=>acc+parseInt(value),0);
console.log(suma)