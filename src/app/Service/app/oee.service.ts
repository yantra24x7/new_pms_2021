import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class OEEService { 

 
  constructor(private http:HttpClient,private token:TokenService) { }


  tenantId = this.token.getTenantID();

  alarm_history(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  shift(tenantId):Observable<any> {
    return this.http.get('shifttransactions?shift_id='+tenantId)
  }
    shiftidentity(tenantId):Observable<any>{
    return this.http.get('shifts?tenant_id='+tenantId)
  }

  table_shift(register,new_date,new_date1,tenant,report_type):Observable<any>  {

    console.log(tenant)
    return this.http.get('machines/reports_page?tenant_id='+tenant + '&&start_date=' + new_date + '&&end_date=' + new_date1 +'&&machine_id=' + register.machine_id + '&&shift_id=' + register.shift_id + '&&report_type=' + report_type )
  }

}