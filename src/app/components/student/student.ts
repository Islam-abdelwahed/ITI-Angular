// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { DatePickerModule } from 'primeng/datepicker';
// import { InputTextModule } from 'primeng/inputtext';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { SelectModule } from 'primeng/select';
// import { TableModule } from 'primeng/table';


// interface StudentItem {
//   id: number;
//   name: string;
//   age: number;
//   grade: string;
//   department: string;
//   enrollmentDate: Date | null;
// }


// @Component({
//   selector: 'app-student',
//   imports: [
//     FormsModule,
//     DatePickerModule,
//     InputTextModule,
//     InputNumberModule,
//     SelectModule,
//     TableModule,
//   ],
//   templateUrl: './student.html',
//   styleUrl: './student.css',
// })
// export class Student {
//   departmentOptions = [
//     { label: 'Frontend', value: 'Frontend' },
//     { label: 'Backend', value: 'Backend' },
//     { label: 'UI/UX', value: 'UI/UX' },
//     { label: 'Mobile', value: 'Mobile' },
//   ];

//   students: StudentItem[] = [
//     { id: 1, name: 'Alice Johnson', age: 20, grade: 'A', department: 'Frontend', enrollmentDate: new Date('2025-09-01') },
//     { id: 2, name: 'Bob Smith', age: 22, grade: 'B', department: 'Backend', enrollmentDate: new Date('2025-09-05') },
//     { id: 3, name: 'Carol White', age: 21, grade: 'A', department: 'UI/UX', enrollmentDate: new Date('2025-09-10') },
//     { id: 4, name: 'David Brown', age: 23, grade: 'C', department: 'Mobile', enrollmentDate: new Date('2025-09-13') },
//     { id: 5, name: 'Eva Martinez', age: 20, grade: 'B', department: 'Frontend', enrollmentDate: new Date('2025-09-18') },
//   ];

//   isAddView = false;
//   newStudent = {
//     name: '',
//     age: 18,
//     grade: '',
//     department: '',
//     enrollmentDate: null as Date | null,
//   };

//   showListView(): void {
//     this.isAddView = false;
//   }

//   showAddView(): void {
//     this.isAddView = true;
//   }

//   addStudent(): void {
//     if (
//       !this.newStudent.name.trim() ||
//       !this.newStudent.grade.trim() ||
//       !this.newStudent.department.trim()
//     ) {
//       return;
//     }

//     const nextId = this.students.length + 1;

//     this.students.push({
//       id: nextId,
//       name: this.newStudent.name.trim(),
//       age: this.newStudent.age,
//       grade: this.newStudent.grade.trim().toUpperCase(),
//       department: this.newStudent.department,
//       enrollmentDate: this.newStudent.enrollmentDate,
//     });

//     this.newStudent = {
//       name: '',
//       age: 18,
//       grade: '',
//       department: '',
//       enrollmentDate: null,
//     };
//     this.showListView();
//   }

//   formatDate(date: Date | null): string {
//     return date ? date.toLocaleDateString() : '-';
//   }
// }
