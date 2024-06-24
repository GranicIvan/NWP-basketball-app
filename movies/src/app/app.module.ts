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

@NgModule({
  declarations: [
    AppComponent,
    MovieCompComponent,
    MovieListComponent,
    HomePageComponent,
    FeaturedMoviesComponent,
    MovieDetailComponent,
    SearchComponent,
    SingleSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
