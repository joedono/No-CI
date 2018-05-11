import { Component, OnInit } from '@angular/core';

// Displays the list of updated files from the selected commits. Allows the user to select which ones to upload
@Component({
  selector: 'app-file-select-list',
  templateUrl: './file-select-list.component.html',
  styleUrls: ['./file-select-list.component.css']
})
export class FileSelectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
