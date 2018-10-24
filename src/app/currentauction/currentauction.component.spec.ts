import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentauctionComponent } from './currentauction.component';

describe('CurrentauctionComponent', () => {
  let component: CurrentauctionComponent;
  let fixture: ComponentFixture<CurrentauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
