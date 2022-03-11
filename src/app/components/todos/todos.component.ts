import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos?: Todo[] ;
  inputTodo: string =""; 

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ];
  }
  
  toggleDone( id: number ): void { 
    this.todos?.map((todo, todoIndex) => {
      if (todoIndex == id)  
        todo.completed = !todo.completed; 
      return todo;
    });  
  }

  deleteTodo( id: number ): void {
    this.todos = this.todos?.filter((todo, todoIndex) => todoIndex !== id);
  }

  addTodo(): void {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}
