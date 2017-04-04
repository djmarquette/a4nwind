import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  imports: ['FormsModule']
})
export class AppComponent {
  // [] means property binding - Component to DOM
  // () means event binding - DOM to Component

  name = 'Angular 2 Northwind';
  title = 'Northwind Orders App';
  titleColor = 'red';

  changeTitleColor(){
    this.titleColor = this.titleColor === 'red' ? 'blue' : 'red';
  }
}
