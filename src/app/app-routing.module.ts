import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectRepoComponent } from './select-repo/select-repo.component';
import { SelectCommitsComponent } from './select-commits/select-commits.component';
import { FtpConfigComponent } from './ftp-config/ftp-config.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'select-repo', component: SelectRepoComponent },
  { path: 'select-commits', component: SelectCommitsComponent },
  { path: 'ftp-config', component: FtpConfigComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', redirectTo: 'select-repo', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
