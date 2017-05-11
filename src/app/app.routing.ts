import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleTacomaComponent } from './seattle-tacoma/seattle-tacoma.component';
import { AboutComponent } from './about/about.component';
import { HousingComponent } from './housing/housing.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { AdminComponent } from './admin/admin.component';
import { TypeOfPostingComponent } from './type-of-posting/type-of-posting.component';
import { NewCommunityComponent } from './new-community/new-community.component';
import { CommunityDetailComponent } from './community-detail/community-detail.component';
import { CommunityComponent } from './community/community.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SeattleTacomaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'houses/:id',
    component: HouseDetailComponent
  },
  {
    path: 'type-of-posting/new-house',
    component: NewHouseComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'type-of-posting',
    component: TypeOfPostingComponent
  },
  {
    path: 'type-of-posting/new-community',
    component: NewCommunityComponent
  },
  {
    path: 'community/:id',
    component: CommunityDetailComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
