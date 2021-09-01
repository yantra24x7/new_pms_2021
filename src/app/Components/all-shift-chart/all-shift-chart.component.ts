import { Component, OnInit } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { AllShiftChartService} from '../../Service/app/all-shift-chart.service';
import * as Highcharts from 'highcharts';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-all-shift-chart',
  templateUrl: './all-shift-chart.component.html',
  styleUrls: ['./all-shift-chart.component.scss']
})
export class AllShiftChartComponent implements OnInit {
    myLoader1= false;
    startDate :any;
    SHIFT_NUM:any;
    one:any;
    two:any;
    three:any;
    four:any;
    five:any;
    six:any;
    seven:any;
//form data
machineName:any;
SHIFT_ID:any;
correct:any;
  // first chart
 Highcharts1 = Highcharts;
 chartOptions1: any;
 chartOptions2:any;
 chartOptions9:any;
 chartOptions10:any;
 chartOptions11:any;

 chartOptions5: any;
 chartOptions6: any;
 chartOptions7: any;
 chartOptions8:any;
 Highcharts6 = Highcharts;
 Highcharts7 = Highcharts;
 Highcharts8 = Highcharts;
 Highcharts9 = Highcharts;
 pro_number4:any;
 c_time5:any;
 c_time6:any;
 pro_number5:any;
 pro_number6:any;
 shiftNo:any;
 c_time4:any;
 parts = [];
 c_time = [];
 pro_number = [];
 all_cycle_resp:any;
 Highcharts3 = Highcharts;
 Highcharts4 = Highcharts;
 Highcharts5 = Highcharts;
 parts4:any;
 parts5:any;
 parts6:any;

 // second chart
 Highcharts2 = Highcharts;
 runarryul:any = [];
 idlearryul:any = [];
 stoparryul:any = [];
 noarryul:any = [];
 duration:any = [];

 runarryul1:any = [];
 idlearryul1:any = [];
 stoparryul1:any = [];
 noarryul1:any = [];
 allcycle_response:any;

 currentstatus:any;
    tenant: any;
    machine_response: any;
    shift_response: any;
    login: FormGroup;
    macname: any;
    machineID:any;
    showshift: any;
    date: any;
  c_time1: any;
  pro_number1: any;
  parts1: any;
  parts2: any;
  c_time2: any;
  pro_number2: any;
  parts3: any;
  c_time3: any;
  pro_number3: any;
    constructor(private datePipe:DatePipe,private nav:NavbarService,private service:AllShiftChartService,private fb:FormBuilder) {
    this.nav.show();
    this.tenant=localStorage.getItem('tenant_id')

   }

  ngOnInit() {
    console.log(this.macname)
    this.login = this.fb.group({
        machine_id:["",Validators.required],
        shift_id:["",Validators.required],
        date:["",Validators.required]
    })

   
    this.service.machine( this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
    console.log(res);
    this.machine_response = res;
  
        this.service.current_status(this.tenant).pipe(untilDestroyed(this)).subscribe(res =>{
            this.currentstatus=res;
            this.shiftNo = this.currentstatus.shift_no;
            console.log( this.shiftNo);
            this.SHIFT_ID = this.currentstatus.shift_id;
            this.SHIFT_NUM = this.currentstatus.shift_no; 
            console.log(this.SHIFT_ID, this.SHIFT_NUM)
            this.machineID = this.currentstatus.machine;
            this.date = this.currentstatus.date;
           for(let i=0; i<this.machine_response.length; i++){
             if(this.currentstatus["machine"] == this.machine_response[i].id){
               this.machineName = this.machine_response[i].machine_name
              this.login.patchValue({
                machine_id: this.machine_response[i].machine_name,
              })
             } 
           }
            this.login.patchValue({
              shift_id: this.SHIFT_NUM,
              date: this.currentstatus.date
            });
             this.chart_view()
          })
    })
   
    
    // this.service.shift(this.tenant).subscribe(res => {
    // console.log(res);
    // this.shift_response=res; 
    // console.log(localStorage.getItem('token'));})
          
