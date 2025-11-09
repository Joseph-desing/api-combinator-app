import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterLink] 
})
export class HomePage implements OnInit {
  private authService = inject(AuthService);
  userEmail: string = '';

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.userEmail = user?.email || 'Usuario';
    console.log(' Usuario actual:', this.userEmail);
  }

  logout() {
    console.log(' Cerrando sesión...');
    this.authService.logout();
  }
}