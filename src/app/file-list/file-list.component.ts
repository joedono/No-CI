import { Component, OnInit } from '@angular/core';

// Displays the list of selected files to the user before the final upload
@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
