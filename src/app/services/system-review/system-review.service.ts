import { Injectable } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SystemReviewService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }

  getHematologicSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/hematologic/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getEndocrineSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/endocrine/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getPsychiatricSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/psychiatric/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNeurologicSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/neurologic/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getMusculoskeletalSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/musculoskeletal/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGenitalTractFemaleSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/genital_tract_female/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGenitalTractMaleSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/genital_tract_male/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getUrinarySystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/urinary/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGastroIntestinalSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/gastrointestinal/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getCardiovascularSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/cardiovascular/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getPulmonarySystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/pulmonary/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getBreastsSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/breasts/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getLymphaticsSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/lymphatics/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getNeckSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/neck/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  
  getMouthAndThroatSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/mouth_and_throat/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getEarsSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/ears/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getEyesSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/eyes/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getSkinSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/skin/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getGeneralSystemReview() {
  	let url = this.serverPath+"/api/review_of_systems/general/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  addSystemReview(review_of_systems:any) {
  	let url = this.serverPath+"/api/review_of_systems/add/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.post(url, JSON.stringify(review_of_systems), {headers: headers});
  }

  getSystemReviews() {
  	let url = this.serverPath+"/api/review_of_systems/get/";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

  getSystemReviewDetail(id:number) {
  	let url = this.serverPath+"/api/review_of_systems/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'Authorization' : 'JWT '+localStorage.getItem("token")
    });

    return this.http.get(url, {headers: headers});
  }

}
