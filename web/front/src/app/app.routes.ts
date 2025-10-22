import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Estatuto } from './pages/estatuto/estatuto';
import { Contato } from './pages/contact/contact';
import { Contratos } from './pages/contratos/contratos';
import { Membros } from './pages/membros/membros';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'estatuto', component: Estatuto },
  { path: 'contato', component: Contato },
  { path: 'contratos', component: Contratos },
  { path: 'membros', component: Membros },
  { path: '**', redirectTo: '/home' } // Wildcard route for 404 pages
];
