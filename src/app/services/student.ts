import { Injectable } from '@angular/core';
import { StudentData } from '../models/student-data';



@Injectable({
  providedIn: 'root',
})
export class Student {
  students: StudentData[] = [
    { id: 1, name: 'Ahmed Yasser',   email: 'amam@school.com',   grade: 'Grade 10', gpa: 4.0 },
    { id: 2, name: 'Salah Ayman',     email: 'sasa@school.com',  grade: 'Grade 10', gpa: 3.8 },
    { id: 3, name: 'Osama Hassan', email: 'osos@school.com', grade: 'Grade 11', gpa: 3.5 },
    { id: 4, name: 'ALi Saudi',   email: 'ssssl@school.com',   grade: 'Grade 11', gpa: 3.1 },
    { id: 5, name: 'Omar Ibrahim',  email: 'omar@school.com',    grade: 'Grade 12', gpa: 2.8 },
    { id: 6, name: 'Sara Nasser',   email: 'sara@school.com',    grade: 'Grade 12', gpa: 2.4 },
    { id: 7, name: 'Karim Adel',    email: 'karim@school.com',   grade: 'Grade 10', gpa: 2.0 },
  ];

  getAllStudents(): StudentData[] {
    return this.students;
  }

  addStudent(student: Omit<StudentData, 'id'>): void {
    const nextId = Math.max(...this.students.map((s) => s.id)) + 1

    this.students.push({ id: nextId, ...student });
  }
}
