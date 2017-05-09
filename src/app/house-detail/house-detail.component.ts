import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Housing } from '../housing.model';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css'],
  providers: [HousingService]
})
export class HouseDetailComponent implements OnInit {
  houseId;
  houseToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private housingService: HousingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.houseId = urlParameters['id'];
    });
    this.houseToDisplay = this.housingService.getHouseById(this.houseId);
  }

}
