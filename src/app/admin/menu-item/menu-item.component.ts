import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MenuItem } from './../../models/menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MenuItemComponent implements OnInit {
  @Input() menu: Menu = [];

  constructor() { }

  ngOnInit(): void {
  }

}
