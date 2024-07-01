import { Component } from '@angular/core';
import { Movie } from '../model/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: Array<Movie>;

  constructor() {
    this.movies = [
      {
        Title: 'The Shawshank Redemption',
        Director: 'Frank Darabont',
        Year: 1994,
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
      },
      {
        Title: 'The Godfather',
        Director: 'Francis Ford Coppola',
        Year: 1972,
        Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        Title: 'The Dark Knight',
        Director: 'Christopher Nolan',
        Year: 2008,
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'
      },
      {
        Title: 'Pulp Fiction',
        Director: 'Quentin Tarantino',
        Year: 1994,
        Poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        Title: 'Fight Club',
        Director: 'David Fincher',
        Year: 1999,
        Poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        Title: 'Inception',
        Director: 'Christopher Nolan',
        Year: 2010,
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
      },
      {
        Title: 'The Matrix',
        Director: 'Lana Wachowski, Lilly Wachowski',
        Year: 1999,
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
      }
    ];
  }



}
