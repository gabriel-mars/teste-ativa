import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTarefaComponent } from './create-tarefa.component';

describe('CreateTarefaComponent', () => {
  let component: CreateTarefaComponent;
  let fixture: ComponentFixture<CreateTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
