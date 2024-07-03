import { Component } from '@angular/core';
import { MultiSearch } from '../model/multi-search';
import { Movie } from '../model/movie';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  multiSearch!: MultiSearch;
  movieTitle!: string;
  apiKey!: string;
  jsonString!: {
    [x: string]: any; Title: string; Year: string; Rated: string; Released: string; Runtime: string; Genre: string; Director: string; Writer: string; Actors: string; Plot: string; Language: string; Country: string; Awards: string; Poster: string; Ratings: { Source: string; Value: string; }[]; Metascore: string; imdbRating: string; imdbVotes: string; imdbID: string; Type: string; DVD: string; BoxOffice: string; Production: string; Website: string; Response: string; 
};
  movie2!: Movie | null;
  jsonString3!: any;
  message!: string;
  year!: number;
  array1!: string[];
  filmovi!: Movie[];  


  constructor(private http: HttpClient) {
    this.filmovi = [];
  };
  


  multiSearchMovie(movieForm: NgForm) {
   
    if (movieForm.valid) {
      //this.message = 'Movie form is in a valid state';
      
      this.movieTitle = this.movieTitle.trim();
      this.apiKey = this.apiKey.trim();

      console.log('Searching for movie ', this.movieTitle, ' with API key ', this.apiKey);
      
      
      const url = `http://www.omdbapi.com/?s=${this.movieTitle}&apiKey=${this.apiKey}`;

     

      this.http.get(url).subscribe(
        (response: any) => {
          // Handle the response data
          console.log('Response:', response);
          // Update the movie variable with the retrieved data
          this.jsonString = response.Search;


          this.jsonString =  JSON.parse(JSON.stringify(this.jsonString));

          //console.log(this.jsonString);

          this.array1 = this.jsonString['map'](JSON.stringify)

          //console.log(this.array1);

          const len = this.array1.length;

          // for (let i = 0; i < len; i++) {
          //   const film = JSON.stringify(this.array1.);
          //   console.log(film);            
          // }

          for (let i = 0; i < len; i++) {
            const film = JSON.parse(this.array1[i]);
            //console.log('+++++', film);
            //this.filmovi[i]= film as Movie;
            this.filmovi.push(film);
          }

          //console.log('Sada pisemo filmove\n Filmovi:', this.filmovi);
          //console.log('naziv prvog filma:', this.filmovi[0].Title);

          

          
        },
        (error: any) => {
          // Handle any errors
          console.error('Error:', error);
          this.message = 'An error occurred while searching for the movie.';
        }
      );

     

    } else {
      this.message = 'Form is in an invalid state';
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
