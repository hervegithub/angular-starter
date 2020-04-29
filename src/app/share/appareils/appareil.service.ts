import { Injectable } from '@angular/core';

export interface Appareil {
  id:number,
  name:string,
  isActif:string,
}

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils:Appareil[] ;

  constructor() {
    this.appareils = [
      {
        id: 1,
        name: "Télévision",
        isActif: "Eteint",
      },
      {
        id: 2,
        name: "Machine à laver",
        isActif: "Eteint",
      },
      {
        id: 3,
        name: "Radio",
        isActif: "Eteint",
      },
    ];
  }

  getAllAppareils(){
    return this.appareils;
  }

  addAppreils(appreil:Appareil){
    let promise = new Promise((resolve, rejet)=>{
      this.appareils.push(appreil);
      resolve('Appreil ajouté avec succes');
    });
    return promise;
  }


}
