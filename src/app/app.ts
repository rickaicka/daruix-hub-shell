import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HubUserActivityService } from '@daruix/hub-auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly userActivity = inject(HubUserActivityService);

  constructor() {
    this.userActivity.start();
  }
}
