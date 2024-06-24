import { Component } from '@angular/core';
import { MultiSearch } from '../model/multi-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  multiSearch!: MultiSearch;

}
