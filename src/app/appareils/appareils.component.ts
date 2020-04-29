import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../share/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-appareils",
  templateUrl: "./appareils.component.html",
  styleUrls: ["./appareils.component.scss"],
})
export class AppareilsComponent implements OnInit {
  title = "Gestion d'appareils";

  @Input() appareilId:number;
  @Input() appareilName:string;
  @Input() isActif:string= "Eteint";

  isAuth: boolean = false;

  constructor(private auth: AuthService, private router:Router) {
    //this.appareilName ="";
  }

  onAllumer(){
    if(this.isAuth){
      this.isActif = 'Allumer';
    }else{
      this.router.navigateByUrl('auth');
    }

  }

  ngOnInit(): void {
    this.isAuth = this.auth.getAuthStatut();
  }
}
