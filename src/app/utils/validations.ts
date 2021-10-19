import { AbstractControl } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';

export class myValidations {
    static passwordCheck(control1: AbstractControl, control2: AbstractControl) {
        const pass1 = control1.value;
        const pass2 = control2.value;
        if (pass1 != pass2) {
            return { passwordCheck: true };
        }
        return null;
    }

    static passCheck(control: AbstractControl) {
        const password: string = control.get('password').value;
        const repeatPass: string = control.get('repeatPass').value;

        if (password !== repeatPass) {

            return { passCheck: true };
        }

        return { passCheck: null };
    }
}

