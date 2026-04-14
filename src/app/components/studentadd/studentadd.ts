import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Student } from '../../services/student';
import { StudentData } from '../../models/student-data';
import { Studentlist } from "../studentlist/studentlist";

@Component({
  selector: 'app-studentadd',
  imports: [FormsModule, InputTextModule, ButtonModule, Studentlist],
  templateUrl: './studentadd.html',
  styleUrl: './studentadd.css',
})
export class Studentadd {
  private readonly studentService = inject(Student);

  newStudent: Omit<StudentData, 'id'> = {
    name: '',
    email: '',
    grade: '',
    gpa: 0,
  };

  addStudent(): void {
    const name = this.newStudent.name.trim();
    const email = this.newStudent.email.trim();
    const grade = this.newStudent.grade.trim();

    if (!name || !email || !grade || this.newStudent.gpa < 0 || this.newStudent.gpa > 4) {
      alert('Please fill in all fields correctly. GPA should be between 0 and 4.');
      return;
    }

    this.studentService.addStudent({
      name,
      email,
      grade,
      gpa: this.newStudent.gpa,
    });

    this.newStudent = {
      name: '',
      email: '',
      grade: '',
      gpa: 0,
    };
  }
}
