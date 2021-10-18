import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.construirFormulario();
  }

  ngOnInit(): void {
  }

  private construirFormulario() {
    
  this.formLogin = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.maxLength(45)]],
      apellidos: ['', [Validators.required, Validators.maxLength(45)]],
      correo: ['', [Validators.required, Validators.email]],
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

    // this.formLogin.valueChanges
    // .pipe(debounceTime(500))
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  enviar(event: Event){
    event.preventDefault();
    const value = this.formLogin.value;
    if(this.formLogin.valid){
      console.log(value);
      // const name = this.formLogin.get('name');
      // console.log(name.value);
    }
    else{
      console.log("funciona");
      this.formLogin.markAllAsTouched;
    }
  }

  get nombresCampo(){
    return this.formLogin.get('nombres');
  }

  get apellidosCampo(){
    return this.formLogin.get('apellidos');
  }

  get correoCampo(){
    return this.formLogin.get('correo');
  }

  get passCampo(){
    return this.formLogin.get('password');
  }

  get repPassCampo(){
    return this.formLogin.get('repeatPass');
  }
}
