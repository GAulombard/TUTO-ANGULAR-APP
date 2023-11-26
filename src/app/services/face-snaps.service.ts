import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        new FaceSnap(1, "L'effet papillon", "C'est super cool", new Date(), 67, "https://cdn.pixabay.com/photo/2023/11/16/22/06/fritillary-butterfly-8393205_640.jpg", "Paris"),
        new FaceSnap(2, "Birdy", "Trop mimi", new Date(), 350, "https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_640.jpg"),
        new FaceSnap(3, "Chant d'Sloubi", "C'est super fun ici !", new Date(), 1, "https://cdn.pixabay.com/photo/2023/11/13/18/09/forest-8386084_640.jpg", "kaamelot")
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}