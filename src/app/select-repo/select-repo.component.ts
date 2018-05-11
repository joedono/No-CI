import { Component, OnInit } from '@angular/core';

// Allows the user to select a folder that has a git repo in it to pull commits and files from
@Component({
  selector: 'app-select-repo',
  templateUrl: './select-repo.component.html',
  styleUrls: ['./select-repo.component.css']
})
export class SelectRepoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
