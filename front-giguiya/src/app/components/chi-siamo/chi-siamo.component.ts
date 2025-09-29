import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.css'
})
export class ChiSiamoComponent {

  missionItems: string[] = [
    "Promuovere la cultura e i valori del Mali attraverso eventi e collaborazioni istituzionali",
    "Favorire la solidarietà tra i maliani e gli amici del Mali in Italia",
    "Ridurre le difficoltà di integrazione dei nuovi arrivati tramite progetti di facilitazione linguitiche, preparazione della commissiione, scuola italiano, ecc.",
    "Realizzare progetti di cooperazione Italia-Mali per creare opportunità lavorative per i giovani",
    "Migliorare la qualità della vita delle comunità maliane, con focus su bambini, anziani e soggetti vulnerabili",
    "Promuovere i diritti umani, la legalità e la pace attraverso attività educative e culturali"
  ];
  activities = [
    { 
      title: "Festival Culturali", 
      description: "Organizzazione dei eventi culturali" 
    },
    { 
      title: "Integrazione Migranti", 
      description: "Incontri con nuovi arrivati e sostegno alla preparazione del commissione territoriale, Orientamento, inclusione sociale." 
    },
    { 
      title: "Progetti Educativi", 
      description: "Corsi contro la dispersione scolastica e qualsiasi forma di discriminazione" 
    },
    { 
      title: "Cooperazione Internazionale", 
      description: "Progetti in Mali per creare opportunità lavorative e ridurre l’emigrazione irregolare che porta la morte di tantissimi giovane del nostro paese: prima nel deserto e sul mare In cerca di raggiungere paesi europei.." 
    },
    { 
      title: "Sostegno Umanitario", 
      description: "Accoglienza, sostegno a distanza e aiuti per situazioni di emergenza." 
    },
    { 
      title: "Collaborazione Istituzionale", 
      description: "Partnership con Ambasciata del Mali, Comune di Torino e enti del terzo settore." 
    }
  ];
  organization = [
    { 
      title: "Assemblea dei Soci", 
      details: "Organo decisionale supremo. Approva bilanci, modifica lo statuto e elegge il Consiglio Direttivo. Si riunisce almeno una volta all'anno." 
    },
    { 
      title: "Consiglio Direttivo", 
      details: "Gestisce le attività quotidiane. Composto da 3 a 19 membri eletti per 2 anni. Coordina progetti e ammissione soci." 
    },
    { 
      title: "Presidente", 
      details: "Rappresentante legale. Convoca assemblee, sovrintende alle attività e firma accordi. Eletto dal Consiglio Direttivo." 
    },
    { 
      title: "Organo di Controllo", 
      details: "Verifica la correttezza amministrativa e la coerenza con le finalità ETS. Nominato dall’Assemblea quando richiesto." 
    }
  ];


}
