import { Component, Input } from '@angular/core';
import { Contatti } from '../../../models/contatti';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-contatti',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {
  @Input() contattiData!: Contatti; // Input obbligatorio

  // Metodo per formattare il telefono (esempio avanzato)
  formatPhone(phone: string): string {
    return phone.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
  }
}