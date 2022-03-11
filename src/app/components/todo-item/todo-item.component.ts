import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem?: Todo[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.todoItem);
    
  }
  
  toggleDone( id: number ): void { 
    this.todoItem?.map((todo, todoIndex) => {
      if (todoIndex == id)  
        todo.completed = !todo.completed; 
      return todo;
    });  
  }

  deleteTodo( id: number ): void {
    this.todoItem = this.todoItem?.filter((todo, todoIndex) => todoIndex !== id);
  }

}
