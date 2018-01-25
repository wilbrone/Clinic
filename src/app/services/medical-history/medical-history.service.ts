import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MedicalHistoryService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  // addMedicalHistory(vitals: any) {
  // 	let url = this.serverPath+"/api/history/add/";

  // 	let tokenHeader = new Headers({
  // 		'Content-Type' : 'application/json',
  // 		'Authorization' : 'JWT '+localStorage.getItem("token")
  // 	});
  // 	return this.http.post(url, JSON.stringify(vitals), {headers: tokenHeader});
  // }

  getMedicalHistories(patient:any) {
  	let url = this.serverPath+"/api/history/medical_history/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  // getMedicalHistoryDetail(id:number) {
  // 	let url =this.serverPath+"/api/history/"+id;
  //   let headers = new Headers ({
  //     'Content-Type': 'application/json',
  //     'Authorization' : 'JWT '+localStorage.getItem("token")
  //   });

  //   return this.http.get(url, {headers: headers});
  // }

  // putMedicalHistoryDetail(vitals:any) {
  //   let url =this.serverPath+"/api/history/"+vitals.id;
  //   let headers = new Headers ({
  //     'Content-Type': 'application/json',
  //     'Authorization' : 'JWT '+localStorage.getItem("token")
  //   });

  //   return this.http.put(url, JSON.stringify(vitals) , {headers: headers});
  // }

  // deleteMedicalHistoryDetail(id:number) {
  //   let url =this.serverPath+"/api/history/"+id;
  //   let headers = new Headers ({
  //     'Content-Type': 'application/json',
  //     'Authorization' : 'JWT '+localStorage.getItem("token")
  //   });

  //   return this.http.delete(url, {headers: headers});
  // }

  addImmunization(patient: any) {
  	let url = this.serverPath+"/api/history/immunization/add/";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'Authorization' : 'JWT '+localStorage.getItem("token")
  	});
  	return this.http.post(url, JSON.stringify(patient), {headers: tokenHeader});
  }

  getImmunizations(patient:any) {
  	let url = this.serverPath+"/api/history/immunization/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getImmunizationDetail(id:number) {
  	let url =this.serverPath+"/api/history/immunization/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  putImmunizationDetail(vitals:any) {
    let url =this.serverPath+"/api/history/immunization/"+vitals.id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.put(url, JSON.stringify(vitals) , {headers: headers});
  }

  deleteImmunizationDetail(id:number) {
    let url =this.serverPath+"/api/history/immunization/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.delete(url, {headers: headers});
  }

  getSeverityOfPain() {
    let url = this.serverPath+"/api/history/severity_of_pain/";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  getOTCChoices() {
    let url = this.serverPath+"/api/history/choices/";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  getStatuses() {
    let url = this.serverPath+"/api/history/statuses/";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

  addMedication(medication: any) {
  	let url = this.serverPath+"/api/history/add_meds/";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'Authorization' : 'JWT '+localStorage.getItem("token")
  	});
  	return this.http.post(url, JSON.stringify(medication), {headers: tokenHeader});
  }

  addHPI(hpi: any) {
    let url = this.serverPath+"/api/history/add_hpi/";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });
    return this.http.post(url, JSON.stringify(hpi), {headers: tokenHeader});
  }

  

  getMedications(patient: any) {
  	let url = this.serverPath+"/api/history/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getMedicationDetail(id:number) {
  	let url =this.serverPath+"/api/history/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  putMedicationDetail(medication:any) {
    let url =this.serverPath+"/api/history/"+medication.id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.put(url, JSON.stringify(medication) , {headers: headers});
  }

  deleteMedicationDetail(id:number) {
    let url =this.serverPath+"/api/history/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.delete(url, {headers: headers});
  }

}
