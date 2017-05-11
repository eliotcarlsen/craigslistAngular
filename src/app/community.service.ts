import { Injectable } from '@angular/core';
import { Community } from './community.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CommunityService {
  communities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.communities = database.list('communities');
  }
  getCommunities(){
    return this.communities;
  }
  addCommunity(newCommunity: Community){
    this.communities.push(newCommunity)
  }
  getCommunityById(communityId){
    return this.database.object('community/' + communityId);
  }
}
