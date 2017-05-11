import { Injectable } from '@angular/core';
import { Housing } from './housing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HousingService {
  houses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.houses = database.list('houses');
  }
  getHouses() {
    return this.houses;
  }
  getHouseById(houseId) {
    return this.database.object('houses/' + houseId);
  }
  addHouse(newHouse: Housing) {
    this.houses.push(newHouse);
  }
  updateHouse(localUpdatedHouse) {
    const houseUpdate = this.getHouseById(localUpdatedHouse.$key);
    houseUpdate.update({type: localUpdatedHouse.type, location: localUpdatedHouse.location, title: localUpdatedHouse.title, body: localUpdatedHouse.body, price: localUpdatedHouse.price, availability: localUpdatedHouse.availability});
  }
  deleteHouse(localHouseToDelete) {
    const houseInFirebase = this.getHouseById(localHouseToDelete.$key);
    houseInFirebase.remove();
  }
}
