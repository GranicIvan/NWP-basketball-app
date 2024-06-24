import { Component, Input , OnInit} from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-comp',
  templateUrl: './movie-comp.component.html',
  styleUrls: ['./movie-comp.component.css']
})
export class MovieCompComponent implements OnInit{
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
