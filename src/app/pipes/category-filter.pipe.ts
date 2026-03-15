import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
  transform(courses: Course[], selectedCategory: string): Course[] {
    
    if (!selectedCategory || selectedCategory === 'All') {
      return courses;
    }

    return courses.filter((course) => course.category === selectedCategory);
  }
}
