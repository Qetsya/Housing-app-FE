import { Injectable, OnInit } from '@angular/core';
import { houses } from '../housing/housing-list/data';
import { House } from '../shared/house.model';

@Injectable({ providedIn: 'root' })
export class HousingService implements OnInit {
  houses: House[] = houses;
  // houses;

  constructor() {}
  ngOnInit(): void {}

  // setHouses(houses) {
  //   this.houses = houses;
  // }

  getHouses() {
    // this.houses =  this.dataStorage.fetchHouses();
    return this.houses.slice();
  }

  getHouseDetails(id: number) {
    console.log(houses);
    for (let house of houses) {
      if (house.id === id) {
        console.log(house.id);
        return house;
      } else {
        console.log('Couldnt find a house');
      }
    }
  }
}
