import { Component, OnInit, Input } from '@angular/core';
import { Housing } from '../housing.model';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css'],
  providers: [HousingService]
})
export class EditHouseComponent implements OnInit {
  @Input() selectedHouse;

  constructor(private housingService: HousingService) { }

  ngOnInit() {
  }

}
