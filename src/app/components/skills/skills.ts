import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  habilidades = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
    'Angular', 'Bootstrap', 'Node.js', 'MySQL'
  ];
}

