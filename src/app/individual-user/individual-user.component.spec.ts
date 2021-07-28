import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserComponent } from './individual-user.component';
import { RouterTestingModule} from "@angular/router/testing";
import { HttpClientTestingModule} from "@angular/common/http/testing";


describe('IndividualUserComponent', () => {
  let component: IndividualUserComponent;
  let fixture: ComponentFixture<IndividualUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualUserComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an individual user', () => {
    expect(fixture.nativeElement.querySelector('[data-test="individualUser-email"]')).toBeTruthy();
  });

  it('should show an individual user', () => {
    expect(fixture.nativeElement.querySelector('[data-test="individualUser-name"]')).toBeTruthy();
  });

  it('should show an individual user', () => {
    expect(fixture.nativeElement.querySelector('[data-test="individualUser-id"]')).toBeTruthy();
  });

});
