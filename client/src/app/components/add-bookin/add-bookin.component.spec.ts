import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookinComponent } from './add-bookin.component';

describe('AddBookinComponent', () => {
  let component: AddBookinComponent;
  let fixture: ComponentFixture<AddBookinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
