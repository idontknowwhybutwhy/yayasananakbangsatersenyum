import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRoutingModule } from './static-routing.module';

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


@NgModule({
  declarations: [   
    BodyComponent,
    DetailKaComponent,
    DetailKmComponent,
    DetailSComponent,
    DetailUComponent,
    DonationComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    TabsComponent,
    VisionmissionComponent,
  ],
  imports: [
    CommonModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
