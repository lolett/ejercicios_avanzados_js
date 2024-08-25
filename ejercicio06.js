/* Ejercicio 6
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// otro array para comprobar funcionalidad
const konohaNinjas = ['Naruto', 'Sasuke', 'Danzou', 'Sakura', 'Jiraya']

function swap(array, index1, index2) {
  const newArray = array
  const temp = newArray[index1]
  newArray[index1] = newArray[index2]
  newArray[index2] = temp

  return newArray
}

console.log(swap(fantasticFour, 0, 2))
console.log(swap(konohaNinjas, 1, 4))
