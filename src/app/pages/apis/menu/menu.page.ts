import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MenuPage {
  private router = inject(Router);
  private authService = inject(AuthService); 

  openApi(type: string) {
    this.router.navigate(['/api-view', type]);
  }

  
  logout() {
    this.authService.logout();
  }
}