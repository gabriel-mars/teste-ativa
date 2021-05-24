import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConvidadoComponent } from './read-convidado.component';

describe('ReadConvidadoComponent', () => {
  let component: ReadConvidadoComponent;
  let fixture: ComponentFixture<ReadConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
