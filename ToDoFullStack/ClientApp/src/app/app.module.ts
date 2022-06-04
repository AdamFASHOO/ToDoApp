import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ToDoSearchComponent } from './to-do-search/to-do-search.component';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';
import { ToDoDeleteComponent } from './to-do-delete/to-do-delete.component';
import { ToDoUpdateComponent } from './to-do-update/to-do-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ToDoSearchComponent,
    ToDoCreateComponent,
    ToDoDeleteComponent,
    ToDoUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'to-do-search', component: ToDoSearchComponent },
      { path: 'to-do-create', component: ToDoCreateComponent},
      { path: 'to-do-delete', component: ToDoDeleteComponent},
      { path: 'to-do-update', component: ToDoUpdateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
