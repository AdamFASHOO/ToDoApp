import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-update',
  templateUrl: './to-do-update.component.html',
  styleUrls: ['./to-do-update.component.css'],
  providers: [ToDoService]
})
export class ToDoUpdateComponent implements OnInit {
  id: number = 0;
  todo: ToDo = new ToDo(0, "", false);
  constructor(private todoDB: ToDoService) { }

  ngOnInit(): void {
  }

  searchToDosById(): void {
    this.todoDB.getToDoById(this.id).subscribe(
      (todoToUpdate) => {
        this.todo = todoToUpdate;
      }
    )
  }

  updateToDo() {
    this.todoDB.updateToDo(this.id, this.todo).subscribe(
      (result) => { console.log(result) }
    )
  }
}
