import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-delete',
  templateUrl: './to-do-delete.component.html',
  styleUrls: ['./to-do-delete.component.css'],
  providers: [ToDoService]
})
export class ToDoDeleteComponent implements OnInit {

  id: number = 0;
  constructor(private todoDB: ToDoService) { }

  ngOnInit(): void {
  }

  deleteToDo() {
    this.todoDB.deleteToDo(this.id).subscribe(
      (result) => { console.log(result) }
    )
  }
}
