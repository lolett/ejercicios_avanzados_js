/* Ejercicio 4
1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// otro ejemplo para comprobar funcionalidad
const subjects = [
  'Matemáticas',
  'Historia',
  'Ciencias',
  'Lengua',
  'Educación Física',
  'Arte',
  'Música'
]

//creo la variable error para llamarla en caso de que el elemento no exista
const error = 'El elemento no existe en la lista'

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (text === element) {
      return i
    }
  }
  // si no está en el array
  return error
}

console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Darth-Maul'))
console.log(findArrayIndex(subjects, 'Lengua'))
console.log(findArrayIndex(subjects, 'Física'))

/* 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function arraySplicer(array, text) {
  const arrayIndex = findArrayIndex(array, text)
  if (arrayIndex !== error) {
    array.splice(arrayIndex, 1)
    return array
  } else {
    return error
  }
}

console.log(arraySplicer(mainCharacters, 'Han Solo'))
console.log(arraySplicer(mainCharacters, 'Darth-Maul'))
console.log(arraySplicer(subjects, 'Lengua'))
console.log(arraySplicer(subjects, 'Física'))
