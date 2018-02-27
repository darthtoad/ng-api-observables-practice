import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  url = "http://api.wordnik.com/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  constructor(private http:Http) { }

  getWord(): Observable<string> {
    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.word;
  }
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
