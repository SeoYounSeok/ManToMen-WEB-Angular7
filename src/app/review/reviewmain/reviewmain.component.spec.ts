import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewmainComponent } from './reviewmain.component';

describe('ReviewmainComponent', () => {
  let component: ReviewmainComponent;
  let fixture: ComponentFixture<ReviewmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
