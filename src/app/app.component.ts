import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{ types }} </h1>
    <ul>
    <p [ngStyle]="{'text-transform': capitalize}">
  Hello!
    </p>
      <li *ngFor = "let type of types; let i = index">
{{ type }} {{ i }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:no-inferrable-types
  bools: boolean = false;

  nums: Array<number> = [1, 2.5, 5];

  strs: Array<string> = ['hi', 'there'];

  test = ({
    id: 1,
    name: 'test'
  });

  user = ({
    id: 2,
    name: 'user'
  });

  objs = [this.test, this.user ];

  types = [this.bools, this.nums, this.strs];


  getTypeof(type) {
    return typeof type;
  }

 }
