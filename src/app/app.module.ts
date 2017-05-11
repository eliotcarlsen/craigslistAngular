import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SeattleTacomaComponent } from './seattle-tacoma/seattle-tacoma.component';
import { AboutComponent } from './about/about.component';
import { HousingComponent } from './housing/housing.component';
import { routing } from './app.routing';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewHouseComponent } from './new-house/new-house.component';
import { AdminComponent } from './admin/admin.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { NewCommunityComponent } from './new-community/new-community.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { TypeOfPostingComponent } from './type-of-posting/type-of-posting.component';
import { CommunityComponent } from './community/community.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SeattleTacomaComponent,
    AboutComponent,
    HousingComponent,
    HouseDetailComponent,
    NewHouseComponent,
    AdminComponent,
    EditHouseComponent,
    NewCommunityComponent,
    CommunityDetailComponent,
    TypeOfPostingComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
