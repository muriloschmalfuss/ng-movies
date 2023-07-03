import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-movies';

  movies: any = [];

  addMovie(movie: Movie) {
    this.movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem('movies') || '[]');
  }
}
