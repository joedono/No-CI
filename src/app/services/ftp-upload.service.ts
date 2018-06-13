import { Injectable } from '@angular/core';
import * as ftp from 'ftp';

import { CommitFile } from '../models/commit-file';
import { FtpConfig } from '../models/ftp-config';

var FtpConfigStore: FtpConfig;

const ProductionFolder = "/public_html/";
const StagingFolder = "/staging.animeboston.com/";

@Injectable({
  providedIn: 'root'
})
export class FtpUploadService {

  constructor() { }

  public storeConnection(host: string, port: number, username: string, password: string, isStaging: boolean) {
    FtpConfigStore = {
      Host: host,
      Port: port,
      Username: username,
      Password: password,
      IsStaging: isStaging
    };
  }

  public getConnection() {
    return FtpConfigStore;
  }

  public testConnection(host: string, port: number, username: string, password: string): void {
    console.log("Testing Connection");
    var client = new ftp();
    client.on('ready', () => {
      console.log("Successful connection. Attempting list");
      client.list((err, list) => {
        if (err) alert(err);

        console.dir(list);
        client.end();

        alert("Connection Successful");
      });
    });

    client.on('error', (err) => {
      alert(err);
    });

    console.log("Connecting to FTP");
    console.log(host);
    console.log(port);
    console.log(username);
    console.log(password);

    client.connect({
      host: host,
      port: port,
      user: username,
      password: password,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });
  }

  public upload(rootPath: string, files: CommitFile[], ftpConfig: FtpConfig) {
    console.log(rootPath);
    console.log(files);
    console.log(ftpConfig);

    var client = new ftp();

    client.on('ready', () => {
      // TODO

      client.list((err, list) => {
        if (err) alert(err);

        console.dir(list);
        client.end();

        alert("Connection Successful");
      });
    });

    client.on('error', (err) => {
      alert(err);
    });

    client.connect({
      host: ftpConfig.Host,
      port: ftpConfig.Port,
      user: ftpConfig.Username,
      password: ftpConfig.Password,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });
  }
}
