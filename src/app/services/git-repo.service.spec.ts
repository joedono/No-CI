import { TestBed, inject } from '@angular/core/testing';

import { GitRepoService } from './git-repo.service';

describe('GitRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitRepoService]
    });
  });

  it('should be created', inject([GitRepoService], (service: GitRepoService) => {
    expect(service).toBeTruthy();
  }));
});
