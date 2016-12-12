function regex_list(){
	
	//x=prompt("Введите список покупок: ");
	x="сыр 200   г\nколбаса 1 шт.\nмяско 25 кило\nкреветки 3500.50 г";
	alert(x);
	var product = /^[A-zА-яёЁ]+$/;
	var weight = /^[0-9]+(\.[0-9]+)?$/;
	var q = /^[A-zА-яёЁ]+\.?$/;
	
	var n = /[\n]/;
	var s = /[\s]+/;
	
	var list = x.split(n);
	
	var outlist = [];
	
	for (i=0; i<list.length; i++){
		var out = list[i].split(s);
		if ( (out.length==3) && (out[0].match(product)) && (out[1].match(weight)) && (out[2].match(q)) ){
			switch(out[2]){
				case 'г':
					out[2]='кг';
					out[1]/=1000;
					break;
				case 'кило':
					out[2]='кг';
					break;
				default:
					break;
			}
			alert(out[0]+' ('+out[1]+' '+out[2]+')');
		}
		else{
			alert('неправильный формат строки');
		}
	}
}