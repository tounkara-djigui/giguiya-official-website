import { Component } from '@angular/core';
import { Sviluppatori } from '../../../models/sviluppatori';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-svilippatori',
  imports: [FaIconComponent],
  templateUrl: './svilippatori.component.html',
  styleUrl: './svilippatori.component.css'
})
export class SvilippatoriComponent {
  nomeSviluppi: Sviluppatori ={
    nomi: " Djigui Tounkara",
    linkSito: 'https://github.com/tounkara-djigui',
  };
icons={
github: faGithub, 
}






}
