import { Component, OnInit } from '@angular/core';
import { Appareil, AppareilService } from '../share/appareils/appareil.service';
import { AuthService } from '../share/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareils-list',
  templateUrl: './appareils-list.component.html',
  styleUrls: ['./appareils-list.component.scss']
})
export class AppareilsListComponent implements OnInit {

  appareils: Appareil[];
  app:Appareil;

  constructor(private appService:AppareilService,
     private auth: AuthService,
     private router: Router) { }

  ngOnInit(): void {
    this.appareils = this.appService.getAllAppareils();

   // delete this.appareils[0];
    this.app = {
      id:this.appareils.length +1,
      name:'',
      isActif:"False",
    }
  }

  addAppareil(){
    if(this.auth.getAuthStatut()){
      this.appService.addAppreils(this.app).then((message)=>{
        alert(message);
      })
    }else{
      this.router.navigateByUrl('auth');
    }
  }

}
