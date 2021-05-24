import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLocalComponent } from './read-local.component';

describe('ReadLocalComponent', () => {
  let component: ReadLocalComponent;
  let fixture: ComponentFixture<ReadLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
