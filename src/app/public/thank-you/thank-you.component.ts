import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private publicService : PublicService) { }

  ngOnInit(): void {
    this.getcontactus(); 
  }

  getcontactus(){
    this.publicService.getContactUs().subscribe( (d: any) => {
      console.log(d) 
    })
  }

  addContactUs(){
  
  }

}
