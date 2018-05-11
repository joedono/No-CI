import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'select-repo', component: null },
  { path: 'select-commits', component: null },
  { path: 'ftp-config', component: null },
  { path: 'upload', component: null },
  { path: '**', redirectTo: 'select-repo', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
