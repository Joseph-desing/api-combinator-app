import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // 👈 IMPORTANTE
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, IonicModule, RouterLink] 
})
export class LoginPage {
  private authService = inject(AuthService);
  
  email: string = '';
  password: string = '';

  async login() {
    console.log('🔵 Botón de inicio de sesión presionado');
    console.log('📧 Email:', this.email);
    console.log('🔑 Password:', this.password);

    if (!this.email || !this.password) {
      alert('⚠️ Por favor completa todos los campos');
      return;
    }

    try {
      console.log('🔄 Intentando iniciar sesión con:', this.email);
      await this.authService.login(this.email, this.password);
      console.log('✅ Inicio de sesión exitoso');
    } catch (error) {
      console.error('❌ Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Revisa tus credenciales o conexión.');
    }
  }
}
