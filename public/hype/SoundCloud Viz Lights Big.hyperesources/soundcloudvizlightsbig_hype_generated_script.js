//	HYPE.documents["SoundCloud Viz Lights Big"]

(function(){(function k(){var h="SoundCloud%20Viz%20Lights%20Big.hyperesources",e="SoundCloud Viz Lights Big",d="soundcloudvizlightsbig_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("soundcloudvizlightsbig_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&null==window.HYPE_332)null==window.HYPE_dtl_332?(window.HYPE_dtl_332=[],window.HYPE_dtl_332.push(k),e=document.getElementsByTagName("head")[0],d=document.createElement("script"),
b=navigator.userAgent.match(/MSIE (\d+\.\d+)/),b=parseFloat(b&&b[1])||null,d.type="text/javascript",d.src=h+"/"+(null!=b&&10>b?"HYPE.ie.js":"HYPE.js")+"?hype_version=332",e.appendChild(d)):window.HYPE_dtl_332.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=
d;a=!0;break}if(!1==a)return}for(var a=new HYPE_332,c=[],c=[{name:"rigVisualsToSoundsBig",source:"function(hypeDocument, element, event) {\t\n\t//animate  purple glow\n\tvar timeInTimeline = window.timelineTime;\n\thypeDocument.goToTimeInTimelineNamed(timeInTimeline, 'Animate Timeline');\n\thypeDocument.continueTimelineNamed('Animate Timeline', hypeDocument.kDirectionReverse);\n\t\n\tif (window.opacityToggleBig == 'on') {\n\t\t//if true, toggle opacity on. else off\n\t\thypeDocument.goToTimeInTimelineNamed(2, 'Opacity Timeline');\n\t\thypeDocument.continueTimelineNamed('Opacity Timeline', hypeDocument.kDirectionReverse);\n\t\twindow.opacityToggleBig = null;\n\t} else if (window.opacityToggleBig == 'off') {\n\t\thypeDocument.goToTimeInTimelineNamed(0, 'Opacity Timeline');\n\t\thypeDocument.continueTimelineNamed('Opacity Timeline', hypeDocument.kDirectionForward);\n\t\twindow.opacityToggleBig = null;\n\t}\n\t\n}",identifier:"21"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({R:5,S:0,aI:0,T:0,bG:3,aJ:0,bH:2,aK:0,X:0,bI:3,aL:0,Y:1,bJ:3,bK:3,bL:3,a:0,b:0,c:0,d:0,aS:0,e:3,bQ:0,aT:0,f:2,g:5,bR:2,aU:0,bS:"NumberValueTransformer",aV:0,aW:3,A:5,l:2,aX:0,B:5,m:5,C:5,aY:2,n:5,D:5,E:0,aZ:0,G:5,t:0,bA:5,RotationAngle:2,tX:4,bB:0,M:0,N:0,bC:0,tY:4,O:0,P:0,Q:0});a.z_b({"0":{p:1,n:"SoundCloud-Viz-Lights_0004_Purple-Glow---Dodged.png",g:"24",t:"@1x"},"1":{p:1,n:"Purple%20Glow%202.png",g:"40",t:"@1x"}});a.z_c([]);a.z_d([{x:0,p:"600px",c:"#000000",A:{a:[{b:"22",p:3,z:false},{b:"30",p:9,i:2}]},v:{"46":{h:"40",p:"no-repeat",a:-237,bS:"155",q:"100% 100%",x:"visible",j:"absolute",r:"inline",c:367,k:"div",z:"3",d:367,bF:"44",b:271,e:"1.000000",bK:"1.000000",bJ:"1.000000"},"25":{p:"no-repeat",b:228,c:406,q:"100% 100%",bS:"158",d:406,r:"none",bK:"1.000000",e:"1.000000",bJ:"1.000000",bL:"20.000000",f:"0deg",h:"24",i:"pGlowL",bF:"27",aI:0,j:"absolute",x:"visible",k:"div",aJ:0,z:"2",aK:0,tX:"50%",bI:"4.256899",a:-221,aL:0,tY:"50%"},"45":{p:"no-repeat",b:228,c:406,q:"100% 100%",bS:"155",d:406,r:"none",bK:"1.000000",e:"1.000000",bJ:"1.000000",bL:"20.000000",f:"0deg",h:"24",bF:"44",aI:0,j:"absolute",x:"visible",k:"div",aJ:0,z:"2",aK:0,tX:"50%",bI:"4.256899",a:-221,aL:0,tY:"50%"},"41":{h:"40",p:"no-repeat",a:-237,bS:"158",q:"100% 100%",x:"visible",j:"absolute",r:"inline",c:367,k:"div",z:"3",d:367,bF:"27",b:271,e:"1.000000",bK:"1.000000",bJ:"1.000000"},"27":{x:"hidden",a:0,bJ:"1.000000",bS:"158",j:"absolute",b:148,c:559,k:"div",bK:"1.000000",d:392,z:"2",e:"0.750000"},"44":{bR:"0deg",x:"hidden",a:441,bS:"155",b:148,j:"absolute",bJ:"1.000000",c:559,k:"div",z:"4",d:392,bK:"1.000000",aY:"180deg",e:"0.750000",f:"0deg"}},n:"Visualize",T:{"22":{i:"22",n:"JS Timeline",z:0.05,a:[{f:"2",p:2,y:0.02,z:0.03,i:"ActionHandler",e:{a:[{b:"22",p:3,z:false},{p:4,h:"21"}]},s:{a:[{p:4,h:"21"}]},o:"22"},{f:"2",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"22",p:3,z:false},{p:4,h:"21"}]},o:"22"}],f:30},"30":{i:"30",n:"Opacity Timeline",z:2,a:[{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"25"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"41"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"45"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"46"},{y:2,i:"e",s:"0.000000",z:0,o:"41",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"45",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"46",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"25",f:"2"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,a:[],f:30},"23":{i:"23",n:"Animate Timeline",z:1,a:[{f:"2",y:0,z:1,i:"b",e:152,s:270,o:"25"},{f:"2",y:0,z:1,i:"d",e:601,s:406,o:"25"},{f:"2",y:0,z:1,i:"bK",e:"1.171469",s:"1.000000",o:"25"},{f:"2",y:0,z:1,i:"bJ",e:"2.000000",s:"1.000000",o:"25"},{f:"2",y:0,z:1,i:"a",e:-340,s:-262,o:"25"},{f:"2",y:0,z:1,i:"c",e:601,s:406,o:"25"},{f:"2",y:0,z:1,i:"b",e:152,s:270,o:"41"},{f:"2",y:0,z:1,i:"d",e:601,s:406,o:"41"},{f:"2",y:0,z:1,i:"a",e:-340,s:-262,o:"41"},{f:"2",y:0,z:1,i:"bK",e:"1.171469",s:"1.000000",o:"41"},{f:"2",y:0,z:1,i:"c",e:601,s:406,o:"41"},{f:"2",y:0,z:1,i:"bK",e:"1.171469",s:"1.000000",o:"45"},{f:"2",y:0,z:1,i:"d",e:601,s:406,o:"45"},{f:"2",y:0,z:1,i:"bJ",e:"2.000000",s:"1.000000",o:"45"},{f:"2",y:0,z:1,i:"a",e:-340,s:-262,o:"45"},{f:"2",y:0,z:1,i:"b",e:152,s:270,o:"45"},{f:"2",y:0,z:1,i:"c",e:601,s:406,o:"45"},{f:"2",y:0,z:1,i:"bK",e:"1.171469",s:"1.000000",o:"46"},{f:"2",y:0,z:1,i:"d",e:601,s:406,o:"46"},{f:"2",y:0,z:1,i:"a",e:-340,s:-262,o:"46"},{f:"2",y:0,z:1,i:"b",e:152,s:270,o:"46"},{f:"2",y:0,z:1,i:"c",e:601,s:406,o:"46"},{y:1,i:"b",s:152,z:0,o:"41",f:"2"},{y:1,i:"bK",s:"1.171469",z:0,o:"41",f:"2"},{y:1,i:"a",s:-340,z:0,o:"41",f:"2"},{y:1,i:"d",s:601,z:0,o:"41",f:"2"},{y:1,i:"c",s:601,z:0,o:"41",f:"2"},{y:1,i:"bK",s:"1.171469",z:0,o:"45",f:"2"},{y:1,i:"d",s:601,z:0,o:"45",f:"2"},{y:1,i:"bJ",s:"2.000000",z:0,o:"45",f:"2"},{y:1,i:"a",s:-340,z:0,o:"45",f:"2"},{y:1,i:"b",s:152,z:0,o:"45",f:"2"},{y:1,i:"c",s:601,z:0,o:"45",f:"2"},{y:1,i:"bK",s:"1.171469",z:0,o:"46",f:"2"},{y:1,i:"d",s:601,z:0,o:"46",f:"2"},{y:1,i:"a",s:-340,z:0,o:"46",f:"2"},{y:1,i:"b",s:152,z:0,o:"46",f:"2"},{y:1,i:"c",s:601,z:0,o:"46",f:"2"},{y:1,i:"c",s:601,z:0,o:"25",f:"2"},{y:1,i:"bJ",s:"2.000000",z:0,o:"25",f:"2"},{y:1,i:"b",s:152,z:0,o:"25",f:"2"},{y:1,i:"a",s:-340,z:0,o:"25",f:"2"},{y:1,i:"bK",s:"1.171469",z:0,o:"25",f:"2"},{y:1,i:"d",s:601,z:0,o:"25",f:"2"}],f:30}},o:"1"}]);a.z_q(1000,540);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);
a.z_i(0);a.z_j(false);a.z_k(false);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();
