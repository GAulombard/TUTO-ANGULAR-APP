import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        new FaceSnap(1, "L'effet papillon", "C'est super cool", new Date(), 67, "https://cdn.pixabay.com/photo/2023/11/16/22/06/fritillary-butterfly-8393205_640.jpg", "Paris"),
        new FaceSnap(2, "Birdy", "Trop mimi", new Date(), 350, "https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_640.jpg"),
        new FaceSnap(3, "Chant d'Sloubi", "C'est super fun ici !", new Date(), 1, "https://cdn.pixabay.com/photo/2023/11/13/18/09/forest-8386084_640.jpg", "kaamelot")
    ]

    constructor(private httpClient: HttpClient) { }

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: number, snapType: string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
       
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
        const faceSnap: FaceSnap = {
            ...formValue,
            createdDate: new Date(),
            snaps: 0,
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }

}