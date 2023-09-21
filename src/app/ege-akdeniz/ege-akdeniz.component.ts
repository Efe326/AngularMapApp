import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ege-akdeniz',
  templateUrl: './ege-akdeniz.component.html',
  styleUrls: ['./ege-akdeniz.component.scss']
})
export class EgeAkdenizComponent {
  constructor(private router: Router) {}
  
  navigateToCard() {
    this.router.navigate(['/ege-akdeniz']); 
  }
}


