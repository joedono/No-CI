import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRepoComponent } from './select-repo.component';

describe('SelectRepoComponent', () => {
  let component: SelectRepoComponent;
  let fixture: ComponentFixture<SelectRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
