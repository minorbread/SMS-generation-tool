	window.onload = function  () {
	(function  () {
		//选择年级和班级及选项、观众
		var choose1 = $("#choose1");
		var choose2 = $("#choose2");
		var collage15 = $("#collage15");
		var collage14 = $("#collage14");
		var collagex = $("#collagex");
		var spectator = $("#spectator");
		//隐藏班级等选项
		choose2.hide();
		collage15.hide();
		collage14.hide();
		collagex.show();
		choose1.change(function(event) {
			var sel = new ZGQ.SelectHidden("#choose1");
			sel.displayColge("#collagex","#collage15","#collage14");
		});

		$("#subtn").click(function(event) {
		var persGetmes = new ZGQ.Getmes("#spectator","#collage14","#collage15");
		var perArr = persGetmes.splitAndRe.apply(persGetmes,arguments);
			//观众名单切割成数组
			//切割与替换
			var len = perArr.length;
			alert(perArr);

		});
	})();
};