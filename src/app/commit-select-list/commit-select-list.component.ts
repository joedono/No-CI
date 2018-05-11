import { Component, OnInit } from '@angular/core';

// Lists the commits in the repo. Allows the user to select which commits to pull file differences from.
@Component({
  selector: 'app-commit-select-list',
  templateUrl: './commit-select-list.component.html',
  styleUrls: ['./commit-select-list.component.css']
})
export class CommitSelectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
