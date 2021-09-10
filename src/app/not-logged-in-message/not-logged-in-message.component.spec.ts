import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInMessageComponent } from './not-logged-in-message.component';

describe('NotLoggedInMessageComponent', () => {
  let component: NotLoggedInMessageComponent;
  let fixture: ComponentFixture<NotLoggedInMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedInMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedInMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
