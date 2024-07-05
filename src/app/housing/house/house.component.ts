import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterModule],
  animations: [slideInAnimation],
})
export class HouseComponent {
  links = [
    { label: 'House Details', link: 'details' },
    { label: 'Bills', link: 'bills' },
    { label: 'Providers', link: 'details' },
  ];
  activeLink = this.links[0];
}
