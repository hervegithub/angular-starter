import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth=false

  constructor() { }

  onAuth(login:string, password:string){
    let promise = new Promise ((resolve,reject) =>{

      if (login === "login" && password === "password") {

        this.isAuth = true
        resolve('vous êtes connecté !!');

      }else{

        reject('Login ou mot de passe erroné !!');
      }

    })
    return promise;
  }

  onDismiss(){
    this.isAuth= false;
  }

  getAuthStatut(){
    return this.isAuth;
  }
}
