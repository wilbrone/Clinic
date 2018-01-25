import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class VitalsService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  addVitals(vitals: any) {
  	let url = this.serverPath+"/api/vitals/add/";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'Authorization' : 'JWT '+localStorage.getItem("token")
  	});
  	return this.http.post(url, JSON.stringify(vitals), {headers: tokenHeader});
  }

  getVitals() {
  	let url = this.serverPath+"/api/vitals/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getVitalsDetail(id:number) {
  	let url =this.serverPath+"/api/vitals/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  putVitalsDetail(vitals:any) {
    let url =this.serverPath+"/api/vitals/"+vitals.id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.put(url, JSON.stringify(vitals) , {headers: headers});
  }

  deleteVitalsDetail(id:number) {
    let url =this.serverPath+"/api/vitals/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.delete(url, {headers: headers});
  }

}
