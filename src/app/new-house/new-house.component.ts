import { Component, OnInit } from '@angular/core';
import { Housing } from '../housing.model';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css'],
  providers: [HousingService]
})
export class NewHouseComponent implements OnInit {

  constructor(private housingService: HousingService) { }

  ngOnInit() {
  }
  submitForm(type: string, location: string, title: string, body: string, price: number, availability: string){
    var newHouse: Housing = new Housing(type, location, title, body, price, availability);
    this.housingService.addHouse(newHouse);
  }

}
