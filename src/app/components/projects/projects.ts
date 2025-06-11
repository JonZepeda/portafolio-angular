import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
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
    ]
}
