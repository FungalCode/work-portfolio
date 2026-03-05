import { Routes } from '@angular/router';
import { Homepage } from './home/homepage/homepage';
import { Analysispage } from './analysis/analysispage/analysispage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'analyse', component: Analysispage },
  { path: '**', redirectTo: '' }
];
