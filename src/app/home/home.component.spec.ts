import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="loginButton"]')).toBeTruthy();
    });

  it('should show signup button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="signupButton"]')).toBeTruthy();
  });
});
