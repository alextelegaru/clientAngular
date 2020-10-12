import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL} from './global';
import { Observable } from 'rxjs';
import { User } from '../models/user';
//import { AnyARecord } from 'dns';

@Injectable()
export class UserService{

    public url:string;

    constructor( public _http: HttpClient ){
        this.url= GLOBAL.url;
    }


register(user): Observable<any>{
   let params = JSON.stringify(user);
   let headers = new HttpHeaders().set('Content-Type','aplication/json');

   return this._http.post(this.url+'register',params, {headers:headers});

}



}
