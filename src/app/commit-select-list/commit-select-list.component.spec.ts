import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitSelectListComponent } from './commit-select-list.component';

describe('CommitSelectListComponent', () => {
  let component: CommitSelectListComponent;
  let fixture: ComponentFixture<CommitSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
