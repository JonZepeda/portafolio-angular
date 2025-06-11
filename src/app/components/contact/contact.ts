import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      mensaje: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid){
      alert('Por favor completa todos los campo correctamente.')
    }
    console.log(this.form.value);
    alert(`Gracias por tu mensaje , ${this.form.value.nombre}`)
    this.form.reset();
  }


}
