import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { HouseDetailsComponent } from '../house/house-details/house-details.component';
import { HousingService } from '../../services/housing.service';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NewHouseComponent } from "../house/new-house/new-house.component";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    HouseDetailsComponent,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NewHouseComponent
  ],
})
export class HousingListComponent implements OnInit {
  houses;
  isLoading = false;
  isModalOpen = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.houses = this.housingService.getHouses();
    this.isLoading = false;
    console.log(this.houses);
  }

  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onHouseSelect(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
