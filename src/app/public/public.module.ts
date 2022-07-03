import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AboutComponent,
    HomePageComponent,
    MainComponent,
    ContactUsComponent,
    QuestionsComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
    
    
  ]
})
export class PublicModule { }
