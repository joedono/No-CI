import { Injectable } from '@angular/core';
import * as ftp from 'ftp';

import { FtpConfig } from '../models/ftp-config';

var FtpConfigStore: FtpConfig;

@Injectable({
  providedIn: 'root'
})
export class FtpUploadService {

  constructor() { }

  public storeConnection(host: string, port: number, username: string, password: string) {
    FtpConfigStore = {
      Host: host,
      Port: port,
      Username: username,
      Password: password
    };
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
}
