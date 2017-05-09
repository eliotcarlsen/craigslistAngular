import { Component, OnInit } from '@angular/core';
import { Housing } from '../housing.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  providers: [HousingService]
})
export class HousingComponent implements OnInit {
  houses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private housingService: HousingService) { }

  ngOnInit() {
    this.houses = this.housingService.getHouses();
  }
  goToDetailPage(clickedHouse){
    this.router.navigate(['houses', clickedHouse.$key]);
  }

}
