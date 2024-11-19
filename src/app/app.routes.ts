
import { Routes } from '@angular/router';



export const routes: Routes = [
   
    {
        path: 'lista',
        loadComponent: () => import('./component/lista/lista.component').then(m => m.ListaComponent)
    }
];
