"use strict";function animate(o,r,a){clearInterval(o.timer),o.timer=setInterval(function(){var e,t=!0;for(e in r){var n=parseInt(getStyle(o,e)),i=(r[e]-n)/10,i=n+(i=0<i?Math.ceil(i):Math.floor(i));o.style[e]=i+"px",i!=r[e]&&(t=!1)}t&&(clearInterval(o.timer),a&&a())},20)}function getStyle(e,t){return(window.getComputedStyle?window.getComputedStyle(e):e.currentStyle)[t]}function move(n,i,o,r){clearInterval(n.timer),n.timer=setInterval(function(){var e=parseInt(getStyle(n,i)),t=(o-e)/10,t=e+(t=0<t?Math.ceil(t):Math.floor(t));t==o&&(clearInterval(n.timer),r&&r()),n.style[i]=t+"px"},20)}function rand(e,t){return Math.floor(Math.random()*(t-e+1))+e}function getColor(){for(var e="#",t=1;t<=6;t++)e+=rand(0,15).toString(16);return e}function sjs(e,t){e=Math.floor(Math.random()*(t-e))+e;console.log(e)}function format(e){var t=e.getMonth(),n=e.getDate(),i=e.getHours(),o=e.getMinutes(),r=e.getSeconds(),a="星期"+"日一二三四五六"[a=e.getDay()],e=12<=i?"下午":"上午";return 12<=i&&(i-=12),year+"年 "+t+"月 "+n+"日 "+a+" "+e+" "+i+"点 "+o+"分 "+r+"秒 "}function diffTime(e,t){e=e.getTime(),t=t.getTime(),e=parseInt((t-e)/1e3);return{day:parseInt(e/86400),hours:parseInt(e%86400/3600),minutes:parseInt(e%3600/60),seconds:e%60}}function getElement(e){return document.getElementById(e)}var bannerBox=document.querySelector(".banner"),imgBox=bannerBox.querySelector("ul"),pointBox=bannerBox.querySelector("ol"),leftRightTabs=bannerBox.querySelector("div"),bannerWidth=bannerBox.clientWidth,flag=!0,index=1,timer=void 0;function setPoint(){for(var e=imgBox.children.length,t=0;t<e;t++){var n=document.createElement("li");pointBox.appendChild(n),0==t&&(n.className="active"),n.setAttribute("point-index",t+1)}}function copyEle(){var e=imgBox.children[0].cloneNode(!0),t=imgBox.children[imgBox.children.length-1].cloneNode(!0);imgBox.appendChild(e),imgBox.insertBefore(t,imgBox.children[0]),imgBox.style.width=imgBox.children.length*bannerWidth+"px",imgBox.style.left=-index*bannerWidth+"px"}function autoPlay(){clearInterval(timer),timer=setInterval(function(){animate(imgBox,{left:-++index*bannerWidth},moveEnd)},2e3)}function overOut(){bannerBox.addEventListener("mouseover",function(){clearInterval(timer)}),bannerBox.addEventListener("mouseout",function(){autoPlay()})}function moveEnd(){index==imgBox.children.length-1&&(index=1,imgBox.style.left=-index*bannerWidth+"px"),0==index&&(index=imgBox.children.length-2,imgBox.style.left=-index*bannerWidth+"px");for(var e=0;e<pointBox.children.length;e++)pointBox.children[e].className="";pointBox.children[index-1].className="active",flag=!0}function leftRightEvent(){leftRightTabs.addEventListener("click",function(e){e=e||window.event,0!=flag&&(flag=!1,"left"==e.target.className&&animate(imgBox,{left:- --index*bannerWidth},moveEnd),"right"==e.target.className&&animate(imgBox,{left:-++index*bannerWidth},moveEnd))})}function pointEvent(){pointBox.addEventListener("click",function(e){e=e||window.event,0!=flag&&(flag=!1,"LI"===e.target.nodeName&&(index=e.target.getAttribute("point-index"),console.log(index),animate(imgBox,{left:-index*bannerWidth},moveEnd)))})}setPoint(),copyEle(),autoPlay(),overOut(),leftRightEvent(),pointEvent(),document.onvisibilitychange=function(){"hidden"==document.visibilityState?clearInterval(timer):autoPlay()};