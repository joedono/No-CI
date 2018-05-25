import { Injectable } from '@angular/core';
import * as ssh2 from 'ssh2';

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

    var Client = ssh2.Client;
    var connection = new Client();
    var connSettings = {
      host: host,
      port: port,
      user: username,
      password: password
    };

    connection.on('ready', function() {
      connection.sftp(function(err, sftp) {
        if (err) console.error(err);

        sftp.readdir('/', function (err, list) {
          if (err) console.error(err);
          console.dir(list);
          connection.end();
        });
      });
    }).connect(connSettings);

    return true;
  }
}
