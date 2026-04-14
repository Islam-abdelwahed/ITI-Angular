import { Component, inject } from '@angular/core';
import { Student } from '../../services/student';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {

  students = inject(Student).getAllStudents();



  getDegree(gpa: number): string {
    if (gpa >= 3.6) return 'Excellent';
    if (gpa >= 3.3) return 'Very Good';
    if (gpa >= 3.0) return 'Good';
    if (gpa >= 2.7) return 'Above Average';
    if (gpa >= 2.3) return 'Average';
    return 'Below Average';
  }
}
