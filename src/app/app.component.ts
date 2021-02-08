import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

  // method is getTypeof and th argument is in the () and the argument wants any so (x: any)
  getTypeof(x: any) {
    return typeof x;
  }
 }
