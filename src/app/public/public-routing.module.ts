import { QuestionsComponent } from './questions/questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'get-started', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
