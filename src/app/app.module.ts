import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreetingPageComponent } from './pages/greeting-page/greeting-page.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GreetingCarouselComponent } from './components/greeting-carousel/greeting-carousel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TourTypesPageComponent } from './pages/tour-types-page/tour-types-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NumbersCardComponent } from './components/numbers-card/numbers-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { SpecificationsComponent } from './pages/specifications/specifications.component';
import { TableCardComponent } from './components/table-card/table-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPageComponent,
    PageTopComponent,
    NavbarComponent,
    GreetingCarouselComponent,
    HomePageComponent,
    FooterComponent,
    AboutPageComponent,
    ServicesPageComponent,
    TeamPageComponent,
    TourTypesPageComponent,
    PhotosPageComponent,
    ContactPageComponent,
    NumbersCardComponent,
    ContactCardComponent,
    SpecificationsComponent,
    TableCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxGalleryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
