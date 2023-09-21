import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ic-anadolu-card',
  templateUrl: './ic-anadolu-card.component.html',
  styleUrls: ['./ic-anadolu-card.component.scss']
})
export class IcAnadoluCardComponent {
  constructor(private router: Router) {}
  
  navigateToCard() {
    this.router.navigate(['/icanadolu']); 
  }
}

