import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DiagnosesService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  addSurgHistory(surg_history:any) {
    let url = this.serverPath+"/api/diagnoses/add_surg_history/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(surg_history), {headers: headers});
  }

  getSurgHistories(patient:any) {
    let url = this.serverPath+"/api/diagnoses/get_surg_history/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getConditions() {
    let url = this.serverPath+"/api/diagnoses/surg_conditions/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addDiagnosis(diagnosis:any) {
  	let url = this.serverPath+"/api/diagnoses/add_diagnosis/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(diagnosis), {headers: headers});
  }



  getDiagnoses(patient:any) {
  	let url = this.serverPath+"/api/diagnoses/get_diagnoses/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }

  getDiagnosesDetail(id:number) {
  	let url = this.serverPath+"/api/diagnoses/diagnosis/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addDifferentialDiagnosis(differential_diagnosis:any) {
  	let url = this.serverPath+"/api/diagnoses/add_differential_diagnosis/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(differential_diagnosis), {headers: headers});
  }

  getDifferentialDiagnoses() {
  	let url = this.serverPath+"/api/diagnoses/get_differential_diagnoses/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getDifferentialDiagnosesDetail(id:number) {
  	let url = this.serverPath+"/api/diagnoses/differential_diagnosis/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addChiefComplaint(chief_complaint:any) {
  	let url = this.serverPath+"/api/diagnoses/add_chief_complaint/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(chief_complaint), {headers: headers});
  }

  getChiefComplaints() {
  	let url = this.serverPath+"/api/diagnoses/get_chief_complaints/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getChiefComplaintsDetail(id:number) {
  	let url = this.serverPath+"/api/diagnoses/chief_complaint/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addPlan(plan:any) {
  	let url = this.serverPath+"/api/diagnoses/add_plan/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(plan), {headers: headers});
  }

  getPlans() {
  	let url = this.serverPath+"/api/diagnoses/get_plans/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getPlanDetail(id:number) {
  	let url = this.serverPath+"/api/diagnoses/plan/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getICD11Codes() {
  	let url = this.serverPath+"/api/diagnoses/icd11_codes/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }



}
