import { NgForOf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // 👈 asegúrate de incluir esto
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] //
})
export class Home implements AfterViewInit {

  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = document.querySelector(href!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  habilidades = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
    'Angular', 'Bootstrap', 'Node.js', 'MySQL'
  ];

  proyectos = [
    {
      titulo: 'Proyecto No. 1',
      descripcion: 'Descripción breve del proyecto 1 y tecnologías utilizadas.',
      enlace: '#'
    },
    {
      titulo: 'Proyecto No. 2',
      descripcion: 'Descripción breve del proyecto 2 y tecnologías utilizadas.',
      enlace: '#'
    },
    {
      titulo: 'Proyecto No. 3',
      descripcion: 'Descripción breve del proyecto 3 y tecnologías utilizadas.',
      enlace: '#'
    }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], // ✅ corregido
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    console.log(this.form.value);
    alert(`Gracias por tu mensaje, ${this.form.value.nombre}`);
    this.form.reset();
  }
}

