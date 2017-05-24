(function  () {
	//ZGQ命名空间
	if (!window.ZGQ) {window.ZGQ = {};}
	function SelectHidden (sel) {
		this.choose1 = $(sel).val();
	}
	SelectHidden.prototype.displayColge = function  (cole1,cole2,cole3) {
		switch(this.choose1){
			case "大一":
				$("#choose2").show();
				$(cole1).show();
				$(cole2).hide();
				$(cole3).hide();
				break;
			case "大二":
				$("#choose2").show();
				$(cole1).hide();
				$(cole2).show();
				$(cole3).hide();
				break;
			case "大三":
				$("#choose2").show();
				$(cole1).hide();
				$(cole2).hide();
				$(cole3).show();
				break;
		}

	};
	window.ZGQ.SelectHidden = SelectHidden;
	
	function Getmes (people,cole1,cole2,cole3) {
		this.cola1 = $(cole1).val(); 
		this.cola2 = $(cole2).val();
		this.person =  $(people).val();
	}

	Getmes.prototype.splitAndRe = function  () {
		var people = this.person;
		var	perarr1 = people.replace(/[，\s!$^&*\][\;'\.\/<>?:"{}\\()_+-=~！@#￥%………&*（）——+{}|：“”》’‘》《。，、？；]/g,"|");
		var perarr2 = perarr1.split('|');
		return perarr2;
	};

	Getmes.prototype.printMes = function (arr) {
		var perarr = arr;
		var cola = this.cola1?this.cola1:this.cola2;
		var str = '';
		var mes = '';
		var head = '<div class="container"><div class="row"><div class="col-md-9"><div class="panel panel-primary"><div class="panel-heading">a</div><div class="panel-body"><table class="tab"><tr><td colspan="3">'+ cola +'</td><td></td><td></td><td></td><td></td><td></td></tr><tr>';
		var rear = '</tr></table></div></div></div></div></div>';
			for(var i=0,len1=perarr.length;i<len1;i+=4){
				str += '<td>'+ perarr[i] +'</td><td></td><td>'+ perarr[i + 1] +'</td><td></td><td>'+ perarr[i + 2] +'</td><td></td><td>'+ perarr[i + 3] +'</td><td></td>';
			}
		mes = head + str + rear;
		return mes;
	};

	Getmes.prototype.display = function(id,mes) {
		var sel =  $("id");
		var message = mes;
		sel.innerHTML(message);
	};

	window.ZGQ.Getmes = Getmes;
})();
