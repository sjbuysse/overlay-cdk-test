import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myArray = [{name: 'kaas'}, {name: 'hesp'}];

  constructor() {

  }
}
