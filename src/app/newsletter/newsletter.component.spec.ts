import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterComponent, RouterTestingModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message on subscription if email is missing', () => {
    const button = fixture.debugElement.query(
      By.css('[data-testid="btn-submit"]')
    ).nativeElement as HTMLButtonElement;
    button.click();

    const paragraph = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLParagraphElement;
    expect(paragraph.textContent).toBe('Missing Email');
  });

  it('should succeed if email is set', () => {
    const input = fixture.debugElement.query(By.css('[data-testid=email]'))
      .nativeElement as HTMLInputElement;
    input.value = 'email@email.com';
    input.dispatchEvent(new CustomEvent('input'));

    const button = fixture.debugElement.query(
      By.css('[data-testid="btn-submit"]')
    ).nativeElement as HTMLButtonElement;
    button.click();

    const paragraph = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLParagraphElement;
    expect(paragraph.textContent).toBe('Thank you for your subscription');
  });
});
