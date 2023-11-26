import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) { }

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = 'Oh snap !';
  }

  onSnap() {

    if (this.buttonText === 'Oh snap !') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oups unsnap !';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap !';
    }



  }

}
