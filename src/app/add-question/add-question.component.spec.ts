import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionComponent } from './add-question.component';

describe('AddQuestionComponent', () => {
  let component: AddQuestionComponent;
  let fixture: ComponentFixture<AddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show add question title', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionTitle"]')).toBeTruthy();
  });

    it('should show muscle group input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="muscleGroupInput"]')).toBeTruthy();
  });

    it('should show question text input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionTextInput"]')).toBeTruthy();
  });

    it('should show question 1 input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionOneInput"]')).toBeTruthy();
  });

    it('should show question 2 input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionTwoInput"]')).toBeTruthy();
  });

    it('should show question 3 input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionThreeInput"]')).toBeTruthy();
  });

    it('should show question 4 input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="questionFourInput"]')).toBeTruthy();
  });

    it('should show add question button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="addQuestionButton"]')).toBeTruthy();
  });


});
