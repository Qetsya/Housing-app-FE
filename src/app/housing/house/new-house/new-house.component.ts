import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrl: './new-house.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    // ReactiveFormsModule,
    FormsModule
  ],
})
export class NewHouseComponent implements OnInit {
  addressForm: NgForm;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  // @Output() onSave: EventEmitter<{street: string, city: string}> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  closeModal() {
    this.onClose.emit();
  }

  onSubmit() {
    this.onClose.emit();
  }
}
