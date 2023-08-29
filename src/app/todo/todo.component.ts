import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit{
todos:any=[];

  constructor (private todoService:TodoService){}


  ngOnInit(): void {
  this.getTodo();

  }

  onClick(titleInput:HTMLInputElement){
    if (titleInput.value){ 
    
      this.todoService.addTodo(titleInput.value)
      titleInput.value="";
    }
 
  }
  getTodo(){
    this.todoService.getTodo().subscribe((res)=>{
      this.todos=res;
    })

  }

  updateTodo(id:string , newStatus:boolean){
    this.todoService.updateTodo(id,newStatus)
  }
  deleteTodo(id:string ){
    this.todoService.deleteTodo(id)
  }
}
