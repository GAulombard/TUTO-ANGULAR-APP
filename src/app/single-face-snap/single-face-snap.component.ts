import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.buttonText = 'Oh snap !';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
