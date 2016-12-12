function prPow(){
	
	var x=prompt("Введите число для проверки:");
	var y=prompt("Степень какого числа надо проверить :");
	
	
	function primePower(x, y){
		if ((y==1&&x!=1) || ((x!=0&&x!=1)&&y==0)) return "NO";
		else if (x==0&&y==0) return "YES";
		else if (x==1) return "YES";
		else if (x%y!=0) return "NO";
		else {
			if (x/y==1) return "YES";
			else {
				return primePower(x/y, y);
			}
		}
	}
	
	alert(primePower(x,y));
}