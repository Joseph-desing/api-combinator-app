import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  
  async register(email: string, password: string) {
    try {
      const credential = await createUserWithEmailAndPassword(
        this.auth, 
        email, 
        password
      );
      console.log(' Usuario registrado:', credential.user.email);
      alert('¡Cuenta creada exitosamente!\n\nUsuario: ' + credential.user.email);
      this.router.navigate(['/home']);
      return credential;
    } catch (error: any) {
      console.error(' Error al registrar:', error);
      this.handleError(error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const credential = await signInWithEmailAndPassword(
        this.auth, 
        email, 
        password
      );
      console.log('Usuario logueado:', credential.user.email);
      alert('¡Bienvenido de nuevo!\n\nUsuario: ' + credential.user.email);
      this.router.navigate(['/home']);
      return credential;
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      this.handleError(error);
      throw error;
    }
  }

  // Cerrar sesión
  async logout() {
    try {
      await signOut(this.auth);
      console.log(' Sesión cerrada');
      alert('Sesión cerrada exitosamente');
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error(' Error al cerrar sesión:', error);
      this.handleError(error);
    }
  }

  
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      console.log(' Correo de recuperación enviado a:', email);
      alert(' Se ha enviado un correo para recuperar tu contraseña a:\n\n' + email);
    } catch (error: any) {
      console.error(' Error al enviar correo:', error);
      this.handleError(error);
      throw error;
    }
  }

  
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  
  private handleError(error: any) {
    let message = 'Ha ocurrido un error desconocido';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        message = ' Este correo ya está registrado.\n\nIntenta iniciar sesión en lugar de crear una cuenta nueva.';
        break;
      case 'auth/invalid-email':
        message = ' El correo electrónico no es válido.\n\nVerifica que esté escrito correctamente.';
        break;
      case 'auth/weak-password':
        message = ' La contraseña es demasiado débil.\n\nDebe tener al menos 6 caracteres.';
        break;
      case 'auth/user-not-found':
        message = ' No existe una cuenta con este correo.\n\n¿Quieres crear una cuenta nueva?';
        break;
      case 'auth/wrong-password':
        message = ' Contraseña incorrecta.\n\nIntenta de nuevo.';
        break;
      case 'auth/invalid-credential':
        message = ' Credenciales inválidas.\n\nVerifica tu correo y contraseña.';
        break;
      case 'auth/too-many-requests':
        message = ' Demasiados intentos fallidos.\n\nEspera un momento e intenta más tarde.';
        break;
      case 'auth/network-request-failed':
        message = ' Error de conexión.\n\nVerifica tu conexión a internet.';
        break;
      default:
        message = ` Error: ${error.message}`;
    }
    
    alert(message);
  }
}