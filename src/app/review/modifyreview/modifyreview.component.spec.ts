import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyreviewComponent } from './modifyreview.component';

describe('ModifyreviewComponent', () => {
  let component: ModifyreviewComponent;
  let fixture: ComponentFixture<ModifyreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
