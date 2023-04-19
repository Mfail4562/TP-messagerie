import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePeopleComponent } from './active-people.component';

describe('ActivePeopleComponent', () => {
  let component: ActivePeopleComponent;
  let fixture: ComponentFixture<ActivePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
