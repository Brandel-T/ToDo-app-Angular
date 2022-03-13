import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItems?: Todo[]; 
  @Output() public onModified = new EventEmitter();
  @Output() public onDelete = new EventEmitter(); 
  inputTodoItem?: string ;
 
  constructor( ){}

  ngOnInit(): void {
    console.log(this.todoItems); 
       
  }
  
  toggleDone( id: number ): void { 
    this.todoItems?.map((item, todoIndex) => {
      if (todoIndex == id)  {
        item.notModified = false;
        item.completed = !item.completed; 
      }
      return item;
    });  
  }

  deleteTodo( id: number ): void {
    this.todoItems = this.todoItems?.filter((todo, todoIndex) => todoIndex !== id); 
    // console.log(this.todoItems );
    this.onDelete.emit( this.todoItems );     
  }

  onClickModify( toChangeItem: Todo, itemIndex : number ): void {

    let altContent = toChangeItem.content;
    let newContent = window.prompt("Edit a new todo: "); 

    this.onModified.emit({
      toBeChangeTodo: toChangeItem,
      altContent: altContent,
      newContent: newContent,
      index: itemIndex
    }); 
  }
}
