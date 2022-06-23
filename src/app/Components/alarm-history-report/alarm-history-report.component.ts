import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { AlarmHistoryService} from '../../Service/app/alarm-history.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { HttpClient } from '@angular/common/http';
import { ExportService } from '../shared/export.service';
import { DatePipe } from '@angular/common';


import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-alarm-history-report',
  templateUrl: './alarm-history-report.component.html',
  styleUrls: ['./alarm-history-report.component.scss']
})
export class AlarmHistoryReportComponent implements OnInit {
  displayedColumns: string[] = ['snono','position', 'name', 'weight', 'symbol','alarmtype','alarmnumber','alarmmessage','alarmtime'];
  dataSource = new MatTableDataSource();
  startDate:any;
  new_date:any;
  new_date1:any;
  endDate:any;
    show: boolean=false;
  login:FormGroup;
  machine_response: any;
  shift_response: any;
  tenant: any;
  myLoader = false;
  operator_response: any;
  valuesplit:any;
  alarmreport:any;
  get_report:any;
  export_excel: any[] = [];
  public today: Date = new Date(new Date().toDateString());
  constructor(private datepipe: DatePipe,private http:HttpClient,private nav:NavbarService,private service:AlarmHistoryService,private fb:FormBuilder,private exportService: ExportService) { 
    this.nav.show()
    this.tenant=localStorage.getItem('tenant_id')
    

  }
  ngOnInit() {
    this.login = this.fb.group({
      machine_id:["",Validators.required],
      shift_id:["",Validators.required],
      operator_id:["",Validators.required],
      start_date:["",Validators.required],
      end_date:["",Validators.required],
      report_type:["",Validators.required],
    })
    this.service.alarm_history(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
      this.machine_response=res;
    })

    this.service.shiftidentity(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
      this.service.shift(res.id).subscribe(res => {
       this.shift_response=res; 
      })
    })
    this.service.operator(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
     this.operator_response=res;
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
     for(var i=0;i<this.alarmreport.length;i++){
       this.export_excel.push({
          "S.No": i+1,
          "Date": this.alarmreport[i].date || '---',
          "Shift": this.alarmreport[i].shift_no || '---',
          "Machine Name":this.alarmreport[i].machine_name || '---',
          "Operator Name": this.alarmreport[i].operator_name || '---',
          "Alarm Type": this.alarmreport[i].alarm_type || '---',
          "Alarm Number": this.alarmreport[i].alarm_no || '---',
           "Alarm Message": this.alarmreport[i].message || '---',
           "Alarm Time": this.alarmreport[i].alarm_time || '---',

 
 
       });
     }
       this.exportService.exportAsExcelFile(this.export_excel, 'Alarm History Report Details');
       
   }
 
 
  }
 
getsplit(val){
   this.valuesplit = val;
   console.log(this.valuesplit)
}


loginfunc(){
  console.log(this.login.value)
  if(this.login.value.machine_id === ''){
    alert("Plese select Machine")
  }
  else if(this.login.value.report_type === ''){
    alert("Plese select Type")

  }
 
  else if(this.login.value.start_date === ''){
    alert("Plese select Start Date")

  }
  else if(this.login.value.end_date === ''){
    alert("Plese select End Date")

  }
  else {
  this.new_date = new DatePipe('en-US').transform(this.login.value.start_date, 'dd-MM-yyyy');
  this.new_date1 = new DatePipe('en-US').transform(this.login.value.end_date, 'dd-MM-yyyy');

  this.myLoader = true;
  if(this.login.value.report_type === 'Shiftwise'){
    this.service.shift1(this.login.value, this.new_date,this.new_date1,this.tenant).subscribe(res =>{
      console.log(res.alarm);
      this.alarmreport = res;
      this.myLoader = false;
      this.dataSource=new MatTableDataSource(this.alarmreport)

    })
  }
  else if(this.login.value.report_type === 'Operatorwise'){
    this.service.operator1(this.login.value, this.new_date,this.new_date1,this.tenant).subscribe(res =>{
      console.log(res);
      this.alarmreport = res;
      this.myLoader = false;
      this.dataSource=new MatTableDataSource(this.alarmreport)

    })
  }
}

  // else if(this.login.value.shift_id === 'undefined' && this.login.value.report_type === 'Shiftwise'){
  //   alert("correctALLshift")
    // this.service.shift1(this.login.value, this.new_date,this.new_date1,this.tenant).subscribe(res =>{
    //   console.log(res);
    //   this.alarmreport = res;
    //   this.myLoader = false;
    //   this.dataSource=new MatTableDataSource(this.alarmreport)

    // })
  // }
    // this.service.table(this.login.value,this.valuesplit,this.tenant).subscribe(res =>{
    //   console.log(res);
    //   this.alarmreport = res;
    //   this.myLoader = false;
    //   this.dataSource=new MatTableDataSource(this.alarmreport)

      
    // })
}

ngOnDestroy(){

}
}