import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Student } from './student/student';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', component: Student },
    ],
  },
];
