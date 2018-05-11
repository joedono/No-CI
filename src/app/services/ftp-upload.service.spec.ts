import { TestBed, inject } from '@angular/core/testing';

import { FtpUploadService } from './ftp-upload.service';

describe('FtpUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FtpUploadService]
    });
  });

  it('should be created', inject([FtpUploadService], (service: FtpUploadService) => {
    expect(service).toBeTruthy();
  }));
});
