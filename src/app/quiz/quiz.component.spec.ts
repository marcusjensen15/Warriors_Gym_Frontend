import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show quiz header', () => {
    expect(fixture.nativeElement.querySelector('[data-test="quizHeader"]')).toBeTruthy();
  });

  it('should show quiz question text', () => {
    expect(fixture.nativeElement.querySelector('[data-test="quizQuestion"]')).toBeTruthy();
  });

  it('should show quiz question 1', () => {
    expect(fixture.nativeElement.querySelector('[data-test="question1"]')).toBeTruthy();
  });

  it('should show quiz question 2', () => {
    expect(fixture.nativeElement.querySelector('[data-test="question2"]')).toBeTruthy();
  });

  it('should show quiz question 3', () => {
    expect(fixture.nativeElement.querySelector('[data-test="question3"]')).toBeTruthy();
  });

    it('should show quiz question 4', () => {
    expect(fixture.nativeElement.querySelector('[data-test="question4"]')).toBeTruthy();
  });

    it('should show quiz submit button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="quizSubmitButton"]')).toBeTruthy();
  });


});
