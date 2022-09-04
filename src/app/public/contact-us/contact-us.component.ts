import { PublicService } from './../public.service';
import { ContactUs } from './../../models/contact-us';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUs: ContactUs = new ContactUs();
  constructor(
    private publicService: PublicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addContactUs() {
    this.publicService.addContactUs(this.contactUs).subscribe((data) => {
      console.log(data);
      this.router.navigate(['thank-you'])
    });
  }
}
