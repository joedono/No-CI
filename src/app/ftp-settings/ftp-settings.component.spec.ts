import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpSettingsComponent } from './ftp-settings.component';

describe('FtpSettingsComponent', () => {
  let component: FtpSettingsComponent;
  let fixture: ComponentFixture<FtpSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtpSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
