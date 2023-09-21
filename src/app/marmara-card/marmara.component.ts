import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marmara',
  templateUrl: './marmara.component.html',
  styleUrls: ['./marmara.component.scss']
})

export class MarmaraComponent {
  constructor(private router: Router) {}

  
  navigateToCard() {
    this.router.navigate(['/marmara']); 
  }
}

