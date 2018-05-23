import { Injectable } from '@angular/core';
import * as gitlog from 'gitlog';

import { Commit } from '../models/commit';
import { CommitFile } from '../models/commit-file';

var CommitStore: Commit[];
var CommitFileStore: CommitFile[];

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  private currentRepoPath: string;
  private options = {
    repo: '',
    number: 20,
    fields: [
      'abbrevHash',
      'authorName',
      'committerName',
      'subject'
    ]
  };

  constructor() { }

  public setRepoPath(repoPath: string): void {
    this.options.repo = repoPath;

    gitlog(this.options, function (error, commits) {
      if(error) {
        alert(error);
      } else {
        CommitStore = commits;
      }
    });
  }

  public getCommits(): Commit[] {
    return CommitStore;
  }

  public setSelectedFiles(selectedFiles: CommitFile[]): void {
    CommitFileStore = selectedFiles;
    console.log(CommitFileStore);
  }

  public getSelectedFiles(): CommitFile[] {
    return CommitFileStore;
  }
}
