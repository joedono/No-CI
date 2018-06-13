import { Component, OnInit } from '@angular/core';

import { CommitFile } from '../models/commit-file';
import { FtpConfig } from '../models/ftp-config';

import { FtpUploadService } from '../services/ftp-upload.service';
import { GitRepoService } from '../services/git-repo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public selectedFiles: CommitFile[];
  public ftpConfig: FtpConfig;

  constructor(
    private gitRepoService: GitRepoService,
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
    this.selectedFiles = this.gitRepoService.getSelectedFiles();
    this.ftpConfig = this.ftpUploadService.getConnection();
  }

  public upload() {
    this.ftpUploadService.upload(this.selectedFiles, this.ftpConfig);
  }

}
