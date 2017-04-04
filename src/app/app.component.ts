import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
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
