import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConvidadoComponent } from './update-convidado.component';

describe('UpdateConvidadoComponent', () => {
  let component: UpdateConvidadoComponent;
  let fixture: ComponentFixture<UpdateConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
