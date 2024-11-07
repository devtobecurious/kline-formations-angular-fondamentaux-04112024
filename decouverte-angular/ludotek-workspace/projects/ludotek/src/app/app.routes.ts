import { Routes } from '@angular/router';
import { ListFilmsComponent } from '../../features/films/components/list-films/list-films.component';
import { AddFilmComponent } from '../../features/films/components/add-film/add-film.component';
import { EditFilmComponent } from '../../features/films/components/edit-film/edit-film.component';

export const routes: Routes = [
    {
        path: 'films',
        component: ListFilmsComponent,
        data: {
            tot: 'Liste des films SW'
        }
        //loadComponent: () => import('../../features/films/components/list-films/list-films.component').then(item => item.ListFilmsComponent)
    },
    {
        path: 'films/add',
        component: AddFilmComponent
    },
    {
        path: 'films/edit/:id',
        component: EditFilmComponent
    }
];
