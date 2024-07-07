import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.css']
})
export class MovieByIdComponent {

  movie!: Movie;
  id!: string;
  apiKey: any;
  message: string;
  movie2!: Movie | null;
  jsonString3: any;
  jsonString!: { Title: string; Year: string; Rated: string; Released: string; Runtime: string; Genre: string; Director: string; Writer: string; Actors: string; Plot: string; Language: string; Country: string; Awards: string; Poster: string; Ratings: { Source: string; Value: string; }[]; Metascore: string; imdbRating: string; imdbVotes: string; imdbID: string; Type: string; DVD: string; BoxOffice: string; Production: string; Website: string; Response: string; };
  



  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.message = "";
  };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.apiKey = params['apiKey'];
      console.log(this.id);





    });
               
    const url = `http://www.omdbapi.com/?i=${this.id}&apiKey=${this.apiKey}`;

    this.http.get(url).subscribe(
      (response: any) => {
        
        console.log('Response:', response);
        
        this.jsonString = response;


        this.jsonString =  JSON.parse(JSON.stringify(this.jsonString));
       

        this.convertNumbersInJSON();

        this.movie2 = this.jsonString3;

        
      },
      (error: any) => {
        
        console.error('Error:', error);
        this.message = 'An error occurred while searching for the movie.';
      }
    );

  }

  convertNumbersInJSON(){
    this.jsonString3 = this.jsonString;
    //this.jsonString3.Year = Number(this.jsonString.Year);
    this.jsonString3.metascore = Number(this.jsonString.Metascore);
    this.jsonString3.imdbRating = Number(this.jsonString.imdbRating);
    this.jsonString3.imdbVotes = Number(this.jsonString.imdbVotes);
  }



}
