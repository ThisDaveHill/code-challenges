/*
  WRITE YOUR SOLUTION HERE
*/


class Movie {
  constructor(title, director, genre, releaseYear, rating) {
  this.title = title
  this.director = director
  this.genre = genre
  this.releaseYear = releaseYear
  this.rating = rating
  }

  get getOverview() {
    return`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }

}

const pulpFiction = new Movie("Pulp Fiction", "Quentin Tarantino", "Crime", "1994", "92%");

console.log(pulpFiction.getOverview);