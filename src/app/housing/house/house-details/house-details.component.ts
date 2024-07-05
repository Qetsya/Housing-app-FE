import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HousingService } from '../../../services/housing.service';
import { LoadingSpinnerComponent } from '../../../shared/loader/loading-spinner.component';
import { House } from '../../../shared/house.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.scss',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
})
export class HouseDetailsComponent implements OnInit {
  houseDetails: House;
  id: number;
  subscription: Subscription;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.houseDetails = this.housingService.getHouseDetails(this.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
