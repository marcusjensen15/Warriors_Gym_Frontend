import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupsComponent } from './muscle-groups.component';

describe('MuscleGroupsComponent', () => {
  let component: MuscleGroupsComponent;
  let fixture: ComponentFixture<MuscleGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show muscle groups', () => {
    expect(fixture.nativeElement.querySelector('[data-test="muscleGroups"]')).toBeTruthy();
  });

  it('should show muscle group header', () => {
    expect(fixture.nativeElement.querySelector('[data-test="muscleGroupsHeader"]')).toBeTruthy();
  });

    it('should show each muscle group individually', () => {
    expect(fixture.nativeElement.querySelector('[data-test="muscleGroupsHeader"]')).toBeTruthy();
  });

    it('should show one specific muscle group', () => {
    expect(fixture.nativeElement.querySelector('[data-test="specificMuscleGroup"]')).toBeTruthy();
  });


});
