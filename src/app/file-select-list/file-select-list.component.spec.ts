import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectListComponent } from './file-select-list.component';

describe('FileSelectListComponent', () => {
  let component: FileSelectListComponent;
  let fixture: ComponentFixture<FileSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
