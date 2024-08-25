/* Ejercicio 5
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

// uso dos math methods porque math.random devuelve un decimal entre 0 y 1
// posteriormente se multiplica por faces + 1 (para que el resultado sea entre 1 y faces
// y finalmente math.floor redondea a un integer

function rollDice(faces) {
  const result = Math.floor(Math.random() * faces + 1)
  return result
}

console.log(rollDice(8))
