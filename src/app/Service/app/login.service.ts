import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService} from '../../Service/core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  // url = environment.serverUrl;

  signin(login):Observable<any> {
      return this.http.post('login', login);
  }
  forgot(params):Observable<any> {
    return this.http.get('sessions/forgot_pwd?email_id='+params.email_id  + '&&phone_number=' + params.phone_number)
  }

  true():Observable<any> {
    return this.http.get('check_status')
  }

  forhot_change(id,val):Observable<any>{
    console.log(id,val)
    return this.http.put('reset_password/'+id,val)
  }

  editi_theme(id,val):Observable<any>{
    console.log(id,val)
    return this.http.put('users/'+id,val)
  }
}

// http://15.207.212.223:3005/api/v1/sessions/forgot_pwd?email_id=vinodhini1021@gmail.com&phone_number=8778841227
