function regex_fio(){
	
	function cap(str){
		return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
	}
	
	x=prompt("Введите ФИО: ");
	var fio = /^([A-zА-яёЁ]+\s+){1,2}[A-zА-яёЁ]+$/;
	var sp = /[\s]+/;
	if ( x.match(fio) ){
			var name = x.split(sp);
			if (name.length==2){
				alert ("Фамилия: "+cap(name[0])+"\nИмя: "+cap(name[1]));
			}
			else if (name.length==3){
				alert ("Фамилия: "+cap(name[0])+"\nИмя: "+cap(name[1])+"\nОтчество: "+cap(name[2]));
			}
	}
	else{
		alert('ФИО введено некорректно.');
	}
}