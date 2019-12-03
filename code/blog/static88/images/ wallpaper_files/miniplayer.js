(function(g){var window=this;var K5=function(a,b){g.V.call(this,{B:"button",U:["ytp-miniplayer-expand-watch-page-button","ytp-button"],L:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},J:[g.X?{B:"div",U:["ytp-icon","ytp-icon-expand-watch-page"]}:{B:"svg",L:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},J:[{B:"g",L:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},J:[{B:"g",L:{transform:"translate(-1.000000, -3.000000)"},J:[{B:"polygon",L:{points:"0 0 24 0 24 24 0 24"}},
{B:"path",L:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.l=a;this.ca("click",this.o,this);this.updateValue("title",g.RL(a,"Open video page","i"));g.Di(this,g.mM(b.Va(),this.element))},L5=function(a){g.TC.call(this,{B:"div",
G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.RF);this.K(a,"onStateChange",this.JM)},M5=function(a){g.IO.call(this,a);
this.g=new L5(this.player);this.g.hide();g.JK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(K5,g.V);K5.prototype.o=function(){this.l.ia("onExpandMiniplayer")};g.r(L5,g.TC);g.h=L5.prototype;
g.h.show=function(){this.l=new g.vn(this.QF,null,this);this.l.start();if(!this.H){this.C=new g.VP(this.player,this);g.F(this,this.C);g.JK(this.player,this.C.element,4);this.C.A=.6;this.P=new g.XO(this.player);g.F(this,this.P);this.o=new g.V({B:"div",G:"ytp-miniplayer-scrim"});g.F(this,this.o);this.o.g(this.element);this.K(this.o.element,"click",this.iz);var a=new g.V({B:"button",U:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},J:[g.hL()]});g.F(this,a);a.g(this.o.element);this.K(a.element,
"click",this.Ex);a=new K5(this.player,this);g.F(this,a);a.g(this.o.element);this.u=new g.V({B:"div",G:"ytp-miniplayer-controls"});g.F(this,this.u);this.u.g(this.o.element);this.K(this.u.element,"click",this.iz);var b=new g.V({B:"div",G:"ytp-miniplayer-button-container"});g.F(this,b);b.g(this.u.element);a=new g.V({B:"div",G:"ytp-miniplayer-play-button-container"});g.F(this,a);a.g(this.u.element);var c=new g.V({B:"div",G:"ytp-miniplayer-button-container"});g.F(this,c);c.g(this.u.element);this.M=new g.TM(this.player,
this,!1);g.F(this,this.M);this.M.g(b.element);b=new g.QM(this.player,this);g.F(this,b);b.g(a.element);this.I=new g.TM(this.player,this,!0);g.F(this,this.I);this.I.g(c.element);this.F=new g.oO(this.player,this);g.F(this,this.F);this.F.g(this.o.element);this.A=new g.bN(this.player,this);g.F(this,this.A);g.JK(this.player,this.A.element,4);this.D=new g.V({B:"div",G:"ytp-miniplayer-buttons"});g.F(this,this.D);g.JK(this.player,this.D.element,4);a=new g.V({B:"button",U:["ytp-miniplayer-close-button","ytp-button"],
L:{"aria-label":"Close"},J:[g.hL()]});g.F(this,a);a.g(this.D.element);this.K(a.element,"click",this.Ex);a=new g.V({B:"button",U:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},J:[g.vL()]});g.F(this,a);a.g(this.D.element);this.K(a.element,"click",this.EK);this.K(this.player,"presentingplayerstatechange",this.SF);this.K(this.player,"appresize",this.Ra);this.K(this.player,"fullscreentoggled",this.Ra);this.Ra();this.H=!0}0!=this.player.getPlayerState()&&g.TC.prototype.show.call(this);
this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.TC.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.V=function(){this.l&&(this.l.dispose(),this.l=void 0);g.TC.prototype.V.call(this)};
g.h.Ex=function(){this.player.stopVideo();this.player.ia("onCloseMiniplayer")};
g.h.EK=function(){this.player.playVideo()};
g.h.iz=function(a){a.target!=this.o.element&&a.target!=this.u.element||this.player.ia("onExpandMiniplayer")};
g.h.RF=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g)};
g.h.QF=function(){this.A.Nc();this.F.Nc();this.l&&this.l.start()};
g.h.SF=function(a){g.T(a.state,32)&&this.C.hide()};
g.h.Ra=function(){var a=this.A,b=g.vK(this.player).getPlayerSize().width;a.Ca=0;a.A=b;a.D=!1;g.dN(a)};
g.h.JM=function(a){this.player.app.F.g&&(0==a?this.hide():this.show())};
g.h.Va=function(){return this.C};
g.h.Xb=function(){return!1};
g.h.rg=function(){return!1};
g.h.hi=function(){return!1};
g.h.Es=function(){};
g.h.Tg=function(){};
g.h.mj=function(){};
g.h.nn=function(){return null};
g.h.ir=function(){return new g.Yf(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.yi=function(a,b,c,d,e){var f=0,k=d=0,l=g.vg(a);if(b){c=g.Fn(b,"ytp-prev-button")||g.Fn(b,"ytp-next-button");var m=g.Fn(b,"ytp-play-button"),n=g.Fn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.sg(b,this.element),k=b.x,f=b.y-12):n&&(f=g.sg(b,this.element),k=g.vg(b),k=f.x-l.width+k.width,f=f.y-20)}else k=c-l.width/2,d=25+(e||0);b=g.vK(this.player).getPlayerSize().width;e=f+(e||0);l=g.nd(k,0,b-l.width);e?(a.style.top=e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");
a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.jr=function(){};
g.h.Qh=function(){};g.r(M5,g.IO);M5.prototype.init=function(){};
M5.prototype.load=function(){this.player.hideControls();this.g.show()};
M5.prototype.unload=function(){this.player.showControls();this.g.hide()};g.QO.miniplayer=M5;})(_yt_player);
