import { Component, computed, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { getHubIcon } from './hub-icon.mapper';

@Component({
  selector: 'app-hub-icon',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <ng-container *ngComponentOutlet="iconComponent()" />
  `
})
export class HubIconComponent {
  readonly name = input<string | null | undefined>(null);

  readonly iconComponent = computed(() =>
    getHubIcon(this.name())
  );
}
