/* Ejercicio 2
Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
Es decir, la media de volumen de todos los volumenes juntos. */

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

// otro array para comprobar funcionalidad
const users2 = [
  {
    name: 'Carlos',
    favoritesSounds: {
      ocean: { format: 'mp3', volume: 45 },
      birds: { format: 'ogg', volume: 60 },
      thunderstorm: { format: 'mp3', volume: 70 }
    }
  },
  {
    name: 'Maria',
    favoritesSounds: {
      forest: { format: 'mp3', volume: 50 },
      cityAmbience: { format: 'ogg', volume: 55 },
      river: { format: 'mp3', volume: 65 }
    }
  },
  {
    name: 'Lucia',
    favoritesSounds: {
      rain: { format: 'mp3', volume: 40 },
      wind: { format: 'ogg', volume: 50 },
      thunderstorm: { format: 'mp3', volume: 75 }
    }
  },
  {
    name: 'Andrés',
    favoritesSounds: {
      ocean: { format: 'mp3', volume: 60 },
      birds: { format: 'ogg', volume: 40 },
      fireplace: { format: 'mp3', volume: 55 }
    }
  }
]

function volumeMeanCalculator(list) {
  let totalVolume = 0
  let volumeNumber = 0
  for (const user of list) {
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume
      volumeNumber++
    }
  }
  const volumeMean = totalVolume / volumeNumber
  return volumeMean
}

console.log(volumeMeanCalculator(users))
console.log(volumeMeanCalculator(users2))
