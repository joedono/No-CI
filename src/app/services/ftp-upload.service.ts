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
    console.log('starting connection test');
    var client = new ftp();
    client.on('ready', function() {
      console.log('start of ready')
      client.list(function(err, list) {
        console.log('start of list');
        if (err) console.error(err);
        console.dir(list);
        client.end();
      });
    });

    client.on('error', function(err) {
      console.error(err);
    });

    console.log('connecting');
    client.connect({
      host: host,
      port: port,
      user: username,
      password: password
    });

    return true;
  }
}
