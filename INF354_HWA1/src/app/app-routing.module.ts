import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonlInfoComponent } from './personl-info/personl-info.component';
import { IDInf0Component } from './id-inf0/id-inf0.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

const routes: Routes = [
  {
    path: '',
    component: PersonlInfoComponent,
  },
  {
    path: 'Identity',
    component: IDInf0Component,
  },
  {
    path: 'Photo',
    component: PhotoUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
