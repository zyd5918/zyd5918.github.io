!function(e){function t(l){if(a[l])return a[l].exports;var r=a[l]={exports:{},id:l,loaded:!1};return e[l].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){!function(e){function t(l){if(a[l])return a[l].exports;var r=a[l]={exports:{},id:l,loaded:!1};return e[l].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){$(document).ready(function(){var e=[{label:"AngularJS",url:"#",target:"_top"},{label:"Bootstrap",url:"#",target:"_top"},{label:"Ajax",url:"#",target:"_top"},{label:"AeffterEffects",url:"#",target:"_top"},{label:"PhotoShop",url:"#",target:"_top"},{label:"JavaScript",url:"#",target:"_top"},{label:"HTML5",url:"#",target:"_top"},{label:"CSS3",url:"#",target:"_top"},{label:"Jquery",url:"#",target:"_top"},{label:"WebApp",url:"#",target:"_top"},{label:"MySQL",url:"#",target:"_top"},{label:"PHP",url:"http://down.admin5.com/",target:"_top"},{label:"Premiere",url:"#",target:"_top"},{label:"JAVA",url:"#",target:"_top"},{label:"Node.js",url:"#",target:"_top"},{label:"Hbulider",url:"#",target:"_top"},{label:"WebStorm",url:"#",target:"_top"},{label:"Sublim",url:"#",target:"_top"},{label:"Svn",url:"#",target:"_top"},{label:"XAMPP",url:"#",target:"_top"},{label:"DreamWeaver",url:"#",target:"_top"},{label:"Avolon",url:"#",target:"_top"},{label:"Move.js",url:"#",target:"_top"},{label:"Velocity.js",url:"#",target:"_top"},{label:"Fullpage.js",url:"#",target:"_top"}],t={entries:e,width:640,height:510,radius:"65%",radiusMin:75,bgDraw:!0,bgColor:"transparent",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:.5,fontFamily:"Oswald, Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!0};$("#tag-cloud").svg3DTagCloud(t)}),window.onload=function(){function e(e){for(var t=0;t<e.length;t++)e[t].className=""}function t(e){e[1].onmouseover=function(){this.className=null,e[0].className="one"},e[0].onmouseout=function(){this.className=null,e[1].className="one"}}for(var a=document.getElementById("section_two"),l=(a.getElementsByTagName("img"),a.getElementsByClassName("message")[0].getElementsByTagName("span")),r=a.getElementsByTagName("li"),o=0;o<r.length;o++)!function(t){r[t].onmouseover=function(){e(r),e(l),this.className="bc_color",l[t].className="xianshi"}}(o);var n=document.getElementById("contncrnt_one").getElementsByTagName("img"),i=document.getElementById("contncrnt_three").getElementsByTagName("img");t(n),t(i)},$(window).ready(function(){function e(){$("#slide_three .warp .point span").removeClass("visible"),$("#slide_three .warp .fig img").fadeOut("slow")}function t(){a=setInterval(function(){l++,5==l&&(l=0),e(),$($("#slide_three .warp .fig img")[l]).fadeIn(),$($("#slide_three .warp .point span")[l]).addClass("visible")},2e3)}var a,l=0;$("#slide_three .warp .point span").click(function(){$("#slide_three .warp .fig img").is(":animated")||l!=$(this).index()&&(clearInterval(a),e(),$(this).addClass("visible"),l=$(this).index(),$($("#slide_three .warp .fig img")[$(this).index()]).fadeIn("slow",t()))}),$("#slide_three .warp #left").click(function(){$("#slide_three .warp .fig img").is(":animated")||(clearInterval(a),l--,l==-1&&(l=4),e(),$($("#slide_three .warp .fig img")[l]).fadeIn("slow",t()),$($("#slide_three .warp .point span")[l]).addClass("visible"))}),$("#slide_three .warp #right").click(function(){$("#slide_three .warp .fig img").is(":animated")||(clearInterval(a),l++,5==l&&(l=0),e(),$($("#slide_three .warp .fig img")[l]).fadeIn("slow",t()),$($("#slide_three .warp .point span")[l]).addClass("visible"))}),t()})}])}]);