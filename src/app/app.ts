import { Component } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Hero } from './hero/hero';
import { Services } from './services/services';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Services, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
