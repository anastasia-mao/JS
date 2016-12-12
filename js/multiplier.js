function multipliers(){
	
	var a=prompt("Введите число для проверки:");
	if (a<1) return alert('Вы ввели неправильное число');
	else if (a==1) return alert('1');
	
	function mult(x, lines){ // вариант без запоминания множителя
		this.lines = lines || ''; // строка с множителями
		for (i=2; i<=x; i++){
			if (x==i){
				this.lines+=i+'   '+y+'   '+this.z;
				return this.lines;
			}
			else if (x%i==0){
				this.lines+=i+', ';
				return mult(x/i, this.lines, i);
			}
		}
	}
	
	alert(mult(a));
}


/* Правильный(в математике) вариант с запоминанием текущего множителя. too much recursion!
	function mult(x, lines, i){
		lines = lines || ''; // строка с множителями
		i = i || 2;
		if (x==i){
			lines+=i;
			return lines;
		}
		else if (x%i==0){
			lines+=i+', ';
			return mult(x/i, lines, i);
		}
		else{
			i++;
			return mult(x, lines, i);
		}
	}
*/