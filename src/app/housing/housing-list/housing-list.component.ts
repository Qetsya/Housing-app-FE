import { Component, OnInit } from '@angular/core';
import { houses } from './data';
import { House } from '../../shared/house.model';

import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseDetailsComponent } from '../house/house-details/house-details.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.scss',
  standalone: true,
  imports: [MatGridListModule, CommonModule, HouseDetailsComponent],
})
export class HousingListComponent implements OnInit {
  houses;
  isLoading = false;

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

  onHouseSelect(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
