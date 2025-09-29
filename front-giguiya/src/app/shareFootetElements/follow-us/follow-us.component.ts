import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FollowUs } from '../../../models/followUs';
import { FaIconComponent} from '@fortawesome/angular-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-follow-us',
  standalone:true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './follow-us.component.html',
  styleUrl: './follow-us.component.css',
})
 

export class FollowUsComponent {
  @Input() followUsData!: FollowUs; // Input obbligatorio dal parent
  icons = {
    facebook: faFacebookF,
    twitter: faTwitter,
    instagram: faInstagram,
    linkedin: faLinkedinIn,
    
  };
  // Metodo aggiuntivo per sicurezza (opzionale)

  hasSocialLinks(): boolean {
    return !!(
      this.followUsData?.socialLinks.facebook ||
      this.followUsData?.socialLinks.twitter ||
      this.followUsData?.socialLinks.instagram||
      this.followUsData?.socialLinks?.linkedin
    )
  }
}

