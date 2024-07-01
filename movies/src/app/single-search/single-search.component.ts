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
  //jsonString: any | undefined;
  //jsonString2: { Title: string; Year: string; Rated: string; Ratings: { Source: string; Value: string; }[]; };
  jsonString3: any;
  jsonString: { Title: string; Year: string; Rated: string; Released: string; Runtime: string; Genre: string; Director: string; Writer: string; Actors: string; Plot: string; Language: string; Country: string; Awards: string; Poster: string; Ratings: { Source: string; Value: string; }[]; Metascore: string; imdbRating: string; imdbVotes: string; imdbID: string; Type: string; DVD: string; BoxOffice: string; Production: string; Website: string; Response: string; };
  

  constructor() {

    this.movie = null;
    this.message = 'Please enter a movie title';

    // this.movie2;
    this.jsonString = {
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
    };



  this.jsonString3 =  JSON.parse(JSON.stringify(this.jsonString));
  this.jsonString3.Year =  Number(this.jsonString3.Year);

  this.movie2 = this.jsonString3;



  }

  createMovie(movieForm: NgForm) {
    //console.log('Creating movie ', this.movie);
    if (movieForm.valid) {
      this.message = 'Movie form is in a valid state';
      
      this.movie =  {
        Title: 'The Shawshank Redemption',
        Director: 'Frank Darabont',
        Year: 1994,
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
      };

    } else {
      this.message = 'Stock form is in an invalid state';
      console.error('Movie form is in an invalid state');
    }
  }

  convertNumbersInJSON(){
    this.jsonString3 = this.jsonString;
    this.jsonString3.Year = Number(this.jsonString.Year);
    this.jsonString3.metascore = Number(this.jsonString.Metascore);
    this.jsonString3.imdbRating = Number(this.jsonString.imdbRating);
    this.jsonString3.imdbVotes = Number(this.jsonString.imdbVotes);
    this.jsonString3.rottenTomatoesRating = Number(this.jsonString.Ratings[1].Value);
  }

}
