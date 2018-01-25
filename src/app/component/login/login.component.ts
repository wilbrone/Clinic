import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/authentication/login.service';
import {AppConst} from '../../constants/app-const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private password:string;
  private email2:string;
  private email:string;
  private physician:string[];

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;
  output:any;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  onLogin() {
  	console.log(this.credential)
    this.loginService.getToken(this.credential)


    
  }


  ngOnInit() {
  }

}
