import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PhysicalExamService {

	private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  getSkinPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/skin/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getHeadPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/head/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getEarsPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/ears/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getEyesPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/eyes/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNosePhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/nose/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getThroatPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/throat/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNeckPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/neck/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNodesPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/nodes/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getLungsPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/lungs/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getCVPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/cv/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getBreastsPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/breasts/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getChestPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/chest/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getHeartPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/heart/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getAbdomenPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/abdomen/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getBackSpinePhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/back_spine/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getExtremetiesPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/extremeties/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGenetaliaPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/genetalia/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getRectalPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/rectal/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNeurologicPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/Neurologic/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getCNPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/cn/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getMotorPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/motor/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGaitPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/gait/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getSpacicityPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/spacicity/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getBulkPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/bulk/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGeneralAppearancePhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/general_appearance/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addPhysicalExam(physical_exam:any) {
  	let url = this.serverPath+"/api/physical_exam/add/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(physical_exam), {headers: headers});
  }

  getPhysicalExams() {
  	let url = this.serverPath+"/api/physical_exam/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getPhysicalExamDetail(id:number) {
  	let url = this.serverPath+"/api/physical_exam/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }



}
