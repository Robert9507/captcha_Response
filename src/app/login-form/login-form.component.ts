import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  username: string = '';
  password: string = '';
  captchaResponse: string = '';

  constructor(private router: Router) {

  }

  onSubmit() {
    // Aquí puedes implementar la lógica de validación del formulario
    // Por ejemplo, puedes verificar si las credenciales son válidas
    // y redirigir al usuario a la página de inicio si el login es exitoso
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}
