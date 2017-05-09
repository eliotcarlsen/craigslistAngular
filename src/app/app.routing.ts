import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleTacomaComponent } from './seattle-tacoma/seattle-tacoma.component';
import { AboutComponent } from './about/about.component';
import { HousingComponent } from './housing/housing.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { AdminComponent } from './admin/admin.component';

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
    path: 'new-house',
    component: NewHouseComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
