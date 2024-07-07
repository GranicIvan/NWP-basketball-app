import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCompComponent } from './movie-comp/movie-comp.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { SingleSearchComponent } from './single-search/single-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieByIdComponent } from './movie-by-id/movie-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCompComponent,
    MovieListComponent,
    HomePageComponent,
    FeaturedMoviesComponent,
    MovieDetailComponent,
    SearchComponent,
    SingleSearchComponent,
    MovieByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
