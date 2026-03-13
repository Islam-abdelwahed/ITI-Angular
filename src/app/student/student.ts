import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StudentItem {
  id: number;
  name: string;
  age: number;
  grade: string;
}

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: StudentItem[] = [
    { id: 1, name: 'Alice Johnson', age: 20, grade: 'A' },
    { id: 2, name: 'Bob Smith',    age: 22, grade: 'B' },
    { id: 3, name: 'Carol White',  age: 21, grade: 'A' },
    { id: 4, name: 'David Brown',  age: 23, grade: 'C' },
    { id: 5, name: 'Eva Martinez', age: 20, grade: 'B' },
  ];
}
