import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: true },
    { description: 'play', done: true },
    { description: 'laugh', done: true },
  ];

  addItem(description:string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  deleteItem(item:any) {
    const index = this.allItems.findIndex(obj => obj.description == item.description)
    this.allItems.splice(index,1);
  }
}
