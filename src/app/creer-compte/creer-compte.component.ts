import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./creer-compte.component.scss']
})

// Validator pour comparer les emails
export function emailMatchValidator(control: AbstractControl) {
  const email = control.get('email')?.value;
  const confirmEmail = control.get('confirmEmail')?.value;
  if (email !== confirmEmail) {
    control.get('confirmEmail')?.setErrors({ emailMismatch: true });
  } else {
    return null;
  }
  return null;
}


export class CreerCompteComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      { validators: emailMatchValidator } // applique le validateur personnalisé
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted!', this.form.value);
    } else {
      console.log('Form invalid');
    }
  }
}

