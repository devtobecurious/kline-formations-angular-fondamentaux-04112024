import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Films } from "../models/film";
import { FilmsResult } from "./custom-types";

@Injectable({
    providedIn: 'root'
})
export class GetAllFilmsService {
    private readonly httpClient = inject(HttpClient)

    getAll(): Observable<FilmsResult> {
        return this.httpClient.get<FilmsResult>('https://swapi.dev/api/films/')
    }
}