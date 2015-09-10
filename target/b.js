!function(){function t(t){return t<-Math.PI?t+2*Math.PI:t>Math.PI?t-2*Math.PI:t}function e(t,e,a){var r=Math.max(0,Math.min(1,(a-t)/(e-t)));return r*r*(3-2*r)}function a(t){return(9>=t?"0":"")+t}function r(t,e){var a=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(a*a+r*r)}function o(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function n(t,e){bt.beginPath();for(var a=1,r=0;t&&r<t.length;++r){var o=t[r];o?(a?bt.moveTo(o[0],o[1]):bt.lineTo(o[0],o[1]),a=0):a=1}e||bt.closePath()}function i(t,e,a){var r=11*e*t.length;bt.translate(a?a>0?0:-r:-r/2,0);for(var o=0;o<t.length;o++)n(vt[t[o]]&&vt[t[o]].map(function(t){return t&&[4*e*t[0],5*e*t[1]]}),1),bt.lineJoin="round",bt.stroke(),bt.translate(11*e,0)}function s(t,e){var a,r=wt.VERTEX_SHADER,o=t;a=wt.createShader(r),wt.shaderSource(a,o),wt.compileShader(a);var n=a;if(ft&&!wt.getShaderParameter(a,wt.COMPILE_STATUS))throw wt.getShaderInfoLog(a);r=wt.FRAGMENT_SHADER,o=e,a=wt.createShader(r),wt.shaderSource(a,o),wt.compileShader(a);var i=a;if(ft&&!wt.getShaderParameter(a,wt.COMPILE_STATUS))throw wt.getShaderInfoLog(a);var s=wt.createProgram();if(wt.attachShader(s,n),wt.attachShader(s,i),wt.linkProgram(s),ft&&!wt.getProgramParameter(s,wt.LINK_STATUS))throw wt.getProgramInfoLog(s);wt.useProgram(s);var f=wt.getAttribLocation(s,"p");return wt.enableVertexAttribArray(f),wt.vertexAttribPointer(f,2,wt.FLOAT,!1,0,0),[s]}function f(t){wt.useProgram(t[0])}function h(t,e){return t[e]||(t[e]=wt.getUniformLocation(t[0],e))}function l(){var t=wt.createTexture();return wt.bindTexture(wt.TEXTURE_2D,t),wt.texParameteri(wt.TEXTURE_2D,wt.TEXTURE_MIN_FILTER,wt.LINEAR),wt.texParameteri(wt.TEXTURE_2D,wt.TEXTURE_MAG_FILTER,wt.LINEAR),wt.texParameteri(wt.TEXTURE_2D,wt.TEXTURE_WRAP_S,wt.CLAMP_TO_EDGE),wt.texParameteri(wt.TEXTURE_2D,wt.TEXTURE_WRAP_T,wt.CLAMP_TO_EDGE),t}function v(t,e){wt.bindTexture(wt.TEXTURE_2D,t),wt.texImage2D(wt.TEXTURE_2D,0,wt.RGBA,wt.RGBA,wt.UNSIGNED_BYTE,e)}function m(t,e){return wt.activeTexture(wt.TEXTURE0+e),wt.bindTexture(wt.TEXTURE_2D,t),e}function M(){var t=wt.createFramebuffer();wt.bindFramebuffer(wt.FRAMEBUFFER,t);var e=l();return wt.texImage2D(wt.TEXTURE_2D,0,wt.RGBA,Ft,Ut,0,wt.RGBA,wt.UNSIGNED_BYTE,null),wt.framebufferTexture2D(wt.FRAMEBUFFER,wt.COLOR_ATTACHMENT0,wt.TEXTURE_2D,e,0),[t,e]}function E(t){wt.bindFramebuffer(wt.FRAMEBUFFER,t[0])}function p(t){return t[1]}function A(){this.setSettings=function(t){for(var e=0;24>e;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var a=this.b+this.c+this.e;if(.18>a){var r=.18/a;this.b*=r,this.c*=r,this.e*=r}}}function b(){this._params=new A;var t,e,a,r,o,n,i,s,f,c,h,l;this.reset=function(){var t=this._params;r=100/(t.f*t.f+.001),o=100/(t.g*t.g+.001),n=1-t.h*t.h*t.h*.01,i=-t.i*t.i*t.i*1e-6,t.a||(h=.5-t.n/2,l=5e-5*-t.o),s=1+t.l*t.l*(t.l>0?-.9:10),f=0,c=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var r=this._params;return t=r.b*r.b*1e5,e=r.c*r.c*1e5,a=r.e*r.e*1e5+12,3*((t+e+a)/3|0)},this.synthWave=function(v,u){var m=this._params,d=1!=m.s||m.v,M=m.v*m.v*.1,E=1+3e-4*m.w,p=m.s*m.s*m.s*.1,g=1+1e-4*m.t,A=1!=m.s,b=m.x*m.x,T=m.g,R=m.q||m.r,S=m.r*m.r*m.r*.2,I=m.q*m.q*(m.q<0?-1020:1020),x=m.p?((1-m.p)*(1-m.p)*2e4|0)+32:0,D=m.d,y=m.j/2,P=m.k*m.k*.01,w=m.a,L=t,k=1/t,N=1/e,O=1/a,_=5/(1+m.u*m.u*20)*(.01+p);_>.8&&(_=.8),_=1-_;for(var G,C,F,U,B,Y,H=!1,W=0,X=0,q=0,K=0,j=0,V=0,J=0,z=0,Q=0,Z=0,$=new Array(1024),tt=new Array(32),et=$.length;et--;)$[et]=0;for(var et=tt.length;et--;)tt[et]=2*Math.random()-1;for(var et=0;u>et;et++){if(H)return et;if(x&&++Q>=x&&(Q=0,this.reset()),c&&++f>=c&&(c=0,r*=s),n+=i,r*=n,r>o&&(r=o,T>0&&(H=!0)),C=r,y>0&&(Z+=P,C*=1+Math.sin(Z)*y),C|=0,8>C&&(C=8),w||(h+=l,0>h?h=0:h>.5&&(h=.5)),++X>L)switch(X=0,++W){case 1:L=e;break;case 2:L=a}switch(W){case 0:q=X*k;break;case 1:q=1+2*(1-X*N)*D;break;case 2:q=1-X*O;break;case 3:q=0,H=!0}R&&(I+=S,F=0|I,0>F?F=-F:F>1023&&(F=1023)),d&&E&&(M*=E,1e-5>M?M=1e-5:M>.1&&(M=.1)),Y=0;for(var at=8;at--;){if(J++,J>=C&&(J%=C,3==w))for(var rt=tt.length;rt--;)tt[rt]=2*Math.random()-1;switch(w){case 0:B=h>J/C?.5:-.5;break;case 1:B=1-J/C*2;break;case 2:U=J/C,U=6.28318531*(U>.5?U-1:U),B=1.27323954*U+.405284735*U*U*(0>U?1:-1),B=.225*((0>B?-1:1)*B*B-B)+B;break;case 3:B=tt[Math.abs(32*J/C|0)]}d&&(G=V,p*=g,0>p?p=0:p>.1&&(p=.1),A?(j+=(B-V)*p,j*=_):(V=B,j=0),V+=j,K+=V-G,K*=1-M,B=K),R&&($[z%1024]=B,B+=$[(z-F+1024)%1024],z++),Y+=B}Y*=.125*q*b,v[et]=Y>=1?32767:-1>=Y?-32768:32767*Y|0}return u}}function T(){var t=window.innerWidth,e=window.innerHeight;if(t!=Xt||e!=qt){Xt=t,qt=e;var a=Nt/t,r=(Ot+20)/e;Wt=1/Math.max(a,r),!ct&&Wt>1&&(Wt=1),d.style.webkitTransform=d.style.transform="scale("+Wt+")",d.style.top=Math.max(10,Math.floor((e-(Ot+20)*Wt)/2))+"px",d.style.left=Math.max(0,Math.floor((t-Nt*Wt)/2))+"px"}}function R(t){ct&&!na&&d.webkitRequestFullScreen&&(d.webkitRequestFullScreen(),na=1);var e=c.getBoundingClientRect(),a=(t.clientX-e.left)/Wt,r=(t.clientY-e.top)/Wt;me?r>280&&400>r&&(a>Ft/2-180&&Ft/2-20>a?open("https://twitter.com/intent/tweet?hashtags=behindasteroids&via=greweb&url="+encodeURIComponent(location.href)+"&text="+encodeURIComponent("Reached Level "+Ce+" ("+25*Ce+"¢) with "+de[0]+"⬠ "+de[1]+"ᐃ "+de[2]+"🝞")):a>Ft/2+20&&Ft/2+180>a&&location.reload()):Ze?_e>0&&r>140&&280>r&&(Ft/2>a?(Ce=Ze-1,_e=Ze=0,de=localStorage.ba_ach.split(",").map(function(t){return parseInt(t,10)})):_e=Ze=0):oa=[a,r]}function S(t){if(sa.push(t[7]),Math.abs(Math.cos(t[2]))<t[9]){var e=W(t),a=q(t),r=Math.max(0,Math.min(e[0],Ft)),o=Math.max(0,Math.min(e[1],Ut)),n=(ct?.006:.008)*t[3],i=t[6],s=t[5];return xe.push([r,o,a,n,s,i]),pt(Qt),1}pt(Zt)}function I(){xe=[];for(var t=0;8>t;++t){var e=Math.floor(1.5+3*Math.random());xe[t]=[Ft*Math.random(),Ut*Math.random(),2*Math.PI*Math.random(),.02+.02*Math.random(),P(e),e]}}function x(){var t=Pe.reduce(function(t,e){return e[6]},0);return Se>ia&&Math.random()<.01*le*Math.exp(-t*(1+5*Math.exp(-(Ce-1)/3)-.2*Math.exp(-Math.abs(Ce-20)/20)))*(1-Math.exp(-_e/5e3))?(ia=Se+1e3*(1+Math.random()),D()):void 0}function D(){if(!sa.length)return 0;for(var t=Math.random()*Bt,e=sa.shift(),a=0;a<Pe.length;++a){var r=Pe[a],o=r[0]%Bt;if(o>t-60&&t+60>o)return 0}var n=1-Math.exp(-Ce/5),i=1-Math.exp((1-Ce)/20);Math.random()>n&&(i*=Math.random());var s=i+Math.random()*(n-i),f=i+Math.random()*(n-i),c=i+Math.random()*(n-i),h=Math.floor(2+3*Math.random()*Math.random()+4*Math.random()*Math.random()*Math.random()),l=2>Ce?0:Math.PI*(.8*Math.random()*s+.1*h)*s;.2>l&&(l=0);var v=Ce>2&&l>Math.exp(-Ce/4)&&Math.random()>.5+.4*((Ce-3)%8)/8-.5*(1-Math.exp(-Ce/10))?.9-.5*f-.2*s:1;return 2==Ce&&(l=.2+Math.random()),3==Ce&&(l=.2+Math.random(),v=.5+.4*Math.random()),Pe.push([t,.1+.002*Ce,2*Math.PI*Math.random(),10+40*Math.random(),.002+.001*(Math.random()+.5*h*Math.random()+Math.random()*Ce/30)*c-.001*s,P(h),h,e,l,v,0]),1}function y(t){t[10]||(t[0]+=t[1]*le,t[2]+=t[4]*le,t[3]=t[3]<10?60:t[3]-.02*le)}function P(t){for(var e=4+2*t,a=10*t,r=[],o=0;e>o;++o){var n=a*(.4+.6*Math.random()),i=2*Math.PI*o/e;r.push([n*Math.cos(i),n*Math.sin(i)])}return r}function w(t){pt(Math.random()<.5?Jt:zt);for(var e=Math.floor(19+9*Math.random()),a=0;e>a;++a){var r=30*Math.random()-10,o=(Math.random()+2*Math.PI*a)/e;we.push([t[0]+r*Math.cos(o),t[1]+r*Math.sin(o),o,.06,Math.random()<.3?0:1e3])}}function L(t){var e=xe[t];xe.splice(t,1);var a=e[5];if(a>1)for(var r=Math.round(2+1.5*Math.random()),o=0;r>o;o++){var n=Math.random()+2*Math.PI*o/r;xe.push([e[0]+10*Math.cos(n),e[1]+10*Math.sin(n),n,.5*e[3],P(a-1),a-1])}}function k(t,e,a){var r=Math.cos(a),o=Math.sin(a);ye.push([t[0]+14*r,t[1]+14*o,t[2]+e*r,t[3]+e*o,1e3,0])}function N(t){t[0]+=t[2]*le,t[1]+=t[3]*le}function O(t){var e=Math.cos(t[2]),a=Math.sin(t[2]),r=le*t[3];t[0]+=r*e,t[1]+=r*a}function _(t,e,a){var r=100;(t[0]<-r||t[1]<-r||t[0]>Ft+r||t[1]>Ut+r)&&a.splice(e,1)}function G(t,e,a){(t[4]-=le)<0&&a.splice(e,1)}function C(t){t[0]<0?t[0]+=Ft:t[0]>Ft&&(t[0]-=Ft),t[1]<0?t[1]+=Ut:t[1]>Ut&&(t[1]-=Ut)}function F(t,e,a){var r=t[0]-e[0],o=t[1]-e[1];return a*a>r*r+o*o}function U(){Le||(Le=Se,Ge++,de[1]++)}function B(t){if(t[4]-=le,t[4]<0&&(t[4]=500+300*Math.random(),!Le)){var e=Math.atan2(Ie[1]-t[1],Ie[0]-t[0]);if(Math.random()<.2){var a=2*Math.PI*Math.random();t[2]=.08*Math.cos(a),t[3]=.08*Math.sin(a)}k(t,.3+.1*Math.random(),e+.6*Math.random()-.3)}}function Y(e,a){function n(t,e){return d>M?0>d==0>t?-1:1:0>M==0>e?-1:1}var i,s,f,c=Ye,h=Be;Ye=0,Ue=0,Be=0;var l,v,u,m,d=Math.cos(Ie[4]),M=Math.sin(Ie[4]),E=Math.sqrt(Ie[2]*Ie[2]+Ie[3]*Ie[3]),p=[Ft/2-Ie[0],Ut/2-Ie[1]],g=o(p),A=Math.atan2(p[1],p[0]),b=100+500*Math.random(),T=[Ie[0]+b*Ie[2],Ie[1]+b*Ie[3]],R=0;for(ra=0;ra<xe.length;++ra){var S=xe[ra];if(!(S[0]<0||S[1]<0||S[0]>Ft||S[1]>Ut)){var I=[].concat(S);I[0]+=Math.cos(S[2])*S[3]*b,I[1]+=Math.sin(S[2])*S[3]*b;var x=r(S,Ie)-(10+10*S[5]),D=r(I,T)-(10+10*S[5]);x-D>b/200&&(80>x||30+30*a>D)&&(!l||v>D)&&(l=S,u=S,v=D,R++)}if(!(S[5]>2&&30>x)||100>D){var y=S[5];(!l||m>y)&&(u=I,m=y)}}for(ra=0;ra<De.length;++ra){var P=De[ra];Math.random()<.02*le*(e+a+1)&&(u=P)}if(He=1-Math.exp(-xe.length/10)+(1-Math.exp(-R/3)),Ue=_e>3e3&&Math.random()<1e-4*le*He,Ye=_e>1e3&&Math.random()<.005*le?Math.random()<.5?0:Math.random()<.5?1:-1:c,Be=_e>2e3&&Math.random()<.005*le*(1-e)?Math.random()<.5?1:-1:h,g>100-80*a&&(f=t(A-Ie[4]),Math.abs(f)>2*Math.PI/3?Be=-1:Math.abs(f)>Math.PI/3?Ye=0>f?-1:1:Be=1),-Math.exp(-g/80)+Math.exp(-E)+(1-2*e)*He*Math.random()<Math.random()&&(Be=n(Ie[2],Ie[3])),l&&e>Math.random()-.02*le&&(i=l[0]-Ie[0],s=l[1]-Ie[1],Be=n(i,s)),u&&a>Math.random()-.01*le){i=u[0]-Ie[0],s=u[1]-Ie[1],f=t(Math.atan2(s,i)-Ie[4]);var w=Math.abs(f);Math.random()<.06*le*w&&(Ye=f>0?1:-1),Ue=Math.random()<.005*le*(Math.exp(10*-w)+He+e)}}function H(){if(_e+=le,Se-je>1200&&(je=Se,De.length&&pt(ae)),!me&&!Ze){_e>0&&!de&&(de=[0,0,0]);var e,a=0;if(!Le&&_e>0&&Se-Ke>5e3&&Ce>2&&!De.length){ue=Math.floor(40-35*Math.exp(-(Ce-3)/14));var r=3*Qe/ue;Qe>ue&&(Ke=Se,ze=Qe=0,De.push([Ft*Math.random(),Ut*Math.random(),0,0,0]),de[2]++),Xe+=2*r*Math.PI*le/1e3,Math.sin(Xe)>0!==qe&&(qe=!qe,pt(qe?jt:Vt))}if(0==Fe&&_e>0&&(ke=Se,Fe=4,Ce++,Oe=0,ve=1e4,xe=[],De=[],pt(te),Ce>1&&(localStorage.ba_pl=Ce,localStorage.ba_ach=de)),_e>1e3&&!Le){for(e=0;e<Pe.length;e++){var o=Pe[e];if(o[10])Se-o[10]>1e3&&Pe.splice(e--,1);else{var n=W(o),i=oa&&F(oa,n,40+10*o[6]);(aa[o[7]]||i)&&(Je=oa=aa[o[7]]=0,S(o)?(de[0]++,Ce>3&&Qe++,Pe.splice(e--,1)):(Oe+=5e3,Qe=0,ea=o[10]=Se))}}for(oa=0;x(););}if(Le&&Se-Le>2e3+(Fe>1?0:2e3)&&(Le=0,Ie=[Ft/2,Ut/2,0,0,0],--Fe?ke=Se:(_e=-5e3,I(),De=[],pt($t))),Ne=Math.max(Ne,Oe),Oe>=ve&&(ta=Se,Fe++,ve+=1e4,pt(re),Fe>5&&(me=1,Pe=[],De=[],I())),ye.forEach(function(t,e){t[5]||a++;var r;if(t[4]<900){if(!Le&&F(t,Ie,20))return w(t),ye.splice(e,1),void U();for(r=0;r<De.length;++r){var o=De[r];if(F(t,o,20))return w(t),ye.splice(e,1),void De.splice(r,1)}}for(r=0;r<xe.length;++r){var n=xe[r],i=n[5];if(F(t,n,10*i))return w(t),ye.splice(e,1),L(r),void(Oe+=20*Math.floor(.4*(6-i)*(6-i)))}}),!Le&&_e>0&&xe.forEach(function(t,e){F(t,Ie,10+10*t[5])&&(1e3>Se-ke?L(e):(w(Ie),U()))}),He=0,!Le&&_e>0){var s=Math.cos(Ie[4]),f=Math.sin(Ie[4]),c=1.1-Math.exp((1-Ce)/4)+1-Math.exp((1-Ce)/8),h=Math.random(),l=Math.exp((1-Ce)/16);h=h*l+.5*(1-l);var v=Math.min(1,h*c),u=c-v;Y(v,u),Ie[2]+=Be*le*2e-4*s,Ie[3]+=Be*le*2e-4*f,Ie[4]=t(Ie[4]+Ye*le*.005),3>a&&Ue&&Se-$e>300&&($e=Se,pt(Kt),k(Ie,.3,Ie[4]))}}N(Ie),xe.forEach(O),De.forEach(N),ye.forEach(N),we.forEach(O),De.forEach(B),Pe.forEach(y),we.forEach(G),C(Ie),xe.forEach(_e>0&&!Ze&&!me?_:C),De.forEach(C),ye.forEach(G),ye.forEach(C),Ve+=.04*(He-Ve),We+=.04*(Be-We)}function W(t){var e,a,r=t[0]%Bt,o=Ft+Ct,n=Ut+Ct;o>r?(e=r,a=0):(r-=o,n>r?(e=o,a=r):(r-=n,o>r?(e=o-r,a=n):(r-=o,e=0,a=n-r)));var i=[-Ct/2+e,-Ct/2+a];if(t[10]){var s=Se-t[10],f=Math.atan2(Ie[1]-i[1],Ie[0]-i[0]),c=.3*s;i[0]-=Math.cos(f)*c,i[1]-=Math.sin(f)*c}return i}function X(t){var e=W(t),a=Math.atan2(Ie[1]-e[1],Ie[0]-e[0]);return a}function q(t){return Math.cos(t[2])*t[8]+X(t)}function K(t){if(bt.strokeStyle="#f00",bt.globalAlpha=.4,bt.rotate(t[4]),Le){bt.lineWidth=2;var e=(Se-Le)/200;n([[-6,-6-.5*e],[3,-3-.9*e]]),bt.stroke(),8>e&&(n([[3+.4*e,-3-.8*e],[12+.4*e,0-.5*e]]),bt.stroke()),n([[12,0+.4*e],[3,3+e]]),bt.stroke(),9>e&&(n([[1,5+e],[-6,6+e]]),bt.stroke()),7>e&&(n([[-6-e,-6],[-6-e,6]]),bt.stroke())}else n([[-6,-6],[12,0],[-6,6],[-5,0]]),bt.stroke(),We>.2&&(n([[-7,2*Math.random()-1],[-7-5*We,4*Math.random()-2]]),bt.stroke()),-.2>We&&(n([[2,-5],[2-5*We,-7],,[2,5],[2-5*We,7]]),bt.stroke())}function j(t){bt.globalAlpha=.2,bt.strokeStyle="#f00",n(t[4]),bt.stroke()}function V(){bt.globalAlpha=.4,bt.strokeStyle="#f00",n(ma),bt.stroke()}function J(){bt.globalAlpha=1-Math.random()*Math.random(),bt.fillStyle="#00f",bt.beginPath(),bt.arc(0,0,2+2.5*Math.random(),0,2*Math.PI),bt.fill()}function z(){bt.globalAlpha=.8,bt.fillStyle="#f00",bt.beginPath(),bt.arc(0,0,1,0,2*Math.PI),bt.fill()}function Q(t,e){bt.globalAlpha=1,n([[0,0],[160,0],[160,120],[0,120]]),bt.translate(80,30),bt.stroke(),bt.fillStyle="#000",bt.fill(),bt.save(),i(t,2),bt.restore(),bt.save(),bt.translate(0,40),i(e,2),bt.restore()}function Z(){if(bt.save(),bt.fillStyle=bt.strokeStyle="#0f0",bt.globalAlpha=.3,me)bt.save(),bt.strokeStyle="#0f0",bt.globalAlpha=.3,bt.save(),bt.translate((Ft-340)/2,Ut/8),i("YOU EARNED ",2,1),bt.globalAlpha=.5,i(25*Ce+"¢",2,1),bt.restore(),bt.save(),bt.translate(Ft/2,Ut/4),i("FROM "+Ce+" PLAYERS",2),bt.restore(),bt.save(),bt.globalAlpha=.5,bt.translate((Ft-200)/2,Ut/2),rt(2),bt.restore(),bt.save(),bt.translate(Ft/2-180,Ut-160),Q("TWEET","SCORE"),bt.restore(),bt.save(),bt.translate(Ft/2+20,Ut-160),Q("PLAY","AGAIN"),bt.restore(),bt.restore();else if(0>_e||Ze)bt.save(),bt.translate(Ft-50,20),i(a(0),1.5,-1),bt.restore(),bt.save(),bt.translate(Ft/2-160,.7*Ut),n([[0,2],[0,18]]),bt.stroke(),bt.translate(40,0),i("COIN",2,1),bt.translate(40,0),n([[0,2],[0,18]]),bt.stroke(),bt.translate(40,0),i("PLAY",2,1),bt.restore();else for(var t=1;Fe>t;t++)bt.save(),bt.translate(60+10*t,50),bt.rotate(-Math.PI/2),n([[-4,-4],[10,0],[-4,4],[-3,0]]),bt.stroke(),bt.restore();!me&&Le&&1==Fe&&(bt.save(),bt.lineWidth=2,bt.translate(Ft/2,140),i("GAME OVER",2),bt.restore()),!me&&Ze&&_e>0&&(bt.save(),bt.translate(Ft/2,100),i("CONTINUE GAME ?",2),bt.restore(),bt.save(),bt.globalAlpha=1,bt.translate(Ft/4,180),i("YES",ct?4:6),bt.restore(),bt.save(),bt.globalAlpha=1,bt.translate(3*Ft/4,180),i("NO",ct?4:6),bt.restore()),bt.save(),bt.translate(Ft/2,Ut-14),i("2015 GREWEB INC",.6),bt.restore(),me||(bt.save(),bt.translate(Ft/2,20),i(a(Ne),.6),bt.restore(),bt.save(),bt.translate(50,20),i(a(Oe),1.5,1),bt.restore()),(me||0>_e&&800>Se%1e3)&&(bt.save(),bt.translate(Ft-20,Ut-24),i(ct?"MOBILE":"DESKTOP",.6,-1),bt.restore(),bt.save(),bt.translate(Ft-20,Ut-14),i("VERSION",.6,-1),bt.restore()),bt.restore()}function $(){bt.save(),bt.fillStyle=bt.strokeStyle="#f00",bt.globalAlpha=.03,bt.translate(Ft/2,Ut/2),bt.beginPath(),bt.arc(0,0,4,0,2*Math.PI),bt.fill(),bt.stroke(),bt.beginPath(),bt.arc(0,0,12,0,2*Math.PI),bt.stroke(),bt.beginPath(),bt.arc(0,0,12,4,6),bt.stroke(),bt.beginPath(),bt.arc(0,0,12,1,2),bt.stroke(),bt.restore()}function tt(){bt.save(),bt.fillStyle="#000",bt.fillRect(0,0,Ft,Ut),bt.restore(),it(xe,j),it(De,V),it(ye,J),it(we,z),_e>0&&!Ze&&!me&&(bt.save(),nt(Ie),K(Ie),bt.restore()),Z(),$()}function et(t){var e=X(t),a=Math.cos(t[2]),r=a*t[8]+e,o=10*t[6],s=Math.abs(a)<t[9];if(_e>0&&Fe&&!Le&&!t[10]){bt.lineWidth=1+t[3]/60,bt.strokeStyle=s?"#7cf":"#f66",t[8]>.1&&(bt.save(),bt.rotate(e),bt.strokeStyle="#f66",bt.beginPath(),bt.arc(0,0,o+10,-t[8],-t[8]*t[9]),bt.stroke(),bt.beginPath(),bt.arc(0,0,o+10,t[8]*t[9],t[8]),bt.stroke(),bt.strokeStyle="#7cf",bt.beginPath(),bt.arc(0,0,o+10,-t[8]*t[9],t[8]*t[9]),bt.stroke(),n([[o+8,0],[o+12,0]]),bt.stroke(),bt.restore()),bt.save(),bt.rotate(r),bt.save();var f=60+o,c=t[3]+o;bt.globalAlpha=.2,n([[0,0],[f,0]]),bt.stroke(),bt.restore(),n([[0,0],[c,0]]),bt.stroke();var h=6;n([[f-h,h],[f,0],[f-h,-h]],1),bt.stroke(),bt.restore()}else bt.strokeStyle=t[10]?"#f66":"#999";bt.save(),n(t[5]),bt.fillStyle="#000",bt.fill(),bt.stroke(),bt.restore();var l=[0,0];t[5].forEach(function(t){l[0]+=t[0],l[1]+=t[1]}),!ct&&_e>0&&(bt.save(),bt.translate(l[0]/t[5].length+1,l[1]/t[5].length-5),i(String.fromCharCode(t[7]),1),bt.restore())}function at(){function t(t){e="PLAYER "+t,a=["GENIOUS PLAYER!!","EXPERIENCED PLAYER!!","GOOD PLAYER. GET READY","NICE PLAYER.","BEGINNER.","VERY BEGINNER. EASY KILL"][Math.floor(6*Math.exp(-t/8))]}var e="",a="",r="#f7c",o="#7fc";if(me)e="PLAYER MASTERED THE GAME",a="REACHED ᐃᐃᐃᐃᐃ";else if(Ce)Le?1==Fe?(o="#f66",e="GOOD JOB !!!",a="THE DUDE IS BROKE"):2==Fe?(o="#f66",e="OK...",a="ONE MORE TIME !"):ca&&Se-Ma>3e3?e=ca:(e=["!!!","GREAT!","COOL!","OMG!","AHAH!","RUDE!","EPIC!","WICKED!","SHAME!","HEHEHE!","BWAHAHA!"],ca=e=e[Math.floor(Math.random()*e.length)],Ma=0):0>_e?(e="INCOMING NEW PLAYER...",a="25¢ 25¢ 25¢ 25¢ 25¢"):6e3>_e&&4==Fe?t(Ce):(o="#f66",ca&&3e3>Se-Ma?a=ca:Je?_e>1e4&&(r=o="#7cf",e=ct?"TAP ON ASTEROIDS":"PRESS ASTEROIDS LETTER",a="TO SEND THEM TO THE GAME"):Fe>4&&Se-ta>5e3?(r=o="#f66",e="DON'T LET PLAYER",a="REACH ᐃᐃᐃᐃᐃ !!!"):Oe>1e4&&4500>Se-ta?(r=o="#f66",e="OH NO! PLAYER JUST",a="WON AN EXTRA LIFE!"):2==Ce&&_e>5e3?(o=r="#7cf",e="LETS TRAIN WITH...",a="AIMING"):3==Ce&&_e>5e3?(r="#7cf",o="#f66",e="CAREFUL ABOUT THE",a="RED AIMING"):4==Ce&&_e>5e3&&ze?(r=o="#f66",e="MAKE COMBOS TO SEND",a="AN UFO !!!"):Ce>5&&(ca=0,Math.random()<1e-4*le&&Se-Ma>8e3&&(a=["COME ON! KILL IT!","JUST DO IT!","I WANT ¢¢¢","GIVE ME SOME ¢¢¢","DO IT!","DESTROY IT!"],ca=a=a[Math.floor(Math.random()*a.length)],Ma=Se)));else if(-7e3>_e)e="BEHIND ASTEROIDS",a="THE DARK SIDE";else if(-3500>_e)r=o="#7cf",e="SEND ASTEROIDS TO MAKE",a="PLAYERS WASTE THEIR MONEY";else if(Ze)0>_e&&(_e=0),t(Ze);else{for(var n=Math.min(25,Math.floor((_e+3500)/80)),s=0;n>s;s++)e+=".";_e>-2e3&&(a="A NEW PLAYER!")}a&&ha!==a&&"#f66"===o&&pt(ee),bt.save(),bt.translate(_t,ct?40:2),bt.lineWidth=Se%600>300?2:1,bt.save(),bt.strokeStyle=r,i(e,ct?1.5:2,1),bt.restore(),bt.save(),bt.strokeStyle=o,bt.translate(0,ct?30:40),i(ha=a,ct?1.5:2,1),bt.restore(),bt.restore(),me||(bt.save(),bt.translate(Nt-_t,2),bt.lineWidth=2,bt.strokeStyle="#7cf",i(25*(_e>0&&Ze||Ce)+"¢",2,-1),bt.restore(),bt.save(),bt.globalAlpha=qe?1:.6,bt.strokeStyle="#7cf",bt.translate(Nt-_t,Ot-20),Qe&&i(Qe+"x",1.5,-1),bt.restore(),de&&(bt.save(),bt.translate(_t+50,Ot-20),bt.strokeStyle="#fc7",rt(1),bt.restore()))}function rt(t){for(var e=0;3>e;e++){var a=de[e];a&&(bt.save(),bt.translate(100*e,0),n(da[e]),bt.stroke(),bt.translate(0,-20-10*t),i(""+a,t),bt.restore())}}function ot(){v(Re,g),E(Ae),f(se),wt.uniform1i(h(se,"t"),m(Re,0)),wt.drawArrays(wt.TRIANGLES,0,6),E(pe),f(he),wt.uniform1f(h(he,"pt"),_e/1e3),wt.uniform1f(h(he,"pl"),Ce),wt.uniform1f(h(he,"ex"),me||Ve),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(ne),wt.uniform1i(h(ne,"t"),m(p(pe),0)),wt.uniform2f(h(ne,"dir"),2,2),wt.drawArrays(wt.TRIANGLES,0,6),E(Te),f(ne),wt.uniform1i(h(ne,"t"),m(p(be),0)),wt.uniform2f(h(ne,"dir"),-2,2),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(ne),wt.uniform1i(h(ne,"t"),m(p(Te),0)),wt.uniform2f(h(ne,"dir"),6,0),wt.drawArrays(wt.TRIANGLES,0,6),E(pe),f(ne),wt.uniform1i(h(ne,"t"),m(p(be),0)),wt.uniform2f(h(ne,"dir"),0,2),wt.drawArrays(wt.TRIANGLES,0,6),E(ge),f(ce),wt.uniform1i(h(ce,"t"),m(p(Ae),0)),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(ne),wt.uniform1i(h(ne,"t"),m(p(ge),0)),wt.uniform2f(h(ne,"dir"),2,-4),wt.drawArrays(wt.TRIANGLES,0,6),E(ge),f(ne),wt.uniform1i(h(ne,"t"),m(p(be),0)),wt.uniform2f(h(ne,"dir"),4,-8),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(ne),wt.uniform1i(h(ne,"t"),m(p(Ae),0)),wt.uniform2f(h(ne,"dir"),.5,.5),wt.drawArrays(wt.TRIANGLES,0,6),E(Te),f(ne),wt.uniform1i(h(ne,"t"),m(p(be),0)),wt.uniform2f(h(ne,"dir"),-.5,.5),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(ne),wt.uniform1i(h(ne,"t"),m(p(Te),0)),wt.uniform2f(h(ne,"dir"),1,0),wt.drawArrays(wt.TRIANGLES,0,6),E(Te),f(ne),wt.uniform1i(h(ne,"t"),m(p(be),0)),wt.uniform2f(h(ne,"dir"),0,1),wt.drawArrays(wt.TRIANGLES,0,6),E(be),f(fe),wt.uniform1i(h(fe,"t"),m(p(Te),0)),wt.uniform1i(h(fe,"r"),m(p(Ee),1)),wt.drawArrays(wt.TRIANGLES,0,6),E(Ee),f(ie),wt.uniform1i(h(ie,"t"),m(p(be),0)),wt.drawArrays(wt.TRIANGLES,0,6),wt.bindFramebuffer(wt.FRAMEBUFFER,null),f(Me),wt.uniform1i(h(Me,"G"),m(p(Ae),0)),wt.uniform1i(h(Me,"R"),m(p(Ee),1)),wt.uniform1i(h(Me,"B"),m(p(Te),2)),wt.uniform1i(h(Me,"L"),m(p(ge),3)),wt.uniform1i(h(Me,"E"),m(p(pe),4)),wt.uniform1f(h(Me,"s"),Ce?1:e(-4e3,-3e3,_e)),wt.uniform1f(h(Me,"F"),e(300,0,Se-ea)+Fe>4?.5*e(-1,1,Math.cos(.01*Se)):0),wt.drawArrays(wt.TRIANGLES,0,6)}function nt(t){bt.translate(t[0],t[1])}function it(t,e){for(var a=0;a<t.length;++a)bt.save(),nt(t[a]),e(t[a]),bt.restore()}function st(t){requestAnimationFrame(st),la||(la=t),le=Math.min(100,t-la),la=t,Se-Ea>200&&T(),Se+=le,H(),bt=kt,bt.save(),bt.scale(Ht,Ht),bt.save(),bt.clearRect(0,0,Nt,Ot),at(),bt.translate(_t,Gt),Pe.forEach(function(t){bt.save(),nt(W(t)),et(t),bt.restore()}),bt.restore(),bt.restore(),bt=Lt,bt.save(),tt(),bt.restore(),ot()}var ft=!1,ct="ontouchstart"in document,ht=[[0,0],[2,0],[2,2],[0,2],[0,0]],lt=[[2,0],[0,0],[0,1],[2,1],[2,2],[0,2]],vt=[ht,[[1,0],[1,2]],[[0,0],[2,0],[2,1],[0,1],[0,2],[2,2]],[[0,0],[2,0],[2,2],[0,2],,[0,1],[2,1]],[[0,0],[0,1],[2,1],,[2,0],[2,2]],lt,[[0,0],[0,2],[2,2],[2,1],[0,1]],[[0,0],[2,0],[2,2]],[[0,0],[2,0],[2,2],[0,2],[0,0],,[0,1],[2,1]],[[2,2],[2,0],[0,0],[0,1],[2,1]]];[[[0,2],[0,2/3],[1,0],[2,2/3],[2,2],,[0,4/3],[2,4/3]],[[0,1],[0,0],[4/3,0],[2,1/3],[2,2/3],[4/3,1],[0,1],[0,2],[4/3,2],[2,5/3],[2,4/3],[4/3,1]],[[2,0],[0,0],[0,2],[2,2]],[[0,0],[1,0],[2,2/3],[2,4/3],[1,2],[0,2],[0,0]],[[2,0],[0,0],[0,2],[2,2],,[0,1],[1.5,1]],[[2,0],[0,0],[0,2],,[0,1],[2,1]],[[2,2/3],[2,0],[0,0],[0,2],[2,2],[2,4/3],[1,4/3]],[[0,0],[0,2],,[2,0],[2,2],,[0,1],[2,1]],[[0,0],[2,0],,[1,0],[1,2],,[0,2],[2,2]],[[2,0],[2,2],[1,2],[0,4/3]],[[0,0],[0,2],,[2,0],[0,1],[2,2]],[[0,0],[0,2],[2,2]],[[0,2],[0,0],[1,2/3],[2,0],[2,2]],[[0,2],[0,0],[2,2],[2,0]],ht,[[0,2],[0,0],[2,0],[2,1],[0,1]],[[0,0],[2,0],[2,4/3],[1,2],[0,2],[0,0],,[2,2],[1,4/3]],[[0,2],[0,0],[2,0],[2,1],[0,1],[2,2]],lt,[[0,0],[2,0],,[1,0],[1,2]],[[0,0],[0,2],[2,2],[2,0]],[[0,0],[1,2],[2,0]],[[0,0],[0,2],[1,4/3],[2,2],[2,0]],[[0,0],[2,2],,[2,0],[0,2]],[[0,0],[1,2/3],[2,0],,[1,2/3],[1,2]],[[0,0],[2,0],[0,2],[2,2]]].forEach(function(t,e){vt[String.fromCharCode(65+e)]=t});var ut=vt["."]=[[1,1.8],[1,2]];vt[":"]=[[1,0],[1,.2],,[1,1.8],[1,2]],vt["'"]=[[1,0],[1,2/3]],vt["ᐃ"]=[[1,0],[1.8,2],[1,1.6],[.2,2],[1,0]],vt["!"]=[[1,0],[1,1.5],,].concat(ut),vt["?"]=[[0,0],[2,0],[2,1],[1,1],[1,1.5],,].concat(ut),vt.x=[[0,1],[2,2],,[2,1],[0,2]],vt["¢"]=[[1,0],[1,2],,[1.5,.5],[.5,.5],[.5,1.5],[1.5,1.5]];var mt=new b;jsfxr=function(t,e,a){mt._params.setSettings(t);var r=mt.totalReset(),o=new Uint8Array(4*((r+1)/2|0)+44),n=2*mt.synthWave(new Uint16Array(o.buffer,44),r),i=new Uint32Array(o.buffer,0,44);i[0]=1179011410,i[1]=n+36,i[2]=1163280727,i[3]=544501094,i[4]=16,i[5]=65537,i[6]=44100,i[7]=88200,i[8]=1048578,i[9]=1635017060,i[10]=n,n+=44;for(var s=0,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="data:audio/wav;base64,";n>s;s+=3){var h=o[s]<<16|o[s+1]<<8|o[s+2];c+=f[h>>18]+f[h>>12&63]+f[h>>6&63]+f[63&h]}return e&&e.decodeAudioData(o.buffer,a),c};var dt,Mt,Et,pt,gt=window.AudioContext||window.webkitAudioContext;if(gt){dt=new gt,Mt=dt.createDynamicsCompressor();var At=dt.createGain();At.gain.value=.1,Mt.connect(At),At.connect(dt.destination),Et=function(t){var e=[];return jsfxr(t,dt,function(t){e.push(t)}),e},pt=function(t){if(t[0]){var e=dt.createBufferSource();e.buffer=t[0],e.start(0),e.connect(Mt),setTimeout(function(){e.disconnect(Mt)},1e3*t[0].duration+300)}}}else Et=pt=function(){};var bt,Tt="attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,0.0,1.0);uv=0.5*(p+1.0);}",Rt="precision highp float;varying vec2 uv;uniform sampler2D t;uniform vec2 dim;uniform vec2 dir;void main(){vec4 a=vec4(0.0);vec2 b=vec2(1.3846153846)*dir;vec2 c=vec2(3.2307692308)*dir;a+=texture2D(t,uv)*0.2270270270;a+=texture2D(t,uv+(b/dim))*0.3162162162;a+=texture2D(t,uv-(b/dim))*0.3162162162;a+=texture2D(t,uv+(c/dim))*0.0702702703;a+=texture2D(t,uv-(c/dim))*0.0702702703;gl_FragColor=a;}",St="precision highp float;varying vec2 uv;uniform sampler2D t;void main(){gl_FragColor=texture2D(t,uv);}",It="precision highp float;varying vec2 uv;uniform sampler2D G;uniform sampler2D R;uniform sampler2D B;uniform sampler2D L;uniform sampler2D E;uniform float s;uniform float F;float a(vec2 b,vec2 c){float d=10.0;vec2 e=b-c;return pow(abs(pow(abs(e.x),d)+pow(abs(e.y),d)),1.0/d);}void main(){vec2 f=(uv/0.98)-0.01;float g=a(uv,vec2(0.5));float h=smoothstep(0.45,0.51,g);f=mix(f,vec2(0.5),0.2*(0.6-g)-0.02*g);vec3 i=texture2D(G,f).rgb;gl_FragColor=vec4((vec3(0.03+0.1*F,0.04,0.05)+mix(vec3(0.05,0.1,0.15)-i,2.0*i,s)+s*(texture2D(L,f).rgb+vec3(0.3+F,0.6,1.0)*(texture2D(R,f).rgb+3.0*texture2D(B,f).rgb)+0.5*texture2D(E,f).rgb))*mix(1.0,smoothstep(1.0,0.0,h),0.6),1.0);}",xt="precision highp float;varying vec2 uv;uniform sampler2D t;void main(){gl_FragColor=vec4(step(0.9,texture2D(t,uv).r));}",Dt="precision highp float;varying vec2 uv;uniform sampler2D t;void main(){vec3 a=texture2D(t,uv).rgb;vec2 b=0.003*vec2(cos(47.0*uv.y),sin(67.0*uv.x));gl_FragColor=vec4(a.r+a.g+a.b+texture2D(t,uv+b).b);}",yt="precision highp float;varying vec2 uv;uniform sampler2D t;uniform sampler2D r;void main(){vec3 a=texture2D(r,uv).rgb;gl_FragColor=vec4(a*(0.82-0.3*a.r*a.r)+texture2D(t,uv).rgb,1.0);}",Pt="precision highp float;varying vec2 uv;uniform float pt;uniform float pl;uniform float S;uniform float ex;float a(vec2 b,vec2 c){return step(length((uv-b)/c),1.0);}float d(vec2 b,vec2 c,float e){vec2 f=(uv-b)/c;return step(pow(abs(f.x),e)+pow(abs(f.y),e),1.0);}vec3 g(){return 0.1+0.3*vec3(1.0,0.9,0.7)*smoothstep(0.4,0.1,distance(uv,vec2(0.2,1.2)))+0.4*vec3(0.8,0.6,1.0)*smoothstep(0.5,0.2,distance(uv,vec2(1.3,0.7)));}vec4 h(float e,float i){vec4 b=vec4(0.0);vec2 j=vec2(min(ex,1.0),mix(min(ex,1.0),min(ex-1.0,1.0),0.5));vec4 k=0.2+0.4*pow(abs(cos(4.*e+S)),2.0)*vec4(1.0,0.7,0.3,1.0);vec4 l=vec4(0.5,0.3,0.3,1.0);vec4 m=vec4(0.3*(1.0+cos(3.*e+6.*S)),0.2*(1.0+cos(7.*e+7.*S)),0.1+0.2*(1.0+sin(7.*e+8.*S)),1.0);float n=step(sin(9.0*e+S),0.0);float o=0.02+0.02*n*cos(e+S);float p=step(i,-0.01)+step(0.01,i);float q=(1.0-p)*step(0.0,pt);vec2 r=vec2(0.5)+p*vec2(0.03*cos(4.0*pt+sin(pt)),0.05*abs(sin(3.0*pt)))+j*q*vec2(0.05*cos(pt*(1.0+0.1*sin(pt))),0.05*abs(sin(pt)));vec2 s=mix(r,vec2(0.5),0.5);r.x+=i;s.x+=i;b+=k*a(r,vec2(0.06,0.1));b*=1.0-(0.5+0.5*n)*a(r-vec2(0.0,0.04),vec2(0.03,0.01));b*=1.0-a(r+vec2(0.03,0.03),vec2(0.02,0.01));b*=1.0-a(r+vec2(-0.03,0.03),vec2(0.02,0.01));b*=1.0-0.6*a(r,vec2(0.01,0.02));b+=l*a(r+vec2(0.0,o),vec2(0.07,0.1+o));b+=q*(l+k)*a(s-vec2(-0.2+0.01*cos(5.0*pt),0.45-0.1*j.y*step(0.0,pt)*pow(abs(sin(8.0*pt*(1.0+0.2*cos(pt)))),4.0)),vec2(0.055,0.05));b+=q*(l+k)*a(s-vec2(0.2+0.01*cos(5.0*pt),0.45-0.1*j.x*step(2.0,pt)*pow(abs(cos(7.0*pt)),4.0)),vec2(0.055,0.05));b+=step(b.a,0.0)*(l+k)*d(r-vec2(0.0,0.10+0.02*n),vec2(0.05-0.01*n,0.03),4.0);vec2 t=vec2(0.16+0.04*sin(9.*e),0.27+0.02*cos(9.*e));b+=step(b.r+b.g+b.b,0.0)*m*step(1.0,d(r-vec2(0.0,0.35),t*(1.0-0.1*n),4.0)+a(r-vec2(0.0,0.35),t));return b;}void main(){float u=0.6+0.4*smoothstep(2.0,0.0,distance(pt,-2.0));vec4 b=vec4(0.0);b+=(1.0-smoothstep(-0.0,-5.0,pt))*h(pl+step(pt,0.0),-0.6*smoothstep(-1.,-5.,pt));b+=step(1.0,pl)*h(pl+step(pt,0.0)-1.0,2.0*smoothstep(-4.,-1.,pt));b*=1.0-1.3*distance(uv,vec2(0.5));gl_FragColor=vec4(u*mix(g(),b.rgb,clamp(b.a,0.0,1.0)),1.0);}",wt=c.getContext("webgl")||c.getContext("experimental-webgl"),Lt=g.getContext("2d"),kt=u.getContext("2d"),Nt=ct?480:800,Ot=ct?660:680,_t=ct?50:120,Gt=ct?140:_t,Ct=ct?40:80,Ft=Nt-2*_t,Ut=Ot-2*Gt,Bt=2*(Ft+Ut+2*Ct),Yt=Math.random();d.style.webkitTransformOrigin=d.style.transformOrigin="0 0",g.width=c.width=Ft,g.height=c.height=Ut,c.style.top=Gt+"px",c.style.left=_t+"px";var Ht=ct?1:devicePixelRatio;u.width=Nt*Ht,u.height=Ot*Ht,u.style.width=Nt+"px",u.style.height=Ot+"px";var Wt,Xt=0,qt=0,Kt=Et([0,.06,.18,,.33,.5,.23,-.04,-.24,,,-.02,,.37,-.2199,,,,.8,,,,,.3]),jt=Et([,,.12,,.13,.16,,,,,,,,,,,,,.7,,,,,.5]),Vt=Et([,,.12,,.13,.165,,,,,,,,,,,,,.7,,,,,.5]),Jt=Et([3,,.35,.5369,.5,.15,,-.02,,,,-.7444,.78,,,.7619,,,.1,,,,,.5]),zt=Et([3,,.38,.5369,.52,.18,,-.02,,,,-.7444,.78,,,.7619,,,.1,,,,,.5]),Qt=Et([2,.07,.04,,.24,.25,,.34,-.1999,,,-.02,,.3187,,,-.14,.04,.85,,.28,.63,,.5]),Zt=Et([1,,.04,,.45,.14,.06,-.06,.02,.87,.95,-.02,,.3187,,,-.14,.04,.5,,,,,.4]),$t=Et([0,.11,.37,,.92,.15,,-.06,-.04,.29,.14,.1,,.5047,,,,,.16,-.02,,,,.7]),te=Et([0,,.0941,.29,.42,.563,,,,,,.4399,.5658,,,,,,1,,,,,.5]),ee=Et([2,.07,.1,,.2,.75,.35,-.1,.12,,,-.02,,,,,-.06,-.0377,.26,,,.8,,.7]),ae=Et([2,.05,.74,,.33,.5,,,,.46,.29,,,,,,,,1,,,,,.3]),re=Et([0,.12,.8,.48,.77,.92,,-.12,-.0999,,,-.4,.2,.3396,,.65,,,.93,-.02,,,,.38]);wt.viewport(0,0,Ft,Ut),wt.pixelStorei(wt.UNPACK_FLIP_Y_WEBGL,!0);var oe=wt.createBuffer();wt.bindBuffer(wt.ARRAY_BUFFER,oe),wt.bufferData(wt.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),wt.STATIC_DRAW);var ne=s(Tt,Rt);wt.uniform2f(h(ne,"dim"),Ft,Ut);var ie=s(Tt,St),se=s(Tt,Dt),fe=s(Tt,yt),ce=s(Tt,xt),he=s(Tt,Pt);wt.uniform1f(h(he,"S"),Yt);var le,ve,ue,me,de,Me=s(Tt,It),Ee=M(),pe=M(),ge=M(),Ae=M(),be=M(),Te=M(),Re=l(),Se=0,Ie=[Ft/2,Ut/2,0,0,0],xe=[],De=[],ye=[],Pe=[],we=[],Le=0,ke=0,Ne=0,Oe=0,_e=-1e4,Ge=0,Ce=0,Fe=0,Ue=0,Be=0,Ye=0,He=0,We=0,Xe=0,qe=0,Ke=0,je=0,Ve=0,Je=1,ze=1,Qe=0,Ze=localStorage.ba_pl&&parseInt(localStorage.ba_pl),$e=-9999,ta=-9999,ea=-9999;I();for(var aa={},ra=0;99>ra;++ra)aa[ra]=0;var oa,na=0;ct?addEventListener("touchstart",function(t){t.preventDefault(),R(t.changedTouches[0])}):(addEventListener("click",function(t){t.preventDefault(),R(t)}),addEventListener("keydown",function(t){aa[t.which]=1}),addEventListener("keyup",function(t){aa[t.which]=0}));for(var ia=0,sa=[],fa=0;26>fa;fa++)sa.push(65+fa);sa.sort(function(){return Math.random()-.5});var ca,ha,la,va=[[8,0],[7,5],[0,9],[7,14]],ua=[[15,14],[22,9],[15,5],[14,0]],ma=va.concat(ua).concat(va).concat([,]).concat(ua).concat([,[7,5],[15,5],,[0,9],[22,9]]),da=[[[-11,-11],[4,-13],[6,-6],[14,0],[14,8],[6,8],[-6,14],[-14,0]],[[-8,13],[0,-13],[8,13],[0,11],[-8,13],,[-10,-2],[10,2],,[10,-2],[-10,2],,],ma.map(function(t){return t?[t[0]-11,t[1]-7]:t})],Ma=0,Ea=-9999;requestAnimationFrame(st),ft&&addEventListener("resize",function(){_e=-1,Ze=0,Ce+=1,Pe=[],console.log("player=",Ce)})}();