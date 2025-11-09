import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ]
})
export class ResetPage {
  private authService = inject(AuthService);
  
  email: string = '';

  async resetPassword() {
    console.log('📧 Email ingresado:', this.email);
    
    if (!this.email || this.email.trim() === '') {
      alert('⚠️ Por favor ingresa tu correo electrónico');
      return;
    }
    
    try {
      await this.authService.resetPassword(this.email.trim());
    } catch (error) {
      console.error('Error:', error);
    }
  }
}