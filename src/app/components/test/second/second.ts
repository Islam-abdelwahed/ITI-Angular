import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {

  x=signal(50);
  doublex=computed(()=>{
    return this.x()*2
  })
  increase(){
    //this.x.set(1000);
    this.x.update(s=>s+1);
  }
  
  constructor() {
    effect(()=>{
      console.log(this.x());
    });
    
  }
}
