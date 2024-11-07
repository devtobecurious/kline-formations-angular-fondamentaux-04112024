import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'kline-edit-film',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-film.component.html',
  styleUrl: './edit-film.component.css'
})
export class EditFilmComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly formBuilder = inject(FormBuilder)

  filmForm = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],

  })

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']

    this.filmForm.statusChanges
    .pipe(
      debounceTime(200)
    )
    .subscribe({
      next: changes => {

      }
    })
  }

  save(): void {
    const itemToSave = this.filmForm.value
  }

}
