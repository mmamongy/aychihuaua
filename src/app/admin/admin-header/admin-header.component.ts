import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AdminHeaderComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>();
  user: string = 'Enea';

  constructor() {}

  ngOnInit(): void {}
  logout(): void {
    console.log('Logged out');
  }
}
