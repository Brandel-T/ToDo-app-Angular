import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos?: Todo[] = [] ; // array of Todo
  someThingToDo?: boolean ;
  nothingToDo: any; // template reference( to a message ), when the "todos" array is emplty
  inputTodo: string =""; // for two way binding 

  constructor() { }

  ngOnInit(): void {
    this.todos;
    this.someThingToDo = this.todos?.length !==0; 
  }
   
  /**
   * add a new Task to do to the list of tasks
   */
  addTodo(): void { 
    
    this.todos?.push({
      content: this.inputTodo,
      completed: false,
      notModified: true
    });
    
    this.inputTodo = "";
    this.someThingToDo = true;
    console.log( this.todos );
    
  }

  /**
   * 
   * @param event 
   * change a todo content
   */
  setTodoContent(toChangeTodo: any): void {
    console.log(toChangeTodo);
    // console.log( todo.index );
    
    console.log('before: ', this.todos );
    this.todos?.map(
      (todo, index) => {
        if ( index === toChangeTodo.index || todo === toChangeTodo.toBeChangeTodo ) 
          todo.content = toChangeTodo.newContent; 
        return todo;
    });
    console.log('after: ', this.todos );
    
  }

  setTodos( event: Array<Todo> ) {
    this.todos = event;
    this.someThingToDo = this.todos?.length !== 0; // check if todos arrays is empty (nothing more to do) 
  }
}
