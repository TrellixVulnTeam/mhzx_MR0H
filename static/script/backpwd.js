$(function() {
    $("#submit").on('click', function(e) {
		if(isNull($("#name"),"请输入游戏账号!")) return false;
		if(isNull($("#question"),"请输入密保问题!")) return false;
		if(isNull($("#answer"),"请输入密保答案!")) return false;
		if(isNull($("#passwd"),"请输入新密码!")) return false;
		// if(!checkPasswd($("#passwd").val())){
		// 	alert("输入密码不符合命名规则!");
		// 	 $("#passwd").focus();
		// 	return false;
		// }

		var data = JSON.stringify({
			name: $("#name").val(),
			question: $("#question").val(),
			answer: $("#answer").val(),
			passwd: $("#passwd").val(),
			zone_id: $("#zone_id").val(),
		})

		  $.ajax({
			type: 'POST',
			url: '/api/backpasswd',
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



