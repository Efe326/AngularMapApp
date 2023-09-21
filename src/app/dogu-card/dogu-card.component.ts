import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogu-card',
  templateUrl: './dogu-card.component.html',
  styleUrls: ['./dogu-card.component.scss']
})
export class DoguCardComponent {
  constructor(private router: Router) {}
  
  navigateToCard() {
    this.router.navigate(['/dogu']); 
  }
}