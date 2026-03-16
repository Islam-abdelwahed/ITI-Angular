import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { StringContainsPipe } from '../pipes/string-contains.pipe';

@Component({
  selector: 'app-courses',
  imports: [NgClass, FormsModule, CategoryFilterPipe, StringContainsPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  searchText = '';
  selectedCategory = 'All';

  categories = ['All', 'Programming', 'Design', 'Marketing', 'Business'];

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'Aya shehata',
      price: 199,
      seats: 3,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png',
      catId: 10,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'TypeScript in Practice',
      instructor: 'Yasser salem',
      price: 149,
      seats: 2,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png',
      catId: 11,
      category: 'Programming',
    },
    {
      id: 3,
      title: 'RxJS for Developers',
      instructor: 'Abdullaha mohamed',
      price: 179,
      seats: 1,
      Image: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
      catId: 12,
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Node API Bootcamp',
      instructor: 'Youssef Amin',
      price: 229,
      seats: 0,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      catId: 13,
      category: 'Business',
    },
    {
      id: 5,
      title: 'UI Design Essentials',
      instructor: 'Nadia Saleh',
      price: 129,
      seats: 4,
      Image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
      catId: 14,
      category: 'Design',
    },
  ];

  private containsPipe = new StringContainsPipe();

  filteredCourses: Course[] = [];

  filterCourses(): void {
    let result = this.courses;


    if (this.searchText.trim()) {
      const matchingTitles = new Set(
        this.containsPipe.transform(
          this.courses.map(c => c.title),
          this.searchText
        )
      );

      result = result.filter(c => matchingTitles.has(c.title));
    }


    if (this.selectedCategory !== 'All') {
      result = result.filter(c => c.category === this.selectedCategory);
    }

    this.filteredCourses = result;
  }

  register(course: Course): void {
    if (course.seats > 0) {
      course.seats -= 1;
    }
  }
  ngOnInit() {
    this.filterCourses();
  }
}
