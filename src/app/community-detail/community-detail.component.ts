import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Community } from '../community.model';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
  providers: [CommunityService]
})
export class CommunityDetailComponent implements OnInit {
  communityId;
  communityToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private communityService: CommunityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.communityId = urlParameters['id'];
    });
    this.communityToDisplay = this.communityService.getCommunityById(this.communityId);
  }

}
