import { Injectable } from '@angular/core';
import { Housing } from './housing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HousingService {
  houses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.houses = database.list('houses');
  }
  getHouses(){
    return this.houses;
  }
  getHouseById(houseId: number){
    return this.database.object('houses/' + houseId)
  }
  addHouse(newHouse: Housing){
    this.houses.push(newHouse);
  }
  editHouse(){
    
  }
}
