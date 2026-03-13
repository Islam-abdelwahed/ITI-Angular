import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface StudentItem {
  id: number;
  name: string;
  age: number;
  grade: string;
}


@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: StudentItem[] = [
    { id: 1, name: 'Alice Johnson', age: 20, grade: 'A' },
    { id: 2, name: 'Bob Smith', age: 22, grade: 'B' },
    { id: 3, name: 'Carol White', age: 21, grade: 'A' },
    { id: 4, name: 'David Brown', age: 23, grade: 'C' },
    { id: 5, name: 'Eva Martinez', age: 20, grade: 'B' },
  ];

  isAddView = false;
  newStudent = {
    name: '',
    age: 0,
    grade: '',
  };

  showListView(): void {
    this.isAddView = false;
  }

  showAddView(): void {
    this.isAddView = true;
  }

  addStudent(): void {
    if (!this.newStudent.name.trim() || !this.newStudent.grade.trim()) {
      return;
    }

    const nextId = this.students.length + 1;

    this.students.push({
      id: nextId,
      name: this.newStudent.name.trim(),
      age: this.newStudent.age,
      grade: this.newStudent.grade.trim().toUpperCase(),
    });

    this.newStudent = {
      name: '',
      age: 18,
      grade: '',
    };
    this.showListView();
  }
}
