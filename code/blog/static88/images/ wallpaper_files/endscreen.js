(function(g){var window=this;var s4=function(a,b,c){var d=b.sa();g.K(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.yc(c?c:"mqdefault.jpg");var f=b instanceof g.ZA&&b.lengthSeconds?g.VK(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.VD(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.ZA?b.ra:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Zi||g.FL("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.Wh(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.XD&&(d.playlist_length=b.getLength());a.update(d)},t4=function(a,b){g.TC.call(this,{B:"div",
U:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},u4=function(a){g.V.call(this,{B:"div",
U:["ytp-upnext","ytp-player-content"],L:{"aria-label":"{{aria_label}}"},J:[{B:"div",G:"ytp-cued-thumbnail-overlay-image",L:{style:"{{background}}"}},{B:"span",G:"ytp-upnext-top",J:[{B:"span",G:"ytp-upnext-header",T:"Up Next"},{B:"span",G:"ytp-upnext-title",T:"{{title}}"},{B:"span",G:"ytp-upnext-author",T:"{{author}}"}]},{B:"a",G:"ytp-upnext-autoplay-icon",L:{role:"button",href:"{{url}}","aria-label":"Play next video"},J:[{B:"svg",L:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},J:[{B:"circle",
G:"ytp-svg-autoplay-circle",L:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{B:"circle",G:"ytp-svg-autoplay-ring",L:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{B:"path",G:"ytp-svg-fill",L:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{B:"span",G:"ytp-upnext-bottom",J:[{B:"span",G:"ytp-upnext-cancel"},{B:"span",G:"ytp-upnext-paused",T:"Autoplay is paused"}]}]});
this.A=null;var b=this.i["ytp-upnext-cancel"];this.A=new g.V({B:"button",U:["ytp-upnext-cancel-button","ytp-button"],L:{tabindex:"0","aria-label":"Cancel autoplay"},T:"Cancel"});g.F(this,this.A);this.A.ca("click",this.sI,this);this.A.g(b);this.l=a;this.I=this.i["ytp-svg-autoplay-ring"];this.D=this.C=this.o=this.u=null;this.F=new g.I(this.Nl,5E3,this);g.F(this,this.F);this.H=0;this.K(this.i["ytp-upnext-autoplay-icon"],"click",this.fK);this.Gy();this.K(a,"autonavvisibility",this.Gy);this.K(a,"mdxnowautoplaying",
this.zJ);this.K(a,"mdxautoplaycanceled",this.AJ);this.K(a,"mdxautoplayupnext",this.WA);3==this.l.getPresentingPlayerType()&&(a=(a=g.wK(g.qK(this.l)))?a.iD():null)&&this.WA(a)},v4=function(a,b){if(!a.o){g.kp("a11y-announce","Up Next "+a.u.title);
a.H=(0,g.hr)();a.o=new g.I((0,g.x)(a.Uo,a,b),25);a.Uo(b);var c=b||g.O(g.W(a.l).experiments,"autoplay_time")||1E4;a.l.ia("onAutonavCoundownStarted",c)}g.Hn(a.element,"ytp-upnext-autoplay-paused")},x4=function(a){w4(a);
a.H=(0,g.hr)();a.Uo();g.J(a.element,"ytp-upnext-autoplay-paused")},w4=function(a){a.o&&(a.o.dispose(),a.o=null)},y4=function(a,b){b=void 0===b?!1:b;
if(g.N(g.W(a.l).experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.u.sa(),a.Nl(),a.C=new Notification("Up Next",{body:c.title,icon:c.yc()}),a.D=a.K(a.C,"click",a.XJ),a.F.start())}w4(a);a.l.nextVideo(!1,b)},z4=function(a){t4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.l=new g.V({B:"div",G:"ytp-subscribe-card",J:[{B:"img",G:"ytp-author-image",L:{src:b.Sd}},{B:"div",G:"ytp-subscribe-card-right",J:[{B:"div",G:"ytp-author-name",T:b.author},{B:"div",G:"html5-subscribe-button-container"}]}]});g.F(this,this.l);this.l.g(this.element);this.o=new g.NP("Subscribe",null,"Unsubscribe",null,!0,!1,b.Pf,b.subscribed,"trailer-endscreen",null,null,a);g.F(this,this.o);this.o.g(this.l.i["html5-subscribe-button-container"]);this.hide()},A4=function(a){var b=
g.W(a),c=g.ax||g.eg?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.g&&e.push("ytp-videowall-show-text");g.V.call(this,{B:"a",U:e,L:{href:"{{url}}",target:d?b.u:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},J:[{B:"div",G:"ytp-videowall-still-image",L:{style:"{{background}}"}},{B:"span",G:"ytp-videowall-still-info",J:[{B:"span",G:"ytp-videowall-still-info-bg",J:[{B:"span",G:"ytp-videowall-still-info-content",L:c,J:[{B:"span",G:"ytp-videowall-still-info-title",T:"{{title}}"},{B:"span",G:"ytp-videowall-still-info-author",
T:"{{author_and_views}}"},{B:"span",G:"ytp-videowall-still-info-live",T:"Live"},{B:"span",G:"ytp-videowall-still-info-duration",T:"{{duration}}"}]}]}]},{B:"span",U:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],J:[{B:"span",G:"ytp-videowall-still-listlabel-icon"},"Playlist",{B:"span",G:"ytp-videowall-still-listlabel-length",J:[" (",{B:"span",T:"{{playlist_length}}"},")"]}]},{B:"span",U:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],J:[{B:"span",G:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{B:"span",G:"ytp-videowall-still-listlabel-length",T:" (50+)"}]}]});this.A=d;this.l=a;this.o=null;this.u=new g.ls(this);g.F(this,this.u);this.ca("click",this.D);this.ca("keypress",this.F);this.u.K(a,"videodatachange",this.C);g.W(a).D&&g.jR(a.app.S,this.element,this);this.C()},B4=function(a){g.MK(a.l,a.element);
var b=a.o.sa().videoId,c=a.o.getPlaylistId();g.cS(a.l.app,b,a.o.Db,c,void 0,void 0)},C4=function(a){t4.call(this,a,"videowall-endscreen");
this.C=a;this.A=0;this.o=[];this.D=this.O=this.u=null;this.F=this.P=!1;this.M=null;this.ba=new g.ls(this);g.F(this,this.ba);this.H=new g.I(g.Ra(g.J,this.element,"ytp-show-tiles"),0);g.F(this,this.H);var b=new g.V({B:"button",U:["ytp-button","ytp-endscreen-previous"],L:{"aria-label":"Previous"},J:[g.cL()]});g.F(this,b);b.g(this.element);b.ca("click",this.IF,this);this.I=new g.OC({B:"div",G:"ytp-endscreen-content"});g.F(this,this.I);this.I.g(this.element);b=new g.V({B:"button",U:["ytp-button","ytp-endscreen-next"],
L:{"aria-label":"Next"},J:[g.dL()]});g.F(this,b);b.g(this.element);b.ca("click",this.HF,this);this.l=new u4(a);g.F(this,this.l);g.JK(this.player,this.l.element,4);this.hide()},D4=function(a){return g.KK(a.player)&&a.pu()&&!a.D},E4=function(a,b){return(0,g.he)(b.suggestions,function(c){c=g.GL(g.W(a.C),c);
g.F(a,c);return c})},F4=function(a){var b=a.Me();
b!=a.P&&(a.P=b,a.player.N("autonavvisibility"))},H4=function(a){g.IO.call(this,a);
this.g=null;this.i=new g.ls(this);g.F(this,this.i);this.l=g.W(a);G4(a)?this.g=new C4(this.player):this.l.Pa?this.g=new z4(this.player):this.g=new t4(this.player);g.F(this,this.g);g.JK(this.player,this.g.element,4);this.aA();this.i.K(a,"videodatachange",this.aA,this);this.i.K(a,g.UD("endscreen"),this.WE,this);this.i.K(a,"crx_endscreen",this.XE,this)},G4=function(a){a=g.W(a);
return a.Na&&!a.Pa};
g.r(t4,g.TC);t4.prototype.create=function(){this.created=!0};
t4.prototype.destroy=function(){this.created=!1};
t4.prototype.pu=function(){return!1};
t4.prototype.Me=function(){return!1};g.r(u4,g.V);g.h=u4.prototype;g.h.Nl=function(){this.C&&(this.F.stop(),this.Qa(this.D),this.D=null,this.C.close(),this.C=null)};
g.h.Gy=function(){g.SC(this,this.l.Me())};
g.h.XJ=function(){window.focus();this.Nl()};
g.h.hide=function(){g.V.prototype.hide.call(this)};
g.h.Uo=function(a){a=a||g.O(g.W(this.l).experiments,"autoplay_time")||1E4;var b=Math.min((0,g.hr)()-this.H,a);a=Math.min(b/a,1);this.I.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.l.getPresentingPlayerType()?y4(this,!0):this.o&&this.o.start()};
g.h.fK=function(a){!g.$d(this.A.element,g.xr(a))&&g.NL(a,this.l)&&y4(this)};
g.h.sI=function(){g.sK(this.l,!0)};
g.h.zJ=function(a){this.l.getPresentingPlayerType();this.show();v4(this,a)};
g.h.WA=function(a){this.l.getPresentingPlayerType();this.u&&this.u.sa().videoId==a.sa().videoId||(this.u=a,s4(this,a,"hqdefault.jpg"))};
g.h.AJ=function(){this.l.getPresentingPlayerType();w4(this);this.hide()};
g.h.V=function(){w4(this);this.Nl();g.V.prototype.V.call(this)};g.r(z4,t4);g.r(A4,g.V);A4.prototype.D=function(a){g.NL(a,this.l,this.A,this.o.Db||void 0)&&B4(this)};
A4.prototype.F=function(a){switch(a.keyCode){case 13:case 32:g.Cr(a)||(B4(this),g.Br(a))}};
A4.prototype.C=function(){var a=this.l.getVideoData(),b=g.W(this.l);this.A=a.Yb?!1:b.i};g.r(C4,t4);g.h=C4.prototype;g.h.create=function(){t4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.u=E4(this,a),this.O=a);this.Jf();this.ba.K(this.player,"appresize",this.Jf);this.ba.K(this.player,"onVideoAreaChange",this.Jf);this.ba.K(this.player,"videodatachange",this.JF);this.ba.K(this.player,"autonavchange",this.fr);this.ba.K(this.player,"autonavcancel",this.GF);a=this.O.autonavState;a!=this.M&&this.fr(a);this.ba.K(this.element,"transitionend",this.wL)};
g.h.destroy=function(){g.ns(this.ba);g.Fi(this.o);this.o=[];this.u=null;t4.prototype.destroy.call(this);g.Hn(this.element,"ytp-show-tiles");this.H.stop();this.M=this.O.autonavState};
g.h.pu=function(){return 1!=this.O.autonavState};
g.h.show=function(){t4.prototype.show.call(this);g.Hn(this.element,"ytp-show-tiles");g.W(this.player).g?g.zn(this.H):this.H.start();(this.F||this.D&&this.D!=this.O.clientPlaybackNonce)&&g.sK(this.player,!1);D4(this)?(F4(this),2==this.O.autonavState?g.N(g.W(this.player).experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?y4(this.l,!0):v4(this.l):3==this.O.autonavState&&x4(this.l)):(g.sK(this.player,!0),F4(this))};
g.h.hide=function(){t4.prototype.hide.call(this);x4(this.l);F4(this)};
g.h.wL=function(a){g.xr(a)==this.element&&this.Jf()};
g.h.Jf=function(){if(this.u&&this.u.length){g.J(this.element,"ytp-endscreen-paginate");var a=g.AK(this.C,!0,this.C.isFullscreen()),b=g.jD(this.C);b&&(b=b.Xb()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.u.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,w=b<=f-2&&n>=t*m,z=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&z)n-=q*m,e+=2;else if(w)n-=t*m,b+=2;else if(z)n-=
q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.nd(a.width/m||1,1,1.21);n*=g.nd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.I.element;g.ug(a,m,n);g.bg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.l;f=this.u[0];c.u=f;s4(c,f,"hqdefault.jpg");g.K(this.element,"ytp-endscreen-takeover",D4(this));F4(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=
c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),q=g.od(q+this.A,l),0!=t){w=this.o[c];w||(w=new A4(this.player),this.o[c]=w,a.appendChild(w.element));z=Math.floor(n*k/e);var C=Math.floor(m*f/b),E=Math.floor(n*(k+t)/e)-z-4,G=Math.floor(m*(f+t)/b)-C-4;g.jg(w.element,C,z);g.ug(w.element,G,E);g.bg(w.element,"transitionDelay",(k+f)/20+"s");g.K(w.element,"ytp-videowall-still-mini",1==t);g.K(w.element,"ytp-videowall-still-large",2<t);t=w;q=this.u[q];t.o!=q&&(t.o=q,s4(t,q,g.Fn(t.element,
"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg"),q=(q=q.Db)&&q.itct)&&(w=t.l,g.W(w).D&&g.lR(w.app.S,t.element,q));c++}g.K(this.element,"ytp-endscreen-paginate",c<l);for(b=this.o.length-1;b>=c;b--)e=this.o[b],g.Wd(e.element),g.Ei(e);this.o.length=c}};
g.h.JF=function(){var a=this.player.getVideoData();this.O!=a&&(this.A=0,this.u=E4(this,a),this.O=a,this.Jf())};
g.h.HF=function(){this.A+=this.o.length;this.Jf()};
g.h.IF=function(){this.A-=this.o.length;this.Jf()};
g.h.mE=function(){return!!this.l.o};
g.h.fr=function(a){1==a?(this.F=!1,this.D=this.O.clientPlaybackNonce,w4(this.l),this.Fa()&&this.Jf()):(this.F=!0,this.Fa()&&D4(this)&&(2==a?v4(this.l):3==a&&x4(this.l)))};
g.h.GF=function(a){if(a){for(a=0;a<this.o.length;a++)g.NK(this.C,this.o[a].element,!0);this.fr(1)}else this.D=null,this.F=!1;this.Jf()};
g.h.Me=function(){return this.Fa()&&D4(this)};g.r(H4,g.IO);g.h=H4.prototype;g.h.Gk=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!G4(this.player)||b;a=a.Oc||g.Ry(a.Ma);var c=g.zR(this.player.app);return b&&!a&&!c};
g.h.Me=function(){return this.g.Me()};
g.h.fE=function(){return this.Me()?this.g.mE():!1};
g.h.V=function(){g.FK(this.player,"endscreen");g.IO.prototype.V.call(this)};
g.h.load=function(){g.IO.prototype.load.call(this);this.g.show()};
g.h.unload=function(){g.IO.prototype.unload.call(this);this.g.hide();this.g.destroy()};
g.h.WE=function(a){this.Gk()&&(this.g.created||this.g.create(),"load"==a.getId()&&this.load())};
g.h.XE=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.aA=function(){g.FK(this.player,"endscreen");var a=this.player.getVideoData();a=new g.RD(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.F(this,a);var b=new g.RD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.F(this,b);g.CK(this.player,[a,b])};g.QO.endscreen=H4;})(_yt_player);
