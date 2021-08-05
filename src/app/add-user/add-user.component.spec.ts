import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="nameInput"]')).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="emailInput"]')).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="passwordInput"]')).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="isManagerInput"]')).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="isAdminInput"]')).toBeTruthy();
  });
});
