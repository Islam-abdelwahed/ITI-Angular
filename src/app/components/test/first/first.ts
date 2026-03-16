import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PowerPipe } from '../../../shared/custPipe/power-pipe';
import { ArrFilterPipe } from '../../../shared/custPipe/arr-filter-pipe';

@Component({
  selector: 'app-first',
  imports: [CommonModule,PowerPipe,ArrFilterPipe],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
names:string[]=[
  "ahmed","mohamed","eman","alyaa","ahlam","mariam"
]
x=3;
  name="ahmed mohaMed aLy";
  d=new Date(1995,1,15);
}
