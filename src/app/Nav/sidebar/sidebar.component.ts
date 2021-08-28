import { Component, OnInit,OnChanges,SimpleChanges,Inject,Input} from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../Service/app/login.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SidebarService} from '../../Service/app/sidebar.service';
export interface Edit { }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,OnChanges {
  @Input()navStatus: boolean;

  opened: boolean;
  public sidebarToggled = false;
  
  show1: boolean;
  show2: boolean;
  last_name: any;
  first_name: any;
  public keyboard_arrow_down: any = 'Compare';
  tenant: any;
  email:any;
  drawer:any;
  isHandset$:any;
  Compare :any;
  // first: any;
  role:any;
  // last: any; 
  primaryColor: string;
  pri:any;
  u_id:any;
  constructor(private servie:LoginService,public nav: NavbarService, private route: Router,private dialog:MatDialog) { }

  ngOnInit() {


  
    this.servie.true().subscribe(res=>{
      console.log(res);
      localStorage.setItem('sign', res);
        this.role = localStorage.getItem('role_name')
        console.log(this.role);


    })
  }


  ngOnChanges(changes: SimpleChanges) {

    
    if(changes.navStatus.currentValue){
      this.pri = localStorage.getItem('color_theme')
      console.log(this.pri)
      this.changeTheme(this.pri);
      this.first_name =localStorage.getItem('first_name');
      console.log(this.first_name)
      this.last_name =localStorage.getItem('last_name');
      this.tenant =localStorage.getItem('tenant_id');
      this.email =localStorage.getItem('email');
      this.u_id = localStorage.getItem('user_id')
      
      this.role = localStorage.getItem('role_name')


    }

}

changeTheme(primary: string) {
  console.log(primary);
  localStorage.setItem('pri_mary_col_vapmso', primary);


  document.documentElement.style.setProperty('--primary-color', primary);


  let data = {'color_theme':primary}
  console.log(this.u_id,data)
      this.servie.editi_theme(this.u_id,data).subscribe(res => {
        console.log(res)
  
    
  
  
        })

}

  view() {
    this.show2 = !this.show2
}

opento(){
  Swal.fire("You are not allow to access.Please contact Admin")

}
open(): void {
  const dialogRef = this.dialog.open(editComponent, {
    width: '450px',
    height: 'auto',
    disableClose: true
    // data: {new: 'new'}
  });
  dialogRef.afterClosed().subscribe(result => {
  });
}
toggle() {
  this.show1 = !this.show1
}
toggleSidebar() {
  let assidebar = document.querySelector('.sidenav');
  let body = document.querySelector('body');
  
  console.log(assidebar);
 
    this.sidebarToggled = !this.sidebarToggled;
    console.log(this.sidebarToggled );
    // debugger
    if(window.innerWidth  < 600){
      if(assidebar.classList.contains('sss' || '' ))    
      {
        assidebar.classList.add('sidebar-hidden');
          body.classList.remove('activemenu');
          assidebar.classList.remove('sss');
      }
      else
      { 
        assidebar.classList.remove('sidebar-hidden');
        body.classList.add('activemenu');
        assidebar.classList.add('sss');
      
      }
    }
else{
if(this.sidebarToggled) {
  assidebar.classList.add('sidebar-hidden');
  body.classList.remove('activemenu');
  assidebar.classList.remove('sss');
} 
else {
  assidebar.classList.remove('sidebar-hidden');
  body.classList.add('activemenu');
  assidebar.classList.add('sss');
}
}  
}

shifting(){
  if(window.innerWidth  < 600){
    this.toggleSidebar();
  }
}
toggle_menu(){
  this.Compare = !this.Compare;

  // CHANGE THE NAME OF THE BUTTON.
  console.log(this.Compare)
  if (this.Compare)
    this.keyboard_arrow_down = "Compare";
  else
    this.keyboard_arrow_down = "Compare"; 
}
  close() {
    Swal.fire({
      title: 'Are you sure want to logout?',
      // type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.first_name = [];
        this.last_name = [];
        this.email = [];
        this.route.navigateByUrl('');
      }
    });
  }
}


@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit.component.html',


})
export class editComponent {
  edit1:FormGroup;
  tenant: any;
  fname:any;
  lname:any;
  phone:any;
  email:any;
  u_id:any;
  password:any;
  oldPassword:any;
  hide: boolean = true;
 
  flock: boolean = true;
  constructor(private service:SidebarService,public dialogRef: MatDialogRef<editComponent>,@Inject(MAT_DIALOG_DATA) public data,private fb:FormBuilder, private route: Router,) {
    this.tenant=localStorage.getItem('tenant_id')
    this.fname = localStorage.getItem('first_name')
    this.lname = localStorage.getItem('last_name')
    this.phone = localStorage.getItem('phone')
    this.email = localStorage.getItem('email')
    this.password = localStorage.getItem('password')
    this.u_id = localStorage.getItem('user_id')
    console.log(this.u_id)
  }

  ngOnInit()
  { 


   


    this.edit1=this.fb.group({
      first_name:["",],
      last_name:["",],
      email_id:["",],
      old_password:[""],
      new_password:[{value:'', disabled: true}],
      phone_number:[""]
    })  
    this.edit1.patchValue({
      first_name: this.fname,
      last_name: this.lname,
      email_id: this.email,
      // password: this.password,
      phone_number: this.phone
    })


  
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  checkPassword(){
    if(this.oldPassword==this.password){
      this.edit1.controls.new_password.enable()
    }else{
      Swal.fire('Old password entered is incorrect')
      this.edit1.controls.old_password.reset()
      this.edit1.controls.new_password.disable()
    }
  }
  editform() {

    console.log(this.edit1.value)
    let data = {'first_name': this.edit1.value.first_name, 'last_name':this.edit1.value.last_name,'email_id': this.edit1.value.email_id,'default':this.edit1.value.new_password,'password_digest': this.edit1.value.new_password,'password': this.edit1.value.new_password,'old_password': this.edit1.value.old_password,'tenant_id':this.tenant}
console.log(data);
    this.service.editvalue(this.u_id,data).subscribe(res => {
      console.log(res)
      this.dialogRef.close();

        Swal.fire(res.msg)
  

      this.ngOnInit();

      })
      this.clerk();

  }
  clerk(){
    this.route.navigateByUrl('');

  }
  
}

