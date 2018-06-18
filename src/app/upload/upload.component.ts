import { Component, EventEmitter, OnInit } from '@angular/core';

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
  public logs: string[];
  public logger: EventEmitter<string>;

  public selectedFiles: CommitFile[];
  public ftpConfig: FtpConfig;
  public rootPath: string;

  constructor(
    private gitRepoService: GitRepoService,
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
    this.rootPath = this.gitRepoService.getRepoPath();
    this.selectedFiles = this.gitRepoService.getSelectedFiles();
    this.ftpConfig = this.ftpUploadService.getConnection();

    this.logs = [];
    this.logger = new EventEmitter<string>();
    this.logger.subscribe((res) => {
      console.log(res);
      let newLogs = this.logs.slice(0);
      newLogs.push(res);
      this.logs = newLogs;
    });
  }

  public upload() {
    this.ftpUploadService.upload(this.rootPath, this.selectedFiles, this.ftpConfig, this.logger);
  }

}
