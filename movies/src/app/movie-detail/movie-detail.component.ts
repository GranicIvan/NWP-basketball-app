import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  @Input() movie!: Movie; // Ovde je ! visak, skloniti ga posle

  movieClasses: { [key: string]: boolean; } = {};



  ngOnInit(): void {
    // Initializing productClasses and productStyles objects
    this.movieClasses = {
      "highlight": this.movie.Year > 2023,
    }
    // this.productStyles = {
    //   "font-size": this.product.quantity >= 10 ? "1.5rem" : "1rem"
    // }
  }
}
