import { Component } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.css']
})
export class SingleSearchComponent {

  movie: Movie | null;


  constructor() {

    this.movie = null;
  }

  
}
