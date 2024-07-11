import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrl: './new-house.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class NewHouseComponent {
  addressForm: FormGroup;
}
