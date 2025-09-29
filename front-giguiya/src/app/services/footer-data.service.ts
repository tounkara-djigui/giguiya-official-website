
import { Injectable } from '@angular/core';
import { Contatti } from '../../models/contatti';
import { FollowUs } from '../../models/followUs';
import { ChiSiamo } from '../../models/chiSiamo';
import { DonaOra } from '../../models/donazione';
import { environment1 } from '../../environments/environment1';


@Injectable({
  providedIn: 'root'
})
export class FooterDataService {
  contatti?: Contatti;
  followUs?: FollowUs;
  donaOra?: DonaOra; 
  chisSiamo?: ChiSiamo;

      getContatti(){
        return environment1.Footer.Contatti;
      }

      getFollowElement(){
        return environment1.Footer.FollowUs;
      }

     getDonazione(){
      return environment1.Footer.DonaOra; 
     }

    
 
}


