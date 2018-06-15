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
  public rootPath: string;
  public logs: string[];

  constructor(
    private gitRepoService: GitRepoService,
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
    this.rootPath = this.gitRepoService.getRepoPath();
    this.selectedFiles = this.gitRepoService.getSelectedFiles();
    this.ftpConfig = this.ftpUploadService.getConnection();

    this.logs = [];
  }

  public upload() {
    this.ftpUploadService.upload(this.rootPath, this.selectedFiles, this.ftpConfig);
  }

}
