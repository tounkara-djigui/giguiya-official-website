import { Component, OnInit } from '@angular/core';
import { FooterDataService } from '../../services/footer-data.service';
import { ContattiComponent } from "../../shareFootetElements/contatti/contatti.component";
import { SvilippatoriComponent } from "../../shareFootetElements/svilippatori/svilippatori.component";
import { FollowUsComponent } from '../../shareFootetElements/follow-us/follow-us.component';
import { DonaComponent } from '../../shareFootetElements/dona/dona.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContattiComponent, SvilippatoriComponent, FollowUsComponent, DonaComponent,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit{
  contattiData: any; 
  followUsData:any;
  donaData1:any; 
  svilupatori:any; 
  currentYear: any; 
  siteName:string = 'Giguiya'; 

  constructor(private footerDataService: FooterDataService){
   
    this.currentYear = new Date().getFullYear();
  }
  
  ngOnInit(): void {
  this.contattiData = this.footerDataService.getContatti();
  this.followUsData = this.footerDataService.getFollowElement();
  this.donaData1 = this.footerDataService.getDonazione(); 

  }

}
 