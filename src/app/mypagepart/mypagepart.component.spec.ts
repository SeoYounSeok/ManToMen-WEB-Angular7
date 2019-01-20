import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypagepartComponent } from './mypagepart.component';

describe('MypagepartComponent', () => {
  let component: MypagepartComponent;
  let fixture: ComponentFixture<MypagepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypagepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
