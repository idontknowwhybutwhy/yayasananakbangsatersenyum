import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { DetailKaComponent } from './detail-ka/detail-ka.component';
import { DetailKmComponent } from './detail-km/detail-km.component';
import { DetailSComponent } from './detail-s/detail-s.component';
import { DetailUComponent } from './detail-u/detail-u.component';
import { DonationComponent } from './donation/donation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { TabsComponent } from './tabs/tabs.component';
import { VisionmissionComponent } from './visionmission/visionmission.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'body', component: BodyComponent
  },
  {
    path: 'detail-ka', component: DetailKaComponent
  },
  {
    path: 'detail-km', component: DetailKmComponent
  },
  {
    path: 'detail-s', component: DetailSComponent
  },
  {
    path: 'detail-u', component: DetailUComponent
  },
  {
    path: 'donation', component: DonationComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'tabs', component: TabsComponent
  },
  {
    path: 'visionmission', component: VisionmissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
