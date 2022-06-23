import { Component, OnInit,Inject } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormArray,FormControl,FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

import { ProcessService} from '../../Service/app/process.service';
import { MatTableDataSource } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ExportService } from '../shared/export.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  displayedColumns: string[] = ['position','operator_name', 'operator_spec_id', 'description','created','status','action'];
  dataSource = new MatTableDataSource();
  tenant: any;
  list: any;
  myLoader= false;
show_status:any;
Role_NAME:any;
  export_excel: any=[];
  constructor(private nav:NavbarService,private fb:FormBuilder,public dialog: MatDialog,private service:ProcessService,private router:Router,private exportService:ExportService)
  {
  this.nav.show();
  this.tenant=localStorage.getItem('tenant_id');
  this.Role_NAME = localStorage.getItem('role_name')
  console.log(this.Role_NAME);
  }
  operator_edit(data): void{
      const dialogRef = this.dialog.open(Add, {
      width: '450px',
      height:'auto',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  usernot(){
    Swal.fire("You are not allow to access.Please contact Admin")

  }

  manage(val,id){
    console.log(id,val);
    localStorage.setItem('Process_id',id);

    this.router.navigate(['/operation_man'], { queryParams: { Process_id: id } });

  }
  ngOnInit() {
    this.myLoader= true;
       this.service.operator(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
       this.myLoader= false;
       this.list=res;
       this.dataSource=new MatTableDataSource(this.list)
    })
  }
  export(){
    this.myLoader = true;
    // this.alarmreport = res;
    console.log(this.list)

     this.myLoader = false;
     console.log(this.list);
     if(this.list.length==0){
       console.log(this.list)
       Swal.fire('Exporting!, No Data Found')
     }else{
     for(var i=0;i<this.list.length;i++){
       this.export_excel.push({
          "#": i+1,
          "Plan No": this.list[i].plan_number|| '---',
          "Plan Name": this.list[i].plan_name|| '---',
          "part No":this.list[i].part_number|| '---',
          "Created By": this.list[i].created_by || '---',
          "Status": this.list[i].status || '---',
          //"": this.list[i].machine_name || '---',
          
 
 
       });
     }
       this.exportService.exportAsExcelFile(this.export_excel, 'process plan Report Details');
   }
 
 

  }


  // operator_delete(id)
  
  operator_delete(id) {
   
    Swal.fire({
      title: 'Are you sure want to delete?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Please Confirm'
        }).then((destroy) => {
          if (destroy.value) {
            this.service.delete_row(id).pipe(untilDestroyed(this)).subscribe(res => {
            
           
                Swal.fire(res.msg)
              
              
              this.ngOnInit()
            })
          }
        })
      }
    })
  }
  user():void{
    const dialogRef = this.dialog.open(Edit, {
      width: '450px',
      height:'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
     
             this.ngOnInit();
 
      

    });
  }
  
ngOnDestroy(){

}
}

@Component({
  selector: 'edit-page',
  templateUrl: 'edit.html',
  styleUrls: ['./process.component.scss']
})

export class Edit {
  login:FormGroup;
  tenant: any;
  add_val:any;
  list:any;
  constructor(public dialogRef: MatDialogRef<Edit>,@Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,public service :ProcessService,private exportService:ExportService) {
    this.tenant=localStorage.getItem('tenant_id');

  }

  cancel() {
    this.dialogRef.close();
  }
  
  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit()
  { 
    
    this.service.part(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
      this.list=res;
   })
    
    this.login=this.fb.group({
      plan_name:["",Validators.required],
      plan_number:["",Validators.required],
      part_configuration_id:["",Validators.required],
      plan_description:["",Validators.required],
      status:["",Validators.required]
    })
  }
  logintest() {
    this.add_val=this.login.value;
    this.add_val["tenant_id"] =this.tenant ;
    this.service.post(this.add_val).pipe(untilDestroyed(this)).subscribe(res => {
    Swal.fire(res.msg)
    this.dialogRef.close(status);
   

    })
  }

  ngOnDestroy(){

  }}

@Component({
  selector: 'add-page',
  templateUrl: 'add.html',
  styleUrls: ['./process.component.scss']
})
export class Add {
  login:FormGroup; 
  add_val:any;
  tenant:any;
  edit_data:any;
  list:any;
  constructor(public dialogRef: MatDialogRef<Add>,@Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private service:ProcessService, private exportService:ExportService) 
  {
    this.tenant=localStorage.getItem('tenant_id');

    this.edit_data=data;
    console.log(this.edit_data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit()
  {


    this.service.part(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
      this.list=res;
   })
    this.login=this.fb.group({
      plan_name:[this.edit_data.plan_name],
      plan_number:[this.edit_data.plan_number],
    part_configuration_id:[this.edit_data.part_configuration_id],
    plan_description:[this.edit_data.plan_description],
    status:[this.edit_data.status]
    }) 
  }

  editdata() {
    this.add_val=this.login.value
    this.add_val["tenant_id"] =this.tenant ;
    this.service.put(this.edit_data.id,this.add_val).pipe(untilDestroyed(this)).subscribe(res =>{
    Swal.fire(res.msg)
    this.dialogRef.close();
})
}



ngOnDestroy(){

}

}