import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCommitsComponent } from './select-commits.component';

describe('SelectCommitsComponent', () => {
  let component: SelectCommitsComponent;
  let fixture: ComponentFixture<SelectCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
