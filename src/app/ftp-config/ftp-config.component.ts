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

  constructor(
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
  }

  public testConnection() {
    this.ftpUploadService.testConnection(this.host, this.port, this.username, this.password);
  }

  public onNext() {
    this.ftpUploadService.storeConnection(this.host, this.port, this.username, this.password);
  }

}
