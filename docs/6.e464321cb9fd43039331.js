(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9b7D":function(t,e,s){"use strict";s.r(e),s.d(e,"DeliveryStatusModule",(function(){return p}));var a=s("ofXK"),i=s("tyNb"),r=s("fXoL"),c=s("HDdC");let d=(()=>{class t{constructor(){this.deliveryStatus=[{id:1,customerName:"Leanne Graham",status:"packed"},{id:2,customerName:"Ervin Howell",status:"shipped"},{id:3,customerName:"Clementine Bauch",status:"delivered"},{id:4,customerName:"Patricia Lebsack",status:"failed"},{id:5,customerName:"Chelsey Dietrich",status:"canceled"},{id:6,customerName:"Mrs. Dennis Schulist",status:"packed"},{id:7,customerName:"Kurtis Weissnat",status:"shipped"},{id:8,customerName:"Nicholas Runolfsdottir V",status:"delivered"},{id:9,customerName:"Glenna Reichert",status:"failed"},{id:10,customerName:"Clementina DuBuque",status:"canceled"},{id:11,customerName:"Leanne Graham2",status:"packed"},{id:12,customerName:"Ervin Howell2",status:"packed"},{id:13,customerName:"Clementine Bauch2",status:"shipped"},{id:14,customerName:"Patricia Lebsack2",status:"shipped"},{id:15,customerName:"Chelsey Dietrich2",status:"packed"},{id:16,customerName:"Mrs. Dennis Schulist2",status:"packed"},{id:17,customerName:"Kurtis Weissnat2",status:"shipped"},{id:18,customerName:"Nicholas Runolfsdottir V2",status:"shipped"},{id:19,customerName:"Glenna Reichert2",status:"packed"},{id:20,customerName:"Clementina DuBuque2",status:"delivered"}]}getDeliveryStatus(){return c.a.create(t=>{t.next(this.deliveryStatus)})}getDeliveryStatusByStatus(t){return c.a.create(e=>{let s=this.deliveryStatus.filter(e=>e.status==t);e.next(s)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=s("Qp9N");function n(t,e){if(1&t&&(r.Hb(0,"tr"),r.Hb(1,"td"),r.Hb(2,"a",3),r.bc(3),r.Gb(),r.Gb(),r.Hb(4,"td"),r.bc(5),r.Gb(),r.Gb()),2&t){const t=e.$implicit;r.ub(2),r.Ub("routerLink","/Customers/",t.id,""),r.ub(1),r.cc(t.customerName),r.ub(2),r.cc(t.status)}}const b=[{path:"delivery-status",component:(()=>{class t{constructor(t,e){this.deliveryStatusService=t,this.router=e}ngOnInit(){this.deliveryStatusService.getDeliveryStatus().subscribe(t=>{this.data=t,this.packeddata=this.data.filter(t=>"packed"==t.status),this.shippeddata=this.data.filter(t=>"shipped"==t.status),this.delivereddata=this.data.filter(t=>"delivered"==t.status),this.faileddata=this.data.filter(t=>"failed"==t.status),this.canceleddata=this.data.filter(t=>"canceled"==t.status)})}openOrder(t,e){this.router.navigate(["/delivery-status/"+t],{state:e})}}return t.\u0275fac=function(e){return new(e||t)(r.Eb(d),r.Eb(i.b))},t.\u0275cmp=r.yb({type:t,selectors:[["app-delivery-status"]],decls:21,vars:8,consts:[[1,"routerOutlet"],[1,"container-fluid"],[1,"row"],[1,"col-lg-3","col-md-3","col-sm-2","col-xs-12"],[3,"data","cls","click"],[1,"title"]],template:function(t,e){1&t&&(r.Hb(0,"div",0),r.Hb(1,"h1"),r.bc(2,"Sales Activity"),r.Gb(),r.Hb(3,"div",1),r.Hb(4,"div",2),r.Hb(5,"div",3),r.Hb(6,"app-card",4),r.Nb("click",(function(){return e.openOrder("packed",e.packeddata)})),r.Hb(7,"span",5),r.bc(8,"Packed"),r.Gb(),r.Gb(),r.Gb(),r.Hb(9,"div",3),r.Hb(10,"app-card",4),r.Nb("click",(function(){return e.openOrder("shipped",e.shippeddata)})),r.Hb(11,"span"),r.bc(12,"Shipped"),r.Gb(),r.Gb(),r.Gb(),r.Hb(13,"div",3),r.Hb(14,"app-card",4),r.Nb("click",(function(){return e.openOrder("delivered",e.delivereddata)})),r.Hb(15,"span"),r.bc(16,"Delivered"),r.Gb(),r.Gb(),r.Gb(),r.Hb(17,"div",3),r.Hb(18,"app-card",4),r.Nb("click",(function(){return e.openOrder("canceled",e.canceleddata)})),r.Hb(19,"span"),r.bc(20,"Canceled"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Gb()),2&t&&(r.ub(6),r.Sb("data",e.packeddata)("cls","packed"),r.ub(4),r.Sb("data",e.shippeddata)("cls","shipped"),r.ub(4),r.Sb("data",e.delivereddata)("cls","delivered"),r.ub(4),r.Sb("data",e.canceleddata)("cls","canceled"))},directives:[u.a],styles:[""]}),t})()},{path:"delivery-status/:status",component:(()=>{class t{constructor(t,e,s){this.router=t,this.route=e,this.deliveryStatusService=s,this.items=this.router.getCurrentNavigation()&&this.router.getCurrentNavigation().extras.state,this.status=this.route.snapshot.params.status}ngOnInit(){this.deliveryStatusService.getDeliveryStatusByStatus(this.status).subscribe(t=>{this.items=t})}}return t.\u0275fac=function(e){return new(e||t)(r.Eb(i.b),r.Eb(i.a),r.Eb(d))},t.\u0275cmp=r.yb({type:t,selectors:[["app-delivery-status-detail"]],decls:11,vars:1,consts:[[1,"routerOutlet"],[1,"table-responsive"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,e){1&t&&(r.Hb(0,"div",0),r.Hb(1,"div",1),r.Hb(2,"table"),r.Hb(3,"thead"),r.Hb(4,"tr"),r.Hb(5,"th"),r.bc(6,"Customer Name"),r.Gb(),r.Hb(7,"th"),r.bc(8,"Status"),r.Gb(),r.Gb(),r.Gb(),r.Hb(9,"tbody"),r.ac(10,n,6,3,"tr",2),r.Gb(),r.Gb(),r.Gb(),r.Gb()),2&t&&(r.ub(10),r.Sb("ngForOf",e.items))},directives:[a.i,i.d],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275mod=r.Cb({type:t}),t.\u0275inj=r.Bb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(b)],i.e]}),t})();var l=s("FpXt");let p=(()=>{class t{}return t.\u0275mod=r.Cb({type:t}),t.\u0275inj=r.Bb({factory:function(e){return new(e||t)},imports:[[a.b,o,i.e,l.a]]}),t})()}}]);