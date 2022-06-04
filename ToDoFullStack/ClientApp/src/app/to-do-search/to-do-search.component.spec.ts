import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSearchComponent } from './to-do-search.component';

describe('ToDoSearchComponent', () => {
  let component: ToDoSearchComponent;
  let fixture: ComponentFixture<ToDoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
