import { Component, OnInit } from '@angular/core';

import { FtpUploadService } from '../services/ftp-upload.service';

@Component({
  selector: 'app-ftp-config',
  templateUrl: './ftp-config.component.html',
  styleUrls: ['./ftp-config.component.css']
})
export class FtpConfigComponent implements OnInit {

  public host: string;
  public port: number;
  public username: string;
  public password: string;

  public testResultVisible: boolean;
  public testSuccessful: boolean;

  constructor(
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
    this.testResultVisible = false;
    this.testSuccessful = false;
  }

  public testConnection() {
    console.log('testing connection');
    this.testSuccessful = this.ftpUploadService.testConnection(this.host, this.port, this.username, this.password);
    this.testResultVisible = true;
  }

  public onNext() {
    this.ftpUploadService.storeConnection(this.host, this.port, this.username, this.password);
  }

}
