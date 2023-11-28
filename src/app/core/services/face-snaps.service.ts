import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    constructor(private httpClient: HttpClient) { }

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.httpClient.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        )
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
            map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
            map(previousFaceSnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFaceSnap.id + 1
            })),
            switchMap(newFaceSnap => this.httpClient.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
        )
    }

}