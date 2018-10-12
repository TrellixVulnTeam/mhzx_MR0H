$(function() {
    $("#submit").on('click', function(e) {
		if(isNull($("#name"),"请输入游戏账号!")) return false;
		if(isNull($("#old_pwd"),"请输入原密码!")) return false;
		if(isNull($("#new_pwd"),"请输入新密码!")) return false;
		// if(!checkPasswd($("#new_pwd").val())){
		// 	alert("输入密码不符合命名规则!");
		// 	 $("#new_pwd").focus();
		// 	return false;
		// }
		if(isNull($("#new_pwd_re"),"请输入确认密码!")) return false;
		if($("#new_pwd").val() != $("#new_pwd_re").val()){
			alert("两次输入密码不一致!");
			$("#new_pwd_re").focus();
			return false;
		}
		var data = JSON.stringify({
			name: $("#name").val(),
			old_pwd: $("#old_pwd").val(),
			new_pwd: $("#new_pwd").val(),
			zone_id: $("#zone_id").val(),
		})

		  $.ajax({
			type: 'POST',
			url: '/api/changepasswd',
			data: data,
		    dataType: "json",
			  contentType: "application/json; charset=utf-8"
		  })
		  .done(function(data) {
			if(data.code == 0) {
				alert("密码修改成功");
			}
			else {
				alert(data.msg);
			}
		  })
	});
})



