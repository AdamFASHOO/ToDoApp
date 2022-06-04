import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  urlRoot: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
   }


   getToDos(): Observable<ToDo[]> {
     return this.http.get<ToDo[]>(this.urlRoot + "todos/GetToDos");
   }

   getToDoById(id: number) {
     return this.http.get<ToDo>(this.urlRoot + "todos/GetToDoById/" + id);
   }

   getToDoByTask(task: string): Observable<ToDo> {
     return this.http.get<ToDo>(this.urlRoot + "todos/SearchByTask/" + task);
   }

   getToDoByCompleted(completed: string) {
     return this.http.get<ToDo[]>(this.urlRoot + "todos/SearchByCompleted/" + completed);
   }


   createToDo(x: ToDo) {
     return this.http.post<String>(this.urlRoot + "todos/CreateToDo/", x)
   }

   deleteToDo(id: number) {
     return this.http.delete<String>(this.urlRoot + "todos/DeleteToDo/" + id)
   }

   updateToDo(id: number, body: ToDo) {
     return this.http.put<String>(this.urlRoot + "todos/UpdateToDo/" + id, body)
   }
}
