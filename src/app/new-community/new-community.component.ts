import { Component, OnInit } from '@angular/core';
import { Community } from '../community.model';
import { CommunityService } from '../community.service';


@Component({
  selector: 'app-new-community',
  templateUrl: './new-community.component.html',
  styleUrls: ['./new-community.component.css'],
  providers: [CommunityService]
})
export class NewCommunityComponent implements OnInit {

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
  }
  submitForm(category: string, location: string, title: string, body: string, contact: string){
    var newCommunityListing: Community = new Community(category, location, title, body, contact);
    this.communityService.addCommunity(newCommunityListing);
  }
}
