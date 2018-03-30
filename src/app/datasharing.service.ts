import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasharingService {
  uploadData;

  constructor(public http: Http) {
      this.uploadData=[];
  }
setValue(value){
  this.uploadData=value;
}
getValue(){
  return this.uploadData;
}
}
