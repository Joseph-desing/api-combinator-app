import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 
import { AuthService } from '../../services/auth';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, IonicModule, RouterLink] 
})
export class SignupPage {
  authService = inject(AuthService);

  email: string = '';
  password: string = '';

  async register() {
    console.log(' Botón register presionado');
    console.log(' Email ingresado:', this.email);
    console.log(' Password ingresado:', this.password);

    if (!this.email || !this.password) {
      console.log(' Validación falló: campos vacíos');
      alert(' Por favor completa todos los campos');
      return;
    }

    if (this.password.length < 6) {
      console.log(' Validación falló: password muy corta');
      alert(' La contraseña debe tener al menos 6 caracteres');
      return;
    }

    console.log(' Iniciando registro...');

    try {
      await this.authService.register(this.email, this.password);
      console.log(' Registro completado');
    } catch (error) {
      console.error(' Error capturado:', error);
    }
  }
}
