import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageclassComponent } from './mypageclass.component';

describe('MypageclassComponent', () => {
  let component: MypageclassComponent;
  let fixture: ComponentFixture<MypageclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypageclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
