import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { OEEService} from '../../Service/app/oee.service';
import { DatePipe } from '@angular/common';

import { untilDestroyed } from 'ngx-take-until-destroy';
import { ExportService } from '../shared/export.service';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit {

  displayedColumns: string[] = ['posi','position', 'name', 'weight', 'symbol','alarmtype','alarmnumber','alarmmessage','alarmtime','produced','rejecet','rework','avail','perfor','quali','oee'];
  dataSource = new MatTableDataSource();
  startDate:any;
  new_date:any;
  r_type1:any;
  new_date1:any;
  endDate:any;
    show: boolean=false;
  login:FormGroup;
  machine_response: any=[];
  shift_response: any;
  tenant: any;
  myLoader = false;
  operator_response: any;
  valuesplit:any;
  alarmreport:any=[];
  get_report:any;
  export_excel: any[] = [];
  constructor(private datepipe: DatePipe,private nav:NavbarService,private service:OEEService,private fb:FormBuilder,private exportService: ExportService) { 
    this.nav.show()
    this.tenant=localStorage.getItem('tenant_id')

  }
  ngOnInit() {
    this.login = this.fb.group({
      machine_id:["",Validators.required],
      shift_id:["",Validators.required],
      start_date:["",Validators.required],
      end_date:["",Validators.required],
    })
    this.service.alarm_history(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.machine_response=res;
    })

    this.service.shiftidentity(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
      this.service.shift(res.id).subscribe(res => {
       this.shift_response=res; 
      })
    })
  
  }
  

  export(){


    this.myLoader = true;
    // this.alarmreport = res;
    console.log(this.alarmreport)

     this.myLoader = false;
     console.log(this.alarmreport);
     if(this.alarmreport.length==0){
       console.log(this.alarmreport)
       Swal.fire('Exporting!, No Data Found')
     }else{
     for(var i=0;i<this.alarmreport;i++){
       this.export_excel.push({
          "S.no": i+1,
          "Date": this.alarmreport[i].date || '---',
          "Shift Num": this.alarmreport[i].shift_num|| '---',
          "Machine Name":this.alarmreport[i].machine_name || '---',
          "Part Name": this.alarmreport[i].part_name || '---',
          "Part No": this.alarmreport[i].part_no || '---',
          "Opeartor Name": this.alarmreport[i].operator_name|| '---',
           "Opeartor No": this.alarmreport[i].opeartor_no || '---',
           "Hourly Target": this.alarmreport[i].Hourly.Target || '---',
           "Hour1": this.alarmreport[i].Hour1.Target || '---',
           "Hour2": this.alarmreport[i].Hour2.Target || '---',
           "Hour3": this.alarmreport[i].Hour3.Target || '---',
           "Hour4": this.alarmreport[i].Hour4.Target || '---',
           "Plann.Qty": this.alarmreport[i].Plann.Qty || '---',
           "Actual Qty": this.alarmreport[i].Actual .Qty || '---',
           "Utilization": this.alarmreport[i].utilization|| '---',


       });
     }
       this.exportService.exportAsExcelFile(this.export_excel, 'hourwise Report Details');
   }
 
 
  }
 
getsplit(val){
   this.valuesplit = val;
   console.log(this.valuesplit)
}


loginfunc(){
  this.r_type1 = "Shiftwise";
  console.log(this.login.value)
  this.new_date = new DatePipe('en-US').transform(this.login.value.start_date, 'dd-MM-yyyy');
  this.new_date1 = new DatePipe('en-US').transform(this.login.value.end_date, 'dd-MM-yyyy');
  console.log(this.r_type1);
  console.log(this.new_date,this.new_date1)
  this.service.table_shift(this.login.value, this.new_date,this.new_date1,this.tenant,this.r_type1).subscribe(res =>{
    console.log(res);
     this.alarmreport = res;
    // this.myLoader = false;
     this.dataSource=new MatTableDataSource(this.alarmreport)

  })

}

ngOnDestroy(){

} 
}