import { Component, OnInit } from '@angular/core';
import { each as _each } from 'lodash';

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
    this.files = [];

    _each(this.selectedCommits, (selectedCommit) => {
      for(let i in selectedCommit.files) {
        this.files.push(new CommitFile(selectedCommit.status[i], selectedCommit.files[i]));
      }
    });
  }

  public onNext() {
    this.gitRepoService.setSelectedFiles(this.selectedFiles);
  }

}
