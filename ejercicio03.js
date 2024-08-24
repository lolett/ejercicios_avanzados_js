/* Ejercicio 3
Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.  */

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

// segundo array para contrastar
const users2 = [
  {
    name: 'Isabel',
    favoritesSounds: {
      forest: { format: 'mp3', volume: 45 },
      rain: { format: 'ogg', volume: 50 },
      ocean: { format: 'mp3', volume: 70 }
    }
  },
  {
    name: 'Miguel',
    favoritesSounds: {
      birds: { format: 'mp3', volume: 40 },
      thunder: { format: 'ogg', volume: 60 },
      river: { format: 'mp3', volume: 65 }
    }
  },
  {
    name: 'Andrea',
    favoritesSounds: {
      wind: { format: 'mp3', volume: 55 },
      stream: { format: 'ogg', volume: 50 },
      fireplace: { format: 'mp3', volume: 75 },
      river: { format: 'mp3', volume: 65 }
    }
  },
  {
    name: 'Javier',
    favoritesSounds: {
      cityAmbience: { format: 'mp3', volume: 35 },
      rain: { format: 'ogg', volume: 65 },
      waves: { format: 'mp3', volume: 60 },
      ocean: { format: 'mp3', volume: 70 }
    }
  }
]

function favoriteSoundCounter(list) {
  const soundCounter = {}
  for (const user of list) {
    for (const sound in user.favoritesSounds) {
      if (soundCounter[sound]) {
        soundCounter[sound]++
      } else {
        soundCounter[sound] = 1
      }
    }
  }

  return soundCounter
}

console.log(favoriteSoundCounter(users))
console.log(favoriteSoundCounter(users2))
