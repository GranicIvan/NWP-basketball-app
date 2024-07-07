import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.css']
})
export class SingleSearchComponent {
  [x: string]: any;

  movie: Movie | null;
  message: string;
  movie2!: Movie | null;
  year!: number;
  //jsonString: any | undefined;
  //jsonString2: { Title: string; Year: string; Rated: string; Ratings: { Source: string; Value: string; }[]; };
  jsonString3: any;
  jsonString!: { Title: string; Year: string; Rated: string; Released: string; Runtime: string; Genre: string; Director: string; Writer: string; Actors: string; Plot: string; Language: string; Country: string; Awards: string; Poster: string; Ratings: { Source: string; Value: string; }[]; Metascore: string; imdbRating: string; imdbVotes: string; imdbID: string; Type: string; DVD: string; BoxOffice: string; Production: string; Website: string; Response: string; };
  movieTitle!: string;

  //Querry variables
  sQuerry!: string;
  apiKey!: string;
  submitted = false;

  public nameControl = new FormControl();
  singleSearchForm!: FormGroup;

  

  constructor(private http: HttpClient,private fb: FormBuilder) {

    this.movie = null;
    this.message = 'Please enter a movie title';






  }

  // createMovie(movieForm: NgForm) {
  //   //console.log('Creating movie ', this.movie);
  //   if (movieForm.valid) {
  //     this.message = 'Movie form is in a valid state';
      
  //     this.movie =  {
  //       Title: 'The Shawshank Redemption',
  //       Director: 'Frank Darabont',
  //       Year: 1994,
  //       Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
  //     };

  //   } else {
  //     this.message = 'Stock form is in an invalid state';
  //     console.error('Movie form is in an invalid state');
  //   }
  // }


  searchMovie(movieForm: NgForm) {
   
    if (movieForm.valid) {
      
      
      this.movieTitle = this.movieTitle.trim();
      this.apiKey = this.apiKey.trim();

      console.log('Searching for movie ', this.movieTitle, ' with API key ', this.apiKey);
      
      
      const url = `http://www.omdbapi.com/?t=${this.movieTitle}&y=${this.year}&apiKey=${this.apiKey}`;

     

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

     

    } else {
      this.message = 'Form is in an invalid state';
      console.error('Movie form is in an invalid state');
    }
  }


  convertNumbersInJSON(){
    this.jsonString3 = this.jsonString;
    //this.jsonString3.Year = Number(this.jsonString.Year);
    this.jsonString3.metascore = Number(this.jsonString.Metascore);
    this.jsonString3.imdbRating = Number(this.jsonString.imdbRating);
    this.jsonString3.imdbVotes = Number(this.jsonString.imdbVotes);
    this.jsonString3.rottenTomatoesRating = Number(this.jsonString.Ratings[1].Value);
  }

  ///-----------------
  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }



  ngOnInit(): void {
    this.submitted = false;

    this.movieTitle

    this.singleSearchForm = this.fb.group({
      "movieTitle": [null, Validators.required],
      "apiKey": [null, Validators.required]
    });

  }

  searchForm = new FormGroup({
    movieTitle: new FormControl('', Validators.required),
    apiKey: new FormControl('', Validators.required)
  });


  get getMovieTitle() {
    return this.singleSearchForm.get('movieTitle');
  }

  get getApiKey() {
    return this.singleSearchForm.get('apyKey');
  }

}