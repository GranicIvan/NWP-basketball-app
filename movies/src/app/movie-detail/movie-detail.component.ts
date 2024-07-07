import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  @Input() movie!: Movie; 
  movieClasses: { [key: string]: boolean; } = {};
  apiKey!: string;



  ngOnInit(): void {
    this.movieClasses = {
      "highlight": this.movie.Year > 2023,
    }

    this.apiKey = localStorage.getItem('apiKey') || '';
  }
}
