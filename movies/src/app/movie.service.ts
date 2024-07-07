import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor(private http: HttpClient) { }





  private transformMovieData(data: any): Movie {
    return {
      Title: data.Title,
      Year: Number(data.Year),
      Genre: data.Genre,
      Director: data.Director,
      Actors: data.Actors,
      Plot: data.Plot,
      Poster: data.Poster,
      imdbRating: Number(data.imdbRating),
      imdbVotes: data.imdbVotes,
      Runtime: data.Runtime,
      Released: data.Released,
      imdbID: data.imdbID
      
    };
  }

}
