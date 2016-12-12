function reCv(){
	var input=prompt("Введите число:");

	function reCverse(str, rev){
		rev = rev || '';
		if (str.length == 1){
			rev+=str;
			return rev;
		}
		else{
			rev+=str[str.length-1];
			return reCverse(str.substring(0, str.length-1), rev);
		}
	}

	alert("reverse: "+ reCverse(input));
}

