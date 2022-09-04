import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AdminComponent implements OnInit {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Walks',
      icon: 'home',
      link: '/home',
      color: '#ee1375',
    },
    {
      title: 'Walkers',
      icon: 'directions_walk',
      link: '/walkers',
      color: '#ee1375',
    },
    {
      title: 'Dogs',
      icon: 'pets',
      link: '/walkers',
      color: '#ee1375',
    },
    {
      title: 'Clients',
      icon: 'people',
      link: '/walkers',
      color: '#ee1375',
    },

    {
      title: 'walkers',
      icon: 'directions_walk',
      color: '#ee1375',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
