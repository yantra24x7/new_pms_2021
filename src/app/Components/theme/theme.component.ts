import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { NavbarService} from '../../Nav/navbar.service';
import { LoginService } from '../../Service/app/login.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  primaryColor: string;
  pri:any;
  u_id:any;
  constructor(private nav:NavbarService,private servie:LoginService) { 
    this.nav.show();
    this.u_id = localStorage.getItem('user_id')
    console.log(this.u_id)
    this.pri = localStorage.getItem('color_theme')
    console.log(this.pri)
    this.changeTheme(this.pri);

  }

  ngOnInit() {
  
  }


  changeTheme(primary: string) {
    console.log(primary);
    // localStorage.setItem('pri_mary_col_vapmso', primary);


    document.documentElement.style.setProperty('--primary-color', primary);


    let data = {'color_theme':primary}
    console.log(this.u_id,data)
        this.servie.editi_theme(this.u_id,data).subscribe(res => {
          console.log(res)
    
      
    
    
          })

  }

}
