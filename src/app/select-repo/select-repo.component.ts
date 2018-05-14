import { Component, OnInit } from '@angular/core';

import { GitRepoService } from '../services/git-repo.service';

@Component({
  selector: 'app-select-repo',
  templateUrl: './select-repo.component.html',
  styleUrls: ['./select-repo.component.css']
})
export class SelectRepoComponent implements OnInit {

  public currentRepoPath: string;

  constructor(
    private gitRepoService: GitRepoService
  ) { }

  ngOnInit() {
  }

  public onRepoSelected($event) {
    console.log($event.srcElement.files);
  }
}
