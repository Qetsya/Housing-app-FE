import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HousingService } from './housing.service';
import { House } from '../shared/house.model';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private housingService: HousingService
  ) {}

  // const houses = this.housingService.getHouses();

  fetchHouses() {
    return this.http
      .get<House[]>(
        'https://angular-learn-1db75-default-rtdb.europe-west1.firebasedatabase.app/'
      )
      .pipe(
        tap({
          // next: () => console.log(this.database)
        })
      );
  }
}
