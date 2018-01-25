import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SocialHistoryService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  addSocialHistory(social_history:any) {
  	let url = this.serverPath+"/api/social_history/add/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(social_history), {headers: headers});
  }

  getSocialHistories(patient:any) {
  	let url = this.serverPath+"/api/social_history/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getSocialHistoryChoices() {
  	let url = this.serverPath+"/api/social_history/choices/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getSocialHistoryDetail(id:any) {
  	let url = this.serverPath+"/api/social_history/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

}
