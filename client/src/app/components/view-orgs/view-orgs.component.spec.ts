import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrgsComponent } from './view-orgs.component';

describe('ViewOrgsComponent', () => {
  let component: ViewOrgsComponent;
  let fixture: ComponentFixture<ViewOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
