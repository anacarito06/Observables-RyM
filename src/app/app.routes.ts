
import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./component/slider/slider.component').then(m => m.SliderComponent)
    },
    {
        path: 'card',
        loadComponent: () => import('./component/card/card.component').then(m => m.CardComponent)
    },

    {
        path: 'input',
        loadComponent: () => import('./component/input/input.component').then(m => m.InputComponent)
    }
];
