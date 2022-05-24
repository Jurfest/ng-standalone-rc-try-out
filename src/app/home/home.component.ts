import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ng-standalone-components';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToNewsletter(): void {
    this.router.navigate(['/newsletter']);
  }
}
