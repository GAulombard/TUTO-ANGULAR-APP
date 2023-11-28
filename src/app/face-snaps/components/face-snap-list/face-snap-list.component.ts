import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService) { }

  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

}
