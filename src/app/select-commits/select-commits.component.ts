import { Component, OnInit } from '@angular/core';

import { Commit } from '../models/commit';
import { CommitFile } from '../models/commit-file';
import { GitRepoService } from '../services/git-repo.service';

@Component({
  selector: 'app-select-commits',
  templateUrl: './select-commits.component.html',
  styleUrls: ['./select-commits.component.css']
})
export class SelectCommitsComponent implements OnInit {

  public commits: Commit[];
  public files: CommitFile[];

  public selectedCommits: Commit[];
  public selectedFiles: CommitFile[];

  constructor(
    private gitRepoService: GitRepoService
  ) { }

  ngOnInit() {
    this.commits = this.gitRepoService.getCommits();
  }

  public onSelectedCommitChange($event) {
    this.files = this.selectedCommits.map()
  }

  public doStuff() {
    console.log(this.selectedCommits);
  }

}
