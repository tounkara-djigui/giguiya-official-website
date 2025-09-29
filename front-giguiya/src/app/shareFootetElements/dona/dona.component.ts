import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DonaOra } from '../../../models/donazione';

@Component({
  selector: 'app-dona',
  imports: [CommonModule],
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css'
})
export class DonaComponent {
  @Input() donaData!: DonaOra; 
  
  nostraCausa: string = 'Il tuo aiuto può fare la differenza. Sostieni i nostri progetti per l’inclusione e la cultura!'
  mostraDonazione: boolean = false;


toggloDonazione(): void{
this.mostraDonazione = !this.mostraDonazione;
}
}