import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.css']
})
export class SingleSearchComponent {

  movie: Movie | null;
  message: string;
  movie2: Movie | null;


  constructor() {

    this.movie = null;
    this.message = 'Please enter a movie title';

    this.movie2 = {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      "Plot": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      "Language": "English",
      "Country": "United States, United Kingdom, Canada",
      "Awards": "Won 1 Oscar. 44 wins & 148 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "73%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "8.7",
      "imdbVotes": "2,113,545",
      "imdbID": "tt0816692",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$188,020,017",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    }
  }

  createMovie(movieForm: NgForm) {
    console.log('Creating vet ', this.movie);
    if (movieForm.valid) {
      this.message = 'Movie form is in a valid state';
      
      this.movie =  {
        name: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        Year: 1994,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
      };

    } else {
      this.message = 'Stock form is in an invalid state';
      console.error('Movie form is in an invalid state');
    }
  }

}
