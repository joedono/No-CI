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
  public isStaging: boolean;

  constructor(
    private ftpUploadService: FtpUploadService
  ) { }

  ngOnInit() {
    this.host = 'ftp.animeboston.com';
    this.port = 21;
    this.username = 'joe.zusi@animeboston.com';
    this.password = '';
    this.isStaging = true;
  }

  public testConnection() {
    this.ftpUploadService.testConnection(this.host, this.port, this.username, this.password);
  }

  public onNext() {
    this.ftpUploadService.storeConnection(this.host, this.port, this.username, this.password, this.isStaging);
  }

}
