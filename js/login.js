"use strict";var rememberusername=getCookie("rememberusername"),user=document.querySelector("[name='username']");rememberusername&&(user.value=rememberusername),$(".loginForm").validate({rules:{username:"required",password:"required"},messages:{username:"用户名不能为空",password:"密码不能为空"},submitHandler:function(e){console.log(222);var s=layer.load(1,{shade:[.5,"#333"]});return $(".submit").prop("disabled",!0),$.ajax({url:"../lib/php/login.php",data:$(e).serialize(),dataType:"json",method:"post",success:function(e){var r=e.meta,e=r.status,r=r.msg;layer.close(s);var a=layer.msg(r);if(0!==e)return $(".submit").prop("disabled",!1),!1;setCookie("username",$('[name="username"]').val()),$("[name='remember']").prop("checked")&&setCookie("rememberusername",$('[name="username"]').val(),604800),setTimeout(function(){layer.close(a),$(".submit").prop("disabled",!1),location.href="ysmain.html"},2e3)}}),!1}});