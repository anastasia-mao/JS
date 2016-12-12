function regex1(){
	x=prompt("ip?: ");
	if ( x.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) ){
		alert('true');
	}
	else{
		alert('false');
	}
}