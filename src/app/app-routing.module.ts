import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TourTypesPageComponent } from './pages/tour-types-page/tour-types-page.component';
import { PhotosPageComponent } from './pages/photos-page/photos-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SpecificationsComponent } from './pages/specifications/specifications.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'services',component:ServicesPageComponent},
  {path:'team',component:TeamPageComponent},
  {path:'tours',component:TourTypesPageComponent},
  {path:'photos',component:PhotosPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'specifications',component:SpecificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
