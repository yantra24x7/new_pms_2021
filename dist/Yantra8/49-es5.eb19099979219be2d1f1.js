(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"FdB/":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class a{constructor(n,t){this.service=n,this.route=t,this.myLoader=!1}ngOnInit(){this.myLoader=!0,this.service.get_reason().subscribe(n=>{console.log(n),this.myLoader=!1,this.reflect=n})}routes(n,t){console.log(localStorage.getItem("machine_name")),console.log(localStorage.getItem("machine_id"));let e=localStorage.getItem("machine_name"),l=localStorage.getItem("machine_id");console.log(n,t);let a={reason:n,reason_id:t,machine_name:e,machine_id:l};console.log(a),this.myLoader=!0,this.service.redirect(a).subscribe(n=>{console.log(n),this.myLoader=!1,console.log(n.machine),localStorage.setItem("machine",n.machine),localStorage.setItem("reason",n.reason),this.route.navigateByUrl("/oee_dashboard")})}}class o{}var i=e("pMnS"),c=e("NcP4"),r=e("xYTU"),b=e("9AJC"),g=e("fo5T"),_=e("t68o"),p=e("zbXB"),d=e("bujt"),u=e("Fwaw"),s=e("5GAg"),m=e("omvX"),f=e("SVse"),h=e("iInd"),P=e("Mr+X"),O=e("Gi4r"),M=e("IheW");let C=(()=>{class n{constructor(n){this.http=n}get_reason(){return this.http.get("tab_list_of_idel")}redirect(n){return this.http.post("tab_reson_for_idle",n)}}return n.ngInjectableDef=l.Tb({factory:function(){return new n(l.Ub(M.c))},token:n,providedIn:"root"}),n})();var x=l.rb({encapsulation:0,styles:[[".page[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]{padding:0}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{background:#2c2f34;padding:12px 20px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;margin:0;color:#fff}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;margin:0;padding:0 15px;color:#a8a8a8}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child, .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{border-right:1px solid #707070}.machine_detail_Page[_ngcontent-%COMP%]{padding:20px}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]   button.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,left bottom,from(#f69320),to(#7b4a10));background-image:linear-gradient(#f69320,#7b4a10);color:#fff!important}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-value{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]     .mat-select-arrow{color:#f69320}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;margin-bottom:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   button.back.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{min-width:64px;padding:0;height:64px;border-radius:8px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-left:14px;margin-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;color:#a8a8a8}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{-webkit-transform:translateY(-20%)!important;transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before{display:none}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent;padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:26px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#2c2f34;border:1px solid #707070;padding:0 20px;border-radius:7px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{-webkit-transform:translateY(-20%)!important;transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:22px}.machine_prod[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:left;justify-content:left;-webkit-box-align:center;align-items:center;border-radius:12px;margin-bottom:10px}.machine_prod[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24%;padding:30px 14px;font-size:20px;margin-bottom:7px;margin-right:7px}.machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.machine_prod[_ngcontent-%COMP%]   .label_info[_ngcontent-%COMP%]{float:left;width:60%}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;margin-bottom:20px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}  .mat-form-field-underline{display:none}footer[_ngcontent-%COMP%]{background:#2c2f34;padding:9px 30px 9px 9px;position:fixed;width:100%;bottom:0;text-align:right;left:0}.footer_action[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.footer_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:49%;padding:30px;font-size:26px}.spinner[_ngcontent-%COMP%]{background:#262932;height:100vh;opacity:.9;position:fixed;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;top:0;left:0;right:0;width:auto;z-index:999}.spinner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;margin-top:-130px}"]],data:{}});function D(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),l.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function w(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.routes(null==n.context.$implicit?null:n.context.$implicit.reason,null==n.context.$implicit?null:null==n.context.$implicit.id?null:n.context.$implicit.id.$oid)&&l),l}),d.b,d.a)),l.sb(1,180224,null,0,u.b,[l.k,s.h,[2,m.a]],{color:[0,"color"]},null),(n()(),l.Nb(2,0,["",""]))],(function(n,t){n(t,1,0,"primary")}),(function(n,t){n(t,0,0,l.Fb(t,1).disabled||null,"NoopAnimations"===l.Fb(t,1)._animationMode),n(t,2,0,null==t.context.$implicit?null:t.context.$implicit.reason)}))}function k(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,23,"div",[["class","page"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,D)),l.sb(2,16384,null,0,f.n,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(3,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),l.tb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Nb(-1,null,["Reason list"])),(n()(),l.tb(6,0,null,null,8,"div",[["class","rhs_wrapper"]],null,null,null,null,null)),(n()(),l.tb(7,0,null,null,7,"button",[["class","back"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var a=!0;return"click"===t&&(a=!1!==l.Fb(n,8).onClick()&&a),a}),d.b,d.a)),l.sb(8,16384,null,0,h.l,[h.k,h.a,[8,null],l.D,l.k],{routerLink:[0,"routerLink"]},null),l.Gb(9,1),l.sb(10,180224,null,0,u.b,[l.k,s.h,[2,m.a]],{color:[0,"color"]},null),(n()(),l.tb(11,0,null,0,3,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.tb(12,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,P.b,P.a)),l.sb(13,9158656,null,0,O.b,[l.k,O.d,[8,null],[2,O.a],[2,l.l]],null,null),(n()(),l.Nb(-1,0,["keyboard_arrow_left"])),(n()(),l.tb(15,0,null,null,8,"div",[["class","machine_detail_Page"]],null,null,null,null,null)),(n()(),l.tb(16,0,null,null,5,"div",[["class","running"]],null,null,null,null,null)),(n()(),l.tb(17,0,null,null,0,"div",[["class","header_machine"]],null,null,null,null,null)),(n()(),l.tb(18,0,null,null,3,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),l.tb(19,0,null,null,2,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,w)),l.sb(21,278528,null,0,f.m,[l.O,l.L,l.r],{ngForOf:[0,"ngForOf"]},null),(n()(),l.tb(22,0,null,null,1,"footer",[],null,null,null,null,null)),(n()(),l.tb(23,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,2,0,e.myLoader);var l=n(t,9,0,"/machine_lmw");n(t,8,0,l),n(t,10,0,"primary"),n(t,13,0),n(t,21,0,e.reflect)}),(function(n,t){n(t,7,0,l.Fb(t,10).disabled||null,"NoopAnimations"===l.Fb(t,10)._animationMode),n(t,12,0,l.Fb(t,13).inline,"primary"!==l.Fb(t,13).color&&"accent"!==l.Fb(t,13).color&&"warn"!==l.Fb(t,13).color)}))}var y=l.pb("app-reflect",a,(function(n){return l.Pb(0,[(n()(),l.tb(0,0,null,null,1,"app-reflect",[],null,null,null,k,x)),l.sb(1,114688,null,0,a,[C,h.k],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),v=e("s7LF"),j=e("QQfA"),z=e("IP0z"),F=e("gavF"),I=e("POq0"),L=e("Xd0L"),J=e("/Co4"),q=e("JjoW"),B=e("cUpR"),N=e("/HVE"),Y=e("qJ5m"),A=e("Mz6y"),S=e("DkaU"),Z=e("G0yt"),$=e("s6ns"),U=e("821u"),V=e("OIZN"),X=e("z16Y"),G=e("Wc//"),E=e("zMNK"),H=e("hOhj"),Q=e("oapL"),R=e("HsOI"),T=e("ZwOa"),W=e("igqZ"),K=e("02hT"),nn=e("Q+lL"),tn=e("pBi1"),en=e("lT8R"),ln=e("BV1i"),an=e("elxJ"),on=e("5Bek"),cn=e("c9fC"),rn=e("FVPZ"),bn=e("qJ50"),gn=e("AaDx"),_n=e("mkRZ"),pn=e("dFDH"),dn=e("rWV4"),un=e("cw5Z"),sn=e("zQui"),mn=e("8rEH"),fn=e("r0V8"),hn=e("hfXE"),Pn=e("ECJv"),On=e("10VE"),Mn=e("BzsH"),Cn=e("1Q6g");e.d(t,"ReflectModuleNgFactory",(function(){return xn}));var xn=l.qb(o,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[i.a,c.a,r.a,r.b,b.a,b.b,b.h,b.i,b.e,b.f,b.g,g.a,_.a,p.b,p.a,y]],[3,l.j],l.w]),l.Db(4608,f.p,f.o,[l.t,[2,f.L]]),l.Db(4608,v.B,v.B,[]),l.Db(4608,v.g,v.g,[]),l.Db(4608,j.c,j.c,[j.i,j.e,l.j,j.h,j.f,l.q,l.y,f.d,z.c,[2,f.j]]),l.Db(5120,j.j,j.k,[j.c]),l.Db(5120,F.c,F.j,[j.c]),l.Db(4608,I.c,I.c,[]),l.Db(4608,L.b,L.b,[]),l.Db(5120,J.a,J.b,[j.c]),l.Db(5120,q.a,q.b,[j.c]),l.Db(4608,B.e,L.c,[[2,L.g],[2,L.l]]),l.Db(4608,L.a,L.w,[[2,L.f],N.a]),l.Db(5120,Y.b,Y.a,[[3,Y.b]]),l.Db(5120,A.b,A.c,[j.c]),l.Db(135680,s.h,s.h,[l.y,N.a]),l.Db(4608,S.e,S.e,[l.L]),l.Db(4608,Z.v,Z.v,[l.j,l.q,Z.jb,Z.w]),l.Db(5120,$.c,$.d,[j.c]),l.Db(135680,$.e,$.e,[j.c,l.q,[2,f.j],[2,$.b],$.c,[3,$.e],j.e]),l.Db(4608,U.i,U.i,[]),l.Db(5120,U.a,U.b,[j.c]),l.Db(5120,V.c,V.a,[[3,V.c]]),l.Db(4608,X.b,X.b,[]),l.Db(4608,G.a,G.a,[]),l.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.k]]),l.Db(1073742336,f.c,f.c,[]),l.Db(1073742336,v.A,v.A,[]),l.Db(1073742336,v.k,v.k,[]),l.Db(1073742336,v.x,v.x,[]),l.Db(1073742336,z.a,z.a,[]),l.Db(1073742336,L.l,L.l,[[2,L.d],[2,B.f]]),l.Db(1073742336,N.b,N.b,[]),l.Db(1073742336,L.v,L.v,[]),l.Db(1073742336,u.c,u.c,[]),l.Db(1073742336,E.g,E.g,[]),l.Db(1073742336,H.d,H.d,[]),l.Db(1073742336,j.g,j.g,[]),l.Db(1073742336,F.i,F.i,[]),l.Db(1073742336,F.f,F.f,[]),l.Db(1073742336,O.c,O.c,[]),l.Db(1073742336,Q.c,Q.c,[]),l.Db(1073742336,I.d,I.d,[]),l.Db(1073742336,R.e,R.e,[]),l.Db(1073742336,T.c,T.c,[]),l.Db(1073742336,W.d,W.d,[]),l.Db(1073742336,L.m,L.m,[]),l.Db(1073742336,L.t,L.t,[]),l.Db(1073742336,K.a,K.a,[]),l.Db(1073742336,nn.a,nn.a,[]),l.Db(1073742336,L.q,L.q,[]),l.Db(1073742336,J.c,J.c,[]),l.Db(1073742336,q.d,q.d,[]),l.Db(1073742336,tn.d,tn.d,[]),l.Db(1073742336,tn.c,tn.c,[]),l.Db(1073742336,en.a,en.a,[]),l.Db(1073742336,ln.h,ln.h,[]),l.Db(1073742336,L.x,L.x,[]),l.Db(1073742336,L.n,L.n,[]),l.Db(1073742336,an.a,an.a,[]),l.Db(1073742336,on.c,on.c,[]),l.Db(1073742336,cn.a,cn.a,[]),l.Db(1073742336,rn.a,rn.a,[]),l.Db(1073742336,bn.e,bn.e,[]),l.Db(1073742336,Y.c,Y.c,[]),l.Db(1073742336,s.a,s.a,[]),l.Db(1073742336,A.e,A.e,[]),l.Db(1073742336,S.c,S.c,[]),l.Db(1073742336,gn.a,gn.a,[]),l.Db(1073742336,_n.a,_n.a,[]),l.Db(1073742336,pn.d,pn.d,[]),l.Db(1073742336,dn.a,dn.a,[]),l.Db(1073742336,Z.c,Z.c,[]),l.Db(1073742336,Z.f,Z.f,[]),l.Db(1073742336,Z.g,Z.g,[]),l.Db(1073742336,Z.k,Z.k,[]),l.Db(1073742336,Z.l,Z.l,[]),l.Db(1073742336,Z.r,Z.r,[]),l.Db(1073742336,Z.t,Z.t,[]),l.Db(1073742336,Z.x,Z.x,[]),l.Db(1073742336,Z.z,Z.z,[]),l.Db(1073742336,Z.D,Z.D,[]),l.Db(1073742336,Z.G,Z.G,[]),l.Db(1073742336,Z.J,Z.J,[]),l.Db(1073742336,Z.M,Z.M,[]),l.Db(1073742336,Z.P,Z.P,[]),l.Db(1073742336,Z.U,Z.U,[]),l.Db(1073742336,Z.X,Z.X,[]),l.Db(1073742336,Z.Y,Z.Y,[]),l.Db(1073742336,Z.Z,Z.Z,[]),l.Db(1073742336,Z.y,Z.y,[]),l.Db(1073742336,un.h,un.h,[]),l.Db(1073742336,$.i,$.i,[]),l.Db(1073742336,sn.p,sn.p,[]),l.Db(1073742336,mn.m,mn.m,[]),l.Db(1073742336,U.j,U.j,[]),l.Db(1073742336,fn.b,fn.b,[]),l.Db(1073742336,fn.a,fn.a,[]),l.Db(1073742336,hn.b,hn.b,[]),l.Db(1073742336,Pn.b,Pn.b,[]),l.Db(1073742336,On.i,On.i,[]),l.Db(1073742336,Mn.b,Mn.b,[]),l.Db(1073742336,V.d,V.d,[]),l.Db(1073742336,X.a,X.a,[]),l.Db(1073742336,Cn.a,Cn.a,[]),l.Db(1073742336,o,o,[]),l.Db(256,L.e,L.i,[]),l.Db(1024,h.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);