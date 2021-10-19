import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
//import {myValidations} from '../../utils/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  botonDinamico = "boton botonDeshabilitado";
  matchPass = null;
  constructor(private formBuilder: FormBuilder) {
    this.construirFormulario();
  }

  ngOnInit(): void {
  }

  private construirFormulario() {

    this.formLogin = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.maxLength(45)]],
      apellidos: ['', [Validators.required, Validators.maxLength(45)]],
      correo: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPass: ['', [Validators.required, Validators.minLength(6)]]
    })

    // this.formLogin = new FormGroup({
    //   nombres: new FormControl('', [Validators.required]),
    //   apellidos: new FormControl('', [Validators.required]),
    //   correo: new FormControl('', [Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   repeatPass: new FormControl('', [Validators.required, Validators.minLength(6)])
    // })

    this.formLogin.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      if (this.formLogin.valid) {
        //console.log(value);
        //console.log(this.formLogin.controls['nombres'].value);
        //this.formLogin.reset();
        let pass1 = this.formLogin.controls['password'].value;
        let pass2 = this.formLogin.controls['repeatPass'].value;
        if(pass1 == pass2){
          this.matchPass = true;
          this.botonDinamico = "boton botonSolido";
        }

        else{
          this.matchPass = false;
          this.botonDinamico = "boton botonDeshabilitado";
        }
      }
      else {
        this.botonDinamico = "boton botonDeshabilitado";
      }
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    const value = this.formLogin.value;

    if (this.formLogin.valid && this.matchPass == true) {
      this.botonDinamico = "boton botonSolido";
      console.log(value);
      console.log(this.formLogin.controls['nombres'].value);
      this.formLogin.reset();
    }
    else {
      this.botonDinamico = "boton botonDeshabilitado";
      this.formLogin.markAllAsTouched;
    }
  }

//**********Validando repetir contraseña***************/
  get nombresCampo() {
    return this.formLogin.get('nombres');
  }

  validarNombres() {
    if(this.nombresCampo.touched){
      if (this.nombresCampo.valid) {
        return "inputValid";
      }
      else {
        return "inputInvalid";
      }
    }
    return null;
  }

//**********Validando repetir contraseña***************/
  get apellidosCampo() {
    return this.formLogin.get('apellidos');
  }

  validarApellidos() {
    if(this.apellidosCampo.touched){
      if (this.apellidosCampo.valid) {
        return "inputValid";
      }
      else {
        return "inputInvalid";
      }
    }
    return null;
  }
//**********Validando repetir contraseña***************/
  get correoCampo() {
    return this.formLogin.get('correo');
  }

  get validarCorreoCampo() {
    if(this.correoCampo.touched){
      if(this.correoCampo.valid){
        return "inputValid";
      }
      else{
        return "inputInvalid";
      }
    }
    return "";
  }

//**********Validando repetir contraseña***************/
  get passCampo() {
    return this.formLogin.get('password');
  }

  get validarPassCampo() {
    if(this.passCampo.touched){
      if(this.passCampo.valid){
        return "inputValid";
      }
      else{
        return "inputInvalid";
      }
    }
    return "";
  }

//**********Validando repetir contraseña***************/
  get repPassCampo() {
    return this.formLogin.get('repeatPass');
  }

  get validarRepassCampo() {
    if(this.repPassCampo.dirty){
      if(this.repPassCampo.valid && this.matchPass == true){
        return "inputValid";
      }
      else{
        return "inputInvalid";
      }
    }
    return "";
  }
}