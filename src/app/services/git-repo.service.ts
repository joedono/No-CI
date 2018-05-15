import { Injectable } from '@angular/core';
import * as gitlog from 'gitlog';

import { Commit } from '../models/commit';

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  private currentRepoPath: string;
  private commits: Commit[];
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
    let localCommits: Commit[];
    this.options.repo = repoPath;

    gitlog(this.options, function (error, commits) {
      if(error) {
        alert(error);
      } else {
        localCommits = commits;
      }
    });

    this.commits = localCommits;
  }

  public getCommits(): Commit[] {
    return this.commits;
  }
}
