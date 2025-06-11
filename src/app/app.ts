import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,Navbar], // 👈 Agrégalo aquí
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
