function regex_mail(){
	x=prompt("search 'mailforspam': ");
	var mail = /^[\w]+@([\w]+\.)+[\w^_]{2,10}$/;
	//var mail = /^([A-яёЁ\w-]+\.)*[A-яёЁ\w-]+@([A-яёЁ\w-]+\.)+[A-яёЁ\w^_]{2,10}$/;
	var spam = /@mailforspam|\.mailforspam\./;
	if ( x.match(mail) ){
		if ( x.match(spam) ){
			alert('false');
		}
		else{
			alert('true');
		}
	}
	else{
		alert('false');
	}
}


