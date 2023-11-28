import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { Observable, filter, interval, map, tap } from 'rxjs';
import { CoreModule } from './core/core.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 'pair : ' + value : 'impair : ' + value),
      tap(text => this.logger(text))
    );
  }

  logger(text: string) {
    console.log(`log : ${text}`);
  }
}
