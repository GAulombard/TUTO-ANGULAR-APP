import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FaceSnapComponent, FaceSnapListComponent, NewFaceSnapComponent, SingleFaceSnapComponent
  ],
  exports: [
    FaceSnapComponent, FaceSnapListComponent, NewFaceSnapComponent, SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
