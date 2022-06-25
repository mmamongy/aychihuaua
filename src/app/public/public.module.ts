import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    HomePageComponent,
    MainComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    SharedModule,
    
    
  ]
})
export class PublicModule { }
