import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap("Pouet", "C'est super cool", new Date(), 0, "https://cdn.pixabay.com/photo/2023/11/16/22/06/fritillary-butterfly-8393205_640.jpg", "Paris")
    this.mySnap1 = new FaceSnap("Bird", "C'est super cool", new Date(), 0, "https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_640.jpg")
    this.mySnap2 = new FaceSnap("Sloubi", "C'est super cool", new Date(), 0, "https://cdn.pixabay.com/photo/2023/11/13/18/09/forest-8386084_640.jpg")
    throw new Error('Method not implemented.');
  }

}
