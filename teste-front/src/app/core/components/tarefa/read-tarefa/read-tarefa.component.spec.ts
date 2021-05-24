import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTarefaComponent } from './read-tarefa.component';

describe('ReadTarefaComponent', () => {
  let component: ReadTarefaComponent;
  let fixture: ComponentFixture<ReadTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
