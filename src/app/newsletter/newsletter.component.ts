import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface NewsletterForm
  extends FormGroup<{
    name: FormControl<string | null>;
    age: FormControl<number | null>;
    email: FormControl<string | null>;
  }> {}

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm: NewsletterForm;
  message = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.newsletterForm = this.fb.group({
      name: [''],
      age: [0],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    this.message = this.newsletterForm.controls.email.valid
      ? 'Thank you for your subscription'
      : 'Missing Email';
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
