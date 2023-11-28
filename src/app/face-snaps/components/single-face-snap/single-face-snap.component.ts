import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

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

  onSnap(faceSnapId: number) {

    if (this.buttonText === 'Oh snap !') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.buttonText = 'Oups unsnap !';
        })
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.buttonText = 'Oh snap !';
        })
      );
    }
  }
}
