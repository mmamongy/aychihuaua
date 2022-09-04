import { ThankYouComponent } from './thank-you/thank-you.component';
import { BarbucksComponent } from './barbucks/barbucks.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'get-started', component: QuestionsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'barbucks', component: BarbucksComponent },
  { path: 'thank-you', component: ThankYouComponent },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
