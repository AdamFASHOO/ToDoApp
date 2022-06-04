import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-to-do-search',
  templateUrl: './to-do-search.component.html',
  styleUrls: ['./to-do-search.component.css'],
  providers: [ToDoService]
})
export class ToDoSearchComponent implements OnInit {

  searchTerm: string = "";
  searchId: number = 0;
  results: ToDo[] = [];
  result: ToDo = new ToDo(0, " ", false);
  
  constructor(private todoDB: ToDoService) { }

  ngOnInit(): void {
  }

  searchToDos(): void {
    this.todoDB.getToDos().subscribe(
      (response) => {
        this.results = response;
      }
    )
  }
  
  searchToDosByTask(): void {
    this.todoDB.getToDoByTask(this.searchTerm).subscribe(
      (response) => {
        this.result = response;
      }
    );
  }

  searchToDosById(): void {
    this.todoDB.getToDoById(this.searchId).subscribe(
      (response) => {
        this.result = response;
      }
    )
  }

}
