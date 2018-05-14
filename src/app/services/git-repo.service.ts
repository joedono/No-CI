import { Injectable } from '@angular/core';
import { gitlog } from 'gitlog';

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

  public setRepoPath(repoPath: string): boolean {
    this.options.repo = repoPath;

    gitlog(this.options, function (error, commits) {
      this.commits = commits;
    });

    return true;
  }

  public getCommits(): Commit[] {
    return this.commits;
  }
}
