import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { filter, map, Observable, retry } from "rxjs";
import { Films } from "../models/film";
import { FilmsResult } from "./custom-types";

@Injectable({
    providedIn: 'root'
})
export class GetAllFilmsService {
    private readonly httpClient = inject(HttpClient)

    getAll(): Observable<Films> {
        return this.httpClient.get<FilmsResult>('https://swapi.dev/api/films/').pipe
        (
            retry(2),
            map(result => result.results.map(film => ({ id: 0, title: film.title, description: '', year: parseInt(film.release_date) }))),
            //filter((result) => result?.results.length > 0)
        )
    }
}