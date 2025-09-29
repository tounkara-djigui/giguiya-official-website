import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sport',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
   attivita: any[] = [
    {
      titolo: "Calcio Integrato",
      introduzione: "La Squadra Mali Torino nasce come un progetto sportivo e sociale, con l'obiettivo di favorire l'inclusione, l'integrazione e la partecipazione attiva di cittadini stranieri e italiani attraverso il calcio. Più che una squadra, è una comunità multiculturale in movimento, uno spazio dove giovani e adulti possono condividere valori di rispetto, collaborazione e crescita personale..",
      descrizione: "Fondata a Torino, la Squadra Mali rappresenta oggi un punto di riferimento per molte persone di origine straniera residenti in città, in particolare della comunità maliana. Nel tempo, si sono uniti giocatori provenienti da diverse nazionalità tra cui Gambia, Costa d'Avorio, Senegal e altri Paesi dell'Africa occidentale, oltre a cittadini italiani, rafforzando così il messaggio di unità nella diversità. Il progetto è nato con l'intento di Promuovere lo sport come strumento educativo e di integrazione sociale; Creare un ambiente accogliente e sicuro per persone con background diversi; Favorire l'incontro tra cultura, lingue e storie personali; Contrastare l'esclusione sociale e costruire legami positivi con il territorio..",
      partecipazione_risultati: "Negli anni, la Squadra Mali ha partecipato a diversi tornei interculturali e sociali, tra cui il prestigioso Balon Mundial, un campionato internazionale di calcio per comunità migranti e gruppi misti. Nel 2025, con grande determinazione e spirito di squadra, abbiamo raggiunto un traguardo importante: l'iscrizione al campionato FIGC di Terza Categoria, entrando ufficialmente nel calcio dilettantistico federale. Questo risultato è motivo di orgoglio per tutti noi: testimonia il potenziale dello sport come veicolo di riscatto, coesione e visibilità sociale.",
      obietivi: "Il nostro sogno è continuare a crescere come squadra, ma soprattutto come comunità. Vogliamo, coinvolgere più giovani, anche italiani, in un progetto inclusivo; Costruire reti di collaborazione con scuole, enti locali, associazioni e centri sportivi; Offrire occasioni di formazione, eventi culturali e sportivi aperti a tutti; Diventare un modello positivo di integrazione attraverso lo sport, da promuovere a livello cittadino e nazionale.",
      unisci: "Se credi nello sport come strumento di cambiamento, se vuoi sostenere un progetto che unisce persone e crea ponti tra cultura, entra in contatto con noi. Cerchiamo volontari, sponsor, allenatori, ma soprattutto persone con voglia di fare squadra"
    }
  ];
   
      
  
}
