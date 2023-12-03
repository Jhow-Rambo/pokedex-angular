import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ InputComponent, ButtonComponent, ReactiveFormsModule ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    loginForm: FormGroup;

    usernameError: string = '';
    passwordError: string = '';

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    updateUsername(username: string): void {
        const usernameControl = this.loginForm.get('username');
        if (usernameControl) {
            usernameControl.setValue(username);
        }
    }

    updatePassword(password: string): void {
        const passwordControl = this.loginForm.get('password');
        if (passwordControl) {
            passwordControl.setValue(password);
        }
    }

    isUserNameValid(userName: string): boolean {
        return userName === 'admin' ? true : false;
    }

    isPasswordValid(password: string): boolean {
        return password === 'admin' ? true : false;
    }

    generateUsernameError(username: string): void {
        this.usernameError =
            username !== 'admin' && username !== '' ? 'Usuário inválido' :
            !username ? 'Campo requerido' :
            '';
    }

    generatePasswordError(password: string): void {
        this.passwordError =
            password !== 'admin' && password !== '' ? 'Senha inválida' :
            !password ? 'Campo requerido' :
            '';
    }

    submitForm() {
        const { username, password } = this.loginForm.value;

        this.generatePasswordError(password)
        this.generateUsernameError(username)

        if (this.loginForm.valid) {
            if (this.isUserNameValid(username) && this.isPasswordValid(password)) {
                this.router.navigate(['/pokemons']);
            }
        }
    }
}
