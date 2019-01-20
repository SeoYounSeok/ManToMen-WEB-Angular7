import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsdetailComponent } from './contentsdetail.component';

describe('ContentsdetailComponent', () => {
  let component: ContentsdetailComponent;
  let fixture: ComponentFixture<ContentsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
