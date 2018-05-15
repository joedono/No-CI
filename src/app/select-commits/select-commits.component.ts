import { Component, OnInit } from '@angular/core';

import { GitRepoService } from '../services/git-repo.service';

@Component({
  selector: 'app-select-commits',
  templateUrl: './select-commits.component.html',
  styleUrls: ['./select-commits.component.css']
})
export class SelectCommitsComponent implements OnInit {

  constructor(
    private gitRepoService: GitRepoService
  ) { }

  ngOnInit() {
  }

}
