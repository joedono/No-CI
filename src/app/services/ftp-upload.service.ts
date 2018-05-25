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

  public testConnection(host: string, port: number, username: string, password: string): boolean {
    var client = new ftp();
    client.connect({
      host: host,
      port: port,
      user: username,
      password: password
    });

    return true;
  }
}
