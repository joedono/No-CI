import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpLogComponent } from './ftp-log.component';

describe('FtpLogComponent', () => {
  let component: FtpLogComponent;
  let fixture: ComponentFixture<FtpLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtpLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
