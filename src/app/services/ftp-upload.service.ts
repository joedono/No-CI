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
    var client = new ftp();
    client.on('ready', () => {
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
      host: host,
      port: port,
      user: username,
      password: password,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });
  }

  public upload(rootPath: string, files: CommitFile[], ftpConfig: FtpConfig) {
    rootPath = rootPath.replace(/\\/gi, "/") + "/";
    var ftpRootFolder = ftpConfig.IsStaging ? StagingFolder : ProductionFolder;
    var client = new ftp();

    console.log(rootPath);
    console.log(files);
    console.log(ftpConfig);

    client.on('ready', () => {
      files.forEach((commitFile) => {
        if(commitFile.Status === 'A' || commitFile.Status === 'M') {
          client.put(rootPath + commitFile.FileName, ftpRootFolder + commitFile.FileName, (err) => {
            alert(err);
          });
        }
      });

      client.end();
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
