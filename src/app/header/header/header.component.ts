import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, MatButtonModule ]
})
export class HeaderComponent {

}
