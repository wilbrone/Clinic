import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class FamilyHistoryService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  addFamilyHistory(family_history:any) {
  	let url = this.serverPath+"/api/family_history/add/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(family_history), {headers: headers});
  }

  getFamilyHistories(patient:any) {
  	let url = this.serverPath+"/api/family_history/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getFamilyHistoryChoices() {
  	let url = this.serverPath+"/api/family_history/choices/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getFamilyHistoryDetail(id:any) {
  	let url = this.serverPath+"/api/family_history/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

}
