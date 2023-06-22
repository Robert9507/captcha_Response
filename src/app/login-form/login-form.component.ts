import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  protected aFormGroup: FormGroup;
  username: string = '';
  password: string = '';
  siteKey:string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.aFormGroup = new FormGroup({});
  }
  
  ngOnInit() {
    // Aquí puedes implementar la lógica de validación del formulario
    // Por ejemplo, puedes verificar si las credenciales son válidas
    // y redirigir al usuario a la página de inicio si el login es exitoso
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/']);
    } else {
      alert('Credenciales inválidas');
    }
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