    this.service.shiftidentity(this.tenant).pipe(untilDestroyed(this)).subscribe(res => {
        this.service.shift(res.id).subscribe(res => {
          this.shift_response = res;
        })
      })
  }
  getmachine(machine,id){
    this.machineName = machine;
    this.machineID = id;
    }
    getshift(shiftID,shift_nom){
      
      this.SHIFT_ID = shiftID;
      this.SHIFT_NUM = shift_nom;
      console.log(this.SHIFT_ID);
      console.log(this.SHIFT_NUM);
    
    
      }

      addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.date = event.value;
        console.log(this.date )
      }
  
  chart_view(){

    this.date = this.datePipe.transform(this.date,'MM-dd-yyyy');
     let register = {'machine_id': this.machineID , 'shift_id': this.SHIFT_ID, 'date':this.date}
     console.log(register)
     register['tenant_id'] = this.tenant;
     this.myLoader1= true;
     this.service.shift_machine_status_chart(register).pipe(untilDestroyed(this)).subscribe(res => {
        this.myLoader1= false;

     var m = Math.floor(res.no_data % 3600 / 60);
    this.chartOptions1 = {
    chart: {
      type: 'bar',
      zoomType: 'xy',

      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
    }

  },
  title: {
      text: 'Machine Status Chart'
  },
  subtitle: {
    text: 'Machine ID : '+ this.machineName +', Shift No:'+ this.SHIFT_NUM +' Date :'+this.date+',',
    style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
     }
  },
  xAxis: {
      categories: res.shift_no.reverse(),
      title: {
          text: 'Shift'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
            //   color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          },
          formatter:  function () {
            return m + 'm';
        }

      }

  },
  tooltip: {

    formatter: function () {
        return 'Parts count : <b>' + this.x + '</b>, Time <b>' + m + ' min </b>';

    }
},

  
  legend: {
      reversed: true
  },
  navigation: {
    buttonOptions: {
        enabled: true
    }
},
credits:{
    enabled:false
},
exporting:{
    enabled:true
},
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
//   series: [{
//     name: 'Run',
//     data: res.run_time.map(Number),
//     color: '#2cbe63'
//   }, {
//     name: 'Idle',
//     data: res.idle_time.map(Number),
//     color: '#e8a249'
//   }, {
//     name: 'Stop',
//     data: res.stop_time.map(Number),
//     color: '#ec5550'
//   }, {
//     name: 'No data',
//     data: res.no_data.map(Number),
//     color: '#292b2c'
//   }],
  series: [{
      name: 'Nodata',
      color: '#292b2c',
      data: res.no_data.map(Number),
  },
  {
    name: 'Run',
    data: res.run_time.map(Number),
    color: '#2cbe63'
  },
  {
    name: 'Stop',
    data: res.stop_time.map(Number),
    color: '#ec5550'
  },
  {
    name: 'Idle',
        data: res.idle_time.map(Number),
         color: '#e8a249',
 
      dataLabels: {
        enabled: true,
        // rotation: -90,
        color: '#292b2c',
        align: 'center',
        valueDecimals: 2,
        format: '{point.y:.2f}', 
        y: 0, // 10 pixels down from the top
        style: {
            fontSize: '10px',
            fontWeight: 'normal'
        }
    },

//   }, {
//       name: 'Idle',
//       color: '#e8a249',
//       data: res.idle_time.map(Number),
//       dataLabels: {
//         enabled: true,
//         // rotation: -90,
//         color: '#292b2c',
//         align: 'center',
//         valueDecimals: 2,
//         format: '{point.y:.2f}', // one decimal
//         y: 0, // 10 pixels down from the top
//         style: {
//             fontSize: '10px',
//             fontWeight: 'normal'
//         }
//     },

//   }, {
//       name: 'Run',
//       color: '#2cbe63',
//       data: res.run_time.map(Number),
//       dataLabels: {
//         enabled: true,
//         // rotation: -90,
//         color: '#292b2c',
//         align: 'center',
//         valueDecimals: 2,
//         format: '{point.y:.2f}', // one decimal
//         y: 0, // 10 pixels down from the top
//         style: {
//             fontSize: '10px',
//             fontWeight: 'normal'
//         }
//     },

//   },
//   {
//     name: 'Stop',
//     color: '#ec5550',
//     data: res.stop_time.map(Number),
//     dataLabels: {
//         enabled: true,
//         // rotation: -90,
//         color: '#292b2c',
//         align: 'center',
//         valueDecimals: 2,
//         format: '{point.y:.2f}', // one decimal
//         y: 0, // 10 pixels down from the top
//         style: {
//             fontSize: '10px',
//             fontWeight: 'normal'
//         }
//     },

}]
  }

 
  })
  this.myLoader1= true;

  this.service.shift_machine_utilization_chart(register).pipe(untilDestroyed(this)).subscribe(res => {
    this.myLoader1= false;

    for (var data in res.run_time) {
        var run = res.run_time[data] ;
        this.runarryul.push(run);
        var idle =res.idle_time[data] ;
        this.idlearryul.push(idle);
        var stop = res.stop_time[data] ;
        this.stoparryul.push(stop);
        var nodata = res.no_data[data];
        this.noarryul.push(nodata);
         var duration = res.duration[data];
        this.duration.push(duration);
    
    }
    for (var i in this.runarryul) {
        var num1 = this.runarryul[i];
        var num2 = this.idlearryul[i];
        var num3 = this.stoparryul[i];
    
        if (num1 >= num2 && num1 >= num3) {
            if(this.noarryul[i] < 600){
                this.runarryul[i] += this.noarryul[i];
                this.noarryul[i]=0;
                }
    
        } else if (num2 >= num1 && num2 >= num3) {
    
            if(this.noarryul[i] < 600){
                this.idlearryul[i] += this.noarryul[i];
                this.noarryul[i]=0;
                }
        } else if (num3 >= num1 && num3 >= num1) {
    
            if(this.noarryul[i] < 600){
                this.stoparryul[i] += this.noarryul[i];
                this.noarryul[i]=0;
                }
        }
    
        if (num1 == 0 && num2 == 0 && num3 == 0) {
            this.runarryul[i] = 0;
            this.idlearryul[i] = 0;
    
            this.stoparryul[i] = 0;
        }
    }

    // for (var data in this.runarryul) {
    //     var run1 = (this.secondsToMinutes(this.runarryul[data])  * 100 / this.secondsToMinutes(this.duration[data])) ;
    //     this.runarryul1.push(run);
    //     var idle1 = (this.secondsToMinutes(this.idlearryul[data])  * 100 / this.secondsToMinutes(this.duration[data]));
    //     this.idlearryul1.push(idle);
    //     var stop1 = (this.secondsToMinutes(this.stoparryul[data])  * 100/ this.secondsToMinutes(this.duration[data]));
    //     this.stoparryul1.push(stop);
    //     var nodata1= parseFloat(this.secondsToMinutes(this.noarryul[data]) *100/ this.secondsToMinutes(this.duration[data]));
    //       this.noarryul1.push(nodata);
    
    // }
    //  var m = Math.floor(res.no_data % 3600 / 60);

    this.chartOptions2 = {
        chart: {
          type: 'bar',
          zoomType: 'xy',

      },
      title: {
          text: 'Machine Status With Utilization(%) Chart'
      },
      subtitle: {
        text: 'Machine ID : '+ this.machineName+',Shift No:'+ this.SHIFT_NUM +' Date :'+this.date+',',
        style: {
            fontSize: '16px',
            color: '#f58632',
            fill: '#f58632'
         }
      },
      xAxis: {
        categories: res.shift_no.reverse(),
        title: {
            text: 'Shift'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage(%)'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            },
        //    formatter: function () {

        //         if(this.total >= 98 ){
        //             this.total = 100;
        //         }

        //         return Math.ceil(this.total) + '%';
        //     }
        }

    },

      legend: {
          reversed: true
      },
      navigation: {
        buttonOptions: {
            enabled: true
        }
    },
    
    exporting:{
        enabled:true
    },
    credits:{
        enabled:false
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                format: '{point.y:.0f} %', // your label's value plus the percentage sign
                valueDecimals: 2 // show your label's value up to two decimal places
            }
        }

    },
    
    colors: ['#292b2c','#ec5550', '#e8a249', '#2cbe63'],

    // series: [
    //     {
    //         name: 'Nodata',
    //         data: this.noarryul1.reverse()
    //     },
    //     {
    //     name: 'Stop',
    //     data: this.stoparryul1.reverse()
    // }, {
    //     name: 'idle',
    //     data: this.idlearryul1.reverse()
    // }, {
    //     name: 'Run',
    //     data: this.runarryul1.reverse()
    // }],

      series: [{
          name: 'Nodata',
          color: '#292b2c',
          data: res.no_data.map(Number),
          dataLabels: {
            enabled: true,
            // rotation: -90,
            color: '#292b2c',
            align: 'center',
            valueDecimals: 2,
            // format: '{point.y:.2f}', 
            y: 0, // 10 pixels down from the top
            style: {
                fontSize: '10px',
                fontWeight: 'normal'
            }
        },
      }
    , {
          name: 'Idle',
          color: '#e8a249',
          data:  res.idle_time.map(Number)
      }, {
          name: 'Run',
          color: '#2cbe63',
          data: res.run_time.map(Number)
      },
      {
        name: 'Stop',
        color: '#ec5550',
        data: res.stop_time.map(Number)
    }
]}
 })



 this.service.all_cycle_time_chart_new(register).pipe(untilDestroyed(this)).subscribe(res => {
   this.allcycle_response = res;
   this.one = res[1]   
   this.two = res[2]   
   this.three = res[3]
   this.four = res[4]
   this.five = res[5]
   this.six = res[6]
   this.seven = res[7]

   console.log(this.one)
     console.log(this.allcycle_response[1]);
   this.parts = [];
   this.c_time = [];
   this.pro_number = [];
   this.parts1 = [];
   this.c_time1 = [];
   this.pro_number1 = [];
   this.parts2 = [];
   this.c_time2 = [];
   this.pro_number2 = [];
   this.parts3 = [];
   this.c_time3 = [];
   this.pro_number3 = [];
   this.parts4 = [];
   this.c_time4 = [];
   this.pro_number4 = [];
   this.parts5 = [];
   this.c_time5 = [];
   this.pro_number5 = [];
   this.parts6 = [];
   this.c_time6 = [];
   this.pro_number6 = [];
   for (var i in this.allcycle_response[1]) {
    var run = parseFloat(i)
  var part = run * 1 + 1;
  this.parts.push(part);
  
  var cycle1 = this.secondsToMinutes(this.allcycle_response[1][i].cycle_time);
  var cycle = parseFloat(cycle1);
  
  var pro_number = this.allcycle_response[1][i].program_number;
  this.c_time.push(cycle);
  this.pro_number.push(pro_number);
  var ShiftNo = this.allcycle_response[1][i].shift_no;
  var Time = this.allcycle_response[1][i].time;
  }

  for (var j in this.allcycle_response[2]) {
    var run1 = parseFloat(j)
  var part1 = run1 * 1 + 1;
  this.parts1.push(part1);
  
  var cycle2 = this.secondsToMinutes(this.allcycle_response[2][j].cycle_time);
  var cycle3 = parseFloat(cycle2);
  
  var pro_number1 = this.allcycle_response[2][j].program_number;
  this.c_time1.push(cycle3);
  this.pro_number1.push(pro_number1);
  var ShiftNo1 = this.allcycle_response[2][j].shift_no;
  var Time1 = this.allcycle_response[2][j].time;
  }


  
  for (var k in this.allcycle_response[3]) {
    var run2 = parseFloat(k)
  var part2 = run2 * 1 + 1;
  this.parts2.push(part2);
  
  var cycle4 = this.secondsToMinutes(this.allcycle_response[3][k].cycle_time);
  var cycle5 = parseFloat(cycle4);
  
  var pro_number2 = this.allcycle_response[3][k].program_number;
  this.c_time2.push(cycle5);
  this.pro_number2.push(pro_number2);
  var ShiftNo2 = this.allcycle_response[3][k].shift_no;
  var Time2 = this.allcycle_response[3][k].time;
  }


  
  for (var l in this.allcycle_response[4]) {
    var run3 = parseFloat(l)
  var part3 = run3 * 1 + 1;
  this.parts3.push(part3);
  
  var cycle6 = this.secondsToMinutes(this.allcycle_response[4][l].cycle_time);
  var cycle7 = parseFloat(cycle6);
  
  var pro_number3 = this.allcycle_response[4][l].program_number;
  this.c_time3.push(cycle7);
  this.pro_number3.push(pro_number3);
  var ShiftNo3 = this.allcycle_response[4][l].shift_no;
  var Time3 = this.allcycle_response[4][l].time;
  }



  for (var m in this.allcycle_response[5]) {
    var run4 = parseFloat(m)
  var part4 = run4 * 1 + 1;
  this.parts4.push(part4);
  
  var cycle8 = this.secondsToMinutes(this.allcycle_response[5][m].cycle_time);
  var cycle9 = parseFloat(cycle8);
  
  var pro_number4 = this.allcycle_response[5][m].program_number;
  this.c_time4.push(cycle9);
  this.pro_number4.push(pro_number4);
  var ShiftNo4 = this.allcycle_response[5][m].shift_no;
  var Time4 = this.allcycle_response[5][m].time;
  }


  for (var n in this.allcycle_response[6]) {
    var run5 = parseFloat(n)
  var part5 = run5 * 1 + 1;
  this.parts5.push(part5);
  
  var cycle10 = this.secondsToMinutes(this.allcycle_response[6][n].cycle_time);
  var cycle11 = parseFloat(cycle10);
  
  var pro_number5 = this.allcycle_response[6][n].program_number;
  this.c_time5.push(cycle11);
  this.pro_number5.push(pro_number5);
  var ShiftNo5 = this.allcycle_response[6][n].shift_no;
  var Time5 = this.allcycle_response[6][n].time;
  }


  for (var o in this.allcycle_response[7]) {
    var run6 = parseFloat(o)
  var part6 = run6 * 1 + 1;
  this.parts6.push(part6);
  
  var cycle12 = this.secondsToMinutes(this.allcycle_response[7][o].cycle_time);
  var cycle13 = parseFloat(cycle12);
  
  var pro_number6 = this.allcycle_response[7][o].program_number;
  this.c_time6.push(cycle13);
  this.pro_number6.push(pro_number6);
  var ShiftNo6 = this.allcycle_response[7][o].shift_no;
  var Time6 = this.allcycle_response[7][o].time;
  }
 console.log(this.c_time,this.pro_number,this.parts)

  this.chartOptions5 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo + ',Time : ' + Time ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }


  this.chartOptions6 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo1 + ',Time : ' + Time1 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts1),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time1,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }

  this.chartOptions7 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo2 + ',Time : ' + Time2 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts2),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time2,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }


  this.chartOptions8 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo3 + ',Time : ' + Time3 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts3),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time3,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }

  this.chartOptions9 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo4 + ',Time : ' + Time4 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts4),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time4,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }


  this.chartOptions10 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo5 + ',Time : ' + Time5 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts5),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time5,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }

  this.chartOptions11 = {
    chart: {
      type: 'column',           
      zoomType: 'xy',

      
    
      style: {
        fontFamily: 'Rubik, sans-serif'
      }
    },
    title: {
      text: 'Cycle Time Chart(Mins)'
    },
    subtitle: {
      // text: 'Machine ID : '+ this.macname['machine_name']+',Shift:'+ res.shift_no+' Date : 04-02-20 ',
      text: 'Machine Name : ' + this.machineName + ', Date : ' +this.date + ',Shift :'  + ShiftNo6 + ',Time : ' + Time6 ,
      // + ', PartsCount:' + '' + ',Program No : ' + ''
      style: {
        fontSize: '16px',
        color: '#f58632',
        fill: '#f58632'
      }
    },
    xAxis: {
      categories: (this.parts6),
      title: {
        text: 'Parts Count'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Time(min)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
      }
  },
  tooltip: {
          formatter: function() {
              return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits: {
      enabled: false
  },
  colors: ['#f58632'],
  series: [{
      name: 'Parts Count',
      data: this.c_time6,
      dataLabels: {
          enabled: true,
          color: '#292b2c',
          align: 'center',
          valueDecimals: 2,
          format: '{point.y:.2f}', 
          y: 0,
          style: {
              fontSize: '10px',
              fontWeight: 'normal',
          }
      },
  }]
  }

 })
}
secondsToMinutes(time: any):string {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);

    if (sec.toString().length == 1) {
        // alert(sec);
      let sec = '0'+'sec';
    }
    return min + '.' + sec;
}

ngOnDestroy(){

}
}
