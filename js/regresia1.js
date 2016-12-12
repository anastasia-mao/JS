function factorial(){
	var a=prompt('введите число');
	a=parseInt(a);
	function recurfac(n){
		if (n==1||n==0)return 1;
		else return n*recurfac(n-1);
	}
	alert('факториал числа' +a+ ' = '+recurfac(a));
}