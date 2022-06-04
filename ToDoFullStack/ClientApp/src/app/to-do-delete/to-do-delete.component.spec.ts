import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDeleteComponent } from './to-do-delete.component';

describe('ToDoDeleteComponent', () => {
  let component: ToDoDeleteComponent;
  let fixture: ComponentFixture<ToDoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
