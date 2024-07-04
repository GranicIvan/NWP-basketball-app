import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { SingleSearchComponent } from './single-search/single-search.component';
import { SearchComponent } from './search/search.component';
import { MovieByIdComponent } from './movie-by-id/movie-by-id.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'featured-movies', component: FeaturedMoviesComponent },
  { path: 'single-search', component: SingleSearchComponent },
  { path: 'search-list', component: SearchComponent },
  { path: 'movie-by-id', component: MovieByIdComponent }

  
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
