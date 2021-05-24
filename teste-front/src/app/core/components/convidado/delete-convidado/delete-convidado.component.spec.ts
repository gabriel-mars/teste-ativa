import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConvidadoComponent } from './delete-convidado.component';

describe('DeleteConvidadoComponent', () => {
  let component: DeleteConvidadoComponent;
  let fixture: ComponentFixture<DeleteConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
