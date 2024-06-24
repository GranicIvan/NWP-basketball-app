import { Component } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.css']
})
export class FeaturedMoviesComponent {

  movies: Array<Movie>;

  constructor() {
    this.movies = [
      {
        name: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        Year: 1994,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
      },
      {
        name: 'The Godfather',
        director: 'Francis Ford Coppola',
        Year: 1972,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        name: 'The Dark Knight',
        director: 'Christopher Nolan',
        Year: 2008,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'
      },
      {
        name: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        Year: 1994,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        name: 'Fight Club',
        director: 'David Fincher',
        Year: 1999,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        name: 'Inception',
        director: 'Christopher Nolan',
        Year: 2010,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
      },
      {
        name: 'The Matrix',
        director: 'Lana Wachowski, Lilly Wachowski',
        Year: 1999,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
      },
      {
        name: 'Parasite',
        director: 'Bong Joon Ho',
        Year: 2019,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'},
      {
        name: 'Joker',
        director: 'Todd Phillips',
        Year: 2019,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
      },
      {
        name: '1917',
        director: 'Sam Mendes',
        Year: 2019,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg'
      },
      {
        name: 'La La Land',
        director: 'Damien Chazelle',
        Year: 2016,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg'
      }
    ];
  }

}
