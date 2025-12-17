import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {
  title = 'Monther Nabulsi Portfolio';
}