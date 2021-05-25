import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConvidadoComponent } from './create-convidado.component';

describe('CreateConvidadoComponent', () => {
  let component: CreateConvidadoComponent;
  let fixture: ComponentFixture<CreateConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
