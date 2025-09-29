import { Injectable } from '@angular/core';
import {credenziali, } from '../../environments/credenziali';
import { User } from '../../models/utenti';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    users:User[] =[
      {
        email: credenziali.credential.email,
         password: credenziali.credential.password,
         ruolo:'admin',
    }]; 
    //Autenticazione per guards
  isAuthenticated(): boolean{
  return this.currentUser !== null; 
  }

    private currentUser: User | null = null;
    constructor() {}

    //fase di login
    login(email: string, password: string): boolean {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        
        this.currentUser = user; 
        return true;
      }
      return false;
  }

    //logout funzione.
    logout() {
      this.currentUser = null; 
    }
  }
