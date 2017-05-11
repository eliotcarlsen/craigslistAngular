import { Component, OnInit } from '@angular/core';
import { Community } from '../community.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [CommunityService]
})
export class CommunityComponent implements OnInit {
  communities: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private communityService: CommunityService, private router: Router) { }

  ngOnInit() {
    this.communities = this.communityService.getCommunities();
  }
  goToDetailPage(clickedCommunity){
    this.router.navigate(['community', clickedCommunity.$key]);
  }
}
