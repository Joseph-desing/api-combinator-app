import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          console.log(' Usuario autenticado:', user.email);
          resolve(true);
        } else {
          console.log(' No autenticado. Redirigiendo a /login');
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
