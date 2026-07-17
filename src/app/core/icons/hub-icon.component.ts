import {booleanAttribute, Component, computed, input} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { getHubIcon } from './hub-icon.mapper';

@Component({
  selector: 'app-hub-icon',
  standalone: true,
  imports: [NgComponentOutlet],
  host: {
    '[class.cursor-pointer]': 'action()'
  },
  styleUrls: ['./hub-icon.component.scss'],
  template: `
    <ng-container *ngComponentOutlet="iconComponent()" />
  `
})
export class HubIconComponent {
  readonly name = input<string | null | undefined>(null);

  readonly action = input(false, {
    transform: booleanAttribute
  });

  readonly iconComponent = computed(() =>
    getHubIcon(this.name())
  );

}
