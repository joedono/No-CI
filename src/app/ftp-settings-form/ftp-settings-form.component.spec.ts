import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpSettingsFormComponent } from './ftp-settings-form.component';

describe('FtpSettingsFormComponent', () => {
  let component: FtpSettingsFormComponent;
  let fixture: ComponentFixture<FtpSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtpSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
