import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbucksComponent } from './barbucks.component';

describe('BarbucksComponent', () => {
  let component: BarbucksComponent;
  let fixture: ComponentFixture<BarbucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
