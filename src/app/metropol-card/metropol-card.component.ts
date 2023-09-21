import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metropol-card',
  templateUrl: './metropol-card.component.html',
  styleUrls: ['./metropol-card.component.scss']
})
export class MetropolCardComponent {
  constructor(private router: Router) {}

  
  navigateToCard() {
    this.router.navigate(['/metropolitan']); 
  }
}



