import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'your-api-url';

  constructor(private http: HttpClient) { }


  getMovie(): Observable<Movie> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) => this.transformMovieData(data))
    );
  }




  private transformMovieData(data: any): Movie {
    return {
      Title: data.Title,
      Year: Number(data.Year),
      genre: data.Genre,
      director: data.Director,
      // map other properties...
    };
  }

}
