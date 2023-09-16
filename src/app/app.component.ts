import { Component } from '@angular/core';
import { Model, ToDoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;
  nameControl = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value: any){
    if (value!="") {
        this.model.items.push(new ToDoItem(value,false));
    } 
  }
  updateName(value: any) {
    this.nameControl = true;
    return this.model.user = value;
  }
}
