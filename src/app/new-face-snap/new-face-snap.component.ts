import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.css'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        creationDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );

  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }

}
