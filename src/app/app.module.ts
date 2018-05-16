import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectRepoComponent } from './select-repo/select-repo.component';
import { SelectCommitsComponent } from './select-commits/select-commits.component';
import { FtpConfigComponent } from './ftp-config/ftp-config.component';
import { UploadComponent } from './upload/upload.component';

import { GitRepoService } from './services/git-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectRepoComponent,
    SelectCommitsComponent,
    FtpConfigComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ GitRepoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
