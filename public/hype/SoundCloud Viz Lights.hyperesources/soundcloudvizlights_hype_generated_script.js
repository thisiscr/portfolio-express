//	HYPE.documents["SoundCloud Viz Lights"]

(function(){(function k(){var h="SoundCloud%20Viz%20Lights.hyperesources",e="SoundCloud Viz Lights",d="soundcloudvizlights_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("soundcloudvizlights_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&null==window.HYPE_332)null==window.HYPE_dtl_332?(window.HYPE_dtl_332=[],window.HYPE_dtl_332.push(k),e=document.getElementsByTagName("head")[0],d=document.createElement("script"),
b=navigator.userAgent.match(/MSIE (\d+\.\d+)/),b=parseFloat(b&&b[1])||null,d.type="text/javascript",d.src=h+"/"+(null!=b&&10>b?"HYPE.ie.js":"HYPE.js")+"?hype_version=332",e.appendChild(d)):window.HYPE_dtl_332.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=
d;a=!0;break}if(!1==a)return}for(var a=new HYPE_332,c=[],c=[{name:"rigVisualsToSounds",source:"function(hypeDocument, element, event) {\t\n\t//animate  purple glow\n\tvar timeInTimeline = window.timelineTime;\n\thypeDocument.goToTimeInTimelineNamed(timeInTimeline, 'Animate Timeline');\n\thypeDocument.continueTimelineNamed('Animate Timeline', hypeDocument.kDirectionReverse);\n\t\n\tif (window.opacityToggle == 'on') {\n\t\t//if true, toggle opacity on. else off\n\t\thypeDocument.goToTimeInTimelineNamed(2, 'Opacity Timeline');\n\t\thypeDocument.continueTimelineNamed('Opacity Timeline', hypeDocument.kDirectionReverse);\n\t\twindow.opacityToggle = null;\n\t} else if (window.opacityToggle == 'off') {\n\t\thypeDocument.goToTimeInTimelineNamed(0, 'Opacity Timeline');\n\t\thypeDocument.continueTimelineNamed('Opacity Timeline', hypeDocument.kDirectionForward);\n\t\twindow.opacityToggle = null;\n\t}\n\t\n}",identifier:"21"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({R:5,S:0,aI:0,T:0,bG:3,aJ:0,bH:2,aK:0,X:0,bI:3,aL:0,Y:1,bJ:3,bK:3,bL:3,a:0,b:0,c:0,d:0,aS:0,e:3,bQ:0,aT:0,f:2,g:5,bR:2,aU:0,bS:"NumberValueTransformer",aV:0,aW:3,A:5,l:2,aX:0,B:5,m:5,C:5,aY:2,n:5,D:5,E:0,aZ:0,G:5,t:0,bA:5,RotationAngle:2,tX:4,bB:0,M:0,N:0,bC:0,tY:4,O:0,P:0,Q:0});a.z_b({"3":{p:1,n:"SoundCloud-Viz-Lights_0003_Base-Layer---Dry.png",g:"19",t:"@1x"},"1":{p:1,n:"SoundCloud-Viz-Lights_0001_Base-Layer---Wet-%28Glow%29.png",g:"8",t:"@1x"},"4":{p:1,n:"SoundCloud-Viz-Lights_0004_Purple-Glow---Dodged.png",g:"24",t:"@1x"},"2":{p:1,n:"SoundCloud-Viz-Lights_0000_Star-Effects.png",g:"13",t:"@1x"},"0":{p:1,n:"SoundCloud-Viz-Lights_0002_Base-Layer---Wet-%28Shadow%29.png",g:"6",t:"@1x"}});a.z_c([]);a.z_d([{x:0,p:"600px",c:"#FFFFFF",A:{a:[{b:"22",p:3,z:false},{b:"30",p:9,i:2}]},v:{"7":{h:"6",p:"no-repeat",x:"visible",a:9,q:"100% 100%",b:8,j:"absolute",r:"inline",c:430,k:"div",z:"2",d:206,bF:"32",e:"1.000000"},"32":{k:"div",x:"visible",c:442,d:214,z:"7",a:73,j:"absolute",b:72},"14":{h:"13",p:"no-repeat",a:28,x:"visible",q:"100% 100%",b:41,j:"absolute",r:"inline",c:404,k:"div",z:"4",d:150,bF:"32",bL:"0.000000",e:"1.000000"},"9":{h:"8",p:"no-repeat",a:0,bS:"36",q:"100% 100%",x:"visible",j:"absolute",r:"inline",c:442,k:"div",z:"3",d:205,bF:"32",b:0,e:"1.000000"},"27":{k:"div",x:"hidden",c:613,d:243,z:"2",a:-10,bS:"36",j:"absolute",b:-9},"25":{p:"no-repeat",b:80,c:406,q:"100% 100%",bS:"36",d:406,r:"inline",bK:"1.000000",e:"1.000000",bJ:"1.000000",bL:"20.000000",f:"0deg",h:"24",i:"pGlow",bF:"27",aI:0,j:"absolute",x:"visible",k:"div",aJ:0,z:"2",aK:0,tX:"50%",bI:"4.256899",a:104,aL:0,tY:"50%"},"20":{h:"19",p:"no-repeat",x:"visible",a:9,q:"100% 100%",b:8,j:"absolute",r:"inline",c:425,k:"div",z:"1",d:188,bF:"32",e:"1.000000"}},n:"Visualize",T:{"22":{i:"22",n:"JS Timeline",z:0.05,a:[{f:"2",p:2,y:0.02,z:0.03,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"21"}]},o:"22"},{f:"2",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"22",p:3,z:false},{p:4,h:"21"}]},o:"22"}],f:30},"30":{i:"30",n:"Opacity Timeline",z:2,a:[{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"20"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"9"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"14"},{f:"2",y:0,z:2,i:"e",e:"0.000000",s:"1.000000",o:"25"},{y:2,i:"e",s:"0.000000",z:0,o:"20",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"9",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"7",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"14",f:"2"},{y:2,i:"e",s:"0.000000",z:0,o:"25",f:"2"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,a:[],f:30},"23":{i:"23",n:"Animate Timeline",z:1,a:[{f:"2",y:0,z:1,i:"a",e:-15,s:104,o:"25"},{f:"2",y:0,z:1,i:"b",e:-39,s:80,o:"25"},{f:"2",y:0,z:1,i:"c",e:644,s:406,o:"25"},{f:"2",y:0,z:1,i:"d",e:644,s:406,o:"25"},{f:"2",y:0,z:1,i:"bJ",e:"2.000000",s:"1.000000",o:"25"},{f:"2",y:0,z:1,i:"bK",e:"1.171469",s:"1.000000",o:"25"},{y:1,i:"a",s:-15,z:0,o:"25",f:"2"},{y:1,i:"b",s:-39,z:0,o:"25",f:"2"},{y:1,i:"c",s:644,z:0,o:"25",f:"2"},{y:1,i:"d",s:644,z:0,o:"25",f:"2"},{y:1,i:"bJ",s:"2.000000",z:0,o:"25",f:"2"},{y:1,i:"bK",s:"1.171469",z:0,o:"25",f:"2"}],f:30}},o:"1"}]);a.z_q(600,400);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);
a.z_i(0);a.z_j(false);a.z_k(false);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();