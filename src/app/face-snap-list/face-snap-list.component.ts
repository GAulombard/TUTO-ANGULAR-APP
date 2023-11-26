import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService) { }

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    throw new Error('Method not implemented.');
  }
}
