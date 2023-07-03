import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output()
  newMovieEvent = new EventEmitter<Movie>();

  addMovieForm: FormGroup;

  constructor() {
    this.addMovieForm = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      description: new FormControl(null),
      like: new FormControl(false),
      dislike: new FormControl(false)
    })
  }

  addMovie() {
    this.addMovieForm.patchValue({
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jeremy-yap-J39X2xX_8CQ-unsplash.jpg&w=640'
    })
    this.newMovieEvent.emit(this.addMovieForm.value);
  }

}
