import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Eventi } from '../../../models/eventi';
import { EventiService } from '../../services/eventi.service';

@Component({

  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    eventi: Eventi[] = []; 
  eventiForm: FormGroup;

  constructor(private fb: FormBuilder, private eventiService: EventiService) {
    this.eventiForm = this.fb.group({
      titolo: ['', Validators.required],
      descrizione: ['', Validators.required],
      luogo: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  onSubmit() {

  }
}
