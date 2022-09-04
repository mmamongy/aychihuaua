import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-barbucks',
  templateUrl: './barbucks.component.html',
  styleUrls: ['./barbucks.component.scss']
})
export class BarbucksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.

  }

}
