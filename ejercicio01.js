/* Ejercicio 1
Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no tienen que repetirse.
Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]
Para filtrar las categorías puedes ayudarte de la función .includes(). */

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

// Este es otro array para comprobar funcionalidad de la función

const movies2 = [
  {
    title: 'Galactic Odyssey: Rise of the Nova',
    duration: 135,
    categories: ['ciencia ficción', 'aventura']
  },
  {
    title: 'The Silent Whisper',
    duration: 147,
    categories: ['thriller', 'misterio']
  },
  {
    title: 'Bistro Blues',
    duration: 109,
    categories: ['comedia', 'drama']
  },
  {
    title: 'Mystic River',
    duration: 128,
    categories: ['drama', 'suspense']
  }
]

function movieCathegotyClassifier(moviesList) {
  const movieCategories = []
  for (const movie of moviesList) {
    for (const category of movie.categories) {
      if (movieCategories.includes(category)) {
        // do nothing
      } else {
        movieCategories.push(category)
      }
    }
  }
  return movieCategories
}

console.log(movieCathegotyClassifier(movies))
console.log(movieCathegotyClassifier(movies2))
