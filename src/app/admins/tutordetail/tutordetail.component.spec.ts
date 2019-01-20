import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutordetailComponent } from './tutordetail.component';

describe('TutordetailComponent', () => {
  let component: TutordetailComponent;
  let fixture: ComponentFixture<TutordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
