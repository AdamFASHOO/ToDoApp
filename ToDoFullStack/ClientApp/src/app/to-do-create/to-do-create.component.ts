import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css'],
  providers: [ToDoService]
})

export class ToDoCreateComponent implements OnInit {
  newToDo: ToDo;
  constructor(private todoDB: ToDoService ) { 
    this.newToDo = new ToDo(0, "", false)
  }

  ngOnInit(): void {
  }

  createToDo() {
    this.todoDB.createToDo(this.newToDo).subscribe(
      (result) => { console.log(result) } //"Creation Worked" in place of 'result'
    )
  }

}
