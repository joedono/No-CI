import { Component, OnInit } from '@angular/core';

import { Commit } from '../models/commit';
import { GitRepoService } from '../services/git-repo.service';

@Component({
  selector: 'app-select-commits',
  templateUrl: './select-commits.component.html',
  styleUrls: ['./select-commits.component.css']
})
export class SelectCommitsComponent implements OnInit {

  public commits: Commit[];
  public files: string[];

  public selectedCommits: Commit[];
  public selectedFiles: string[];

  constructor(
    private gitRepoService: GitRepoService
  ) { }

  ngOnInit() {
    this.commits = this.gitRepoService.getCommits();
    console.log(this.commits);
  }

}
