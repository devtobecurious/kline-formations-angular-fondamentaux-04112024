import { JsonPipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Film } from '../../models/film';

@Component({
  selector: 'kline-add-film',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent {
  form = viewChild<NgForm>('filmForm')

  item: Film = {
    description: '',
    title: '',
    year: (new Date()).getFullYear()
  }

  save(): void {
    console.info(this.form())

    const maForm = this.form()
    if(maForm) {
      const isDisabled = maForm.form.valid
    }

    console.info(this.item)
  }
}
