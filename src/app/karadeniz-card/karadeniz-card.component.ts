import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-karadeniz-card',
  templateUrl: './karadeniz-card.component.html',
  styleUrls: ['./karadeniz-card.component.scss']
})
export class KaradenizCardComponent {
  constructor(private router: Router) {}

  navigateToCard() {
    this.router.navigate(['/karadeniz']); 
  }
}


