import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectRepoComponent } from './select-repo/select-repo.component';
import { CommitSelectListComponent } from './commit-select-list/commit-select-list.component';
import { FileSelectListComponent } from './file-select-list/file-select-list.component';
import { FtpSettingsFormComponent } from './ftp-settings-form/ftp-settings-form.component';
import { FtpSettingsComponent } from './ftp-settings/ftp-settings.component';
import { FileListComponent } from './file-list/file-list.component';
import { FtpLogComponent } from './ftp-log/ftp-log.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectRepoComponent,
    CommitSelectListComponent,
    FileSelectListComponent,
    FtpSettingsFormComponent,
    FtpSettingsComponent,
    FileListComponent,
    FtpLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
