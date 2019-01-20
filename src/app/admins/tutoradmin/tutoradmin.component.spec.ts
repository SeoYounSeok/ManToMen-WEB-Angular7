import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoradminComponent } from './tutoradmin.component';

describe('TutoradminComponent', () => {
  let component: TutoradminComponent;
  let fixture: ComponentFixture<TutoradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
