import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = 'Oh snap !';
  }

  onSnap() {

    if (this.buttonText === 'Oh snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oups unsnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap !';
    }



  }

}
