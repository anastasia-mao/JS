function palindrom(){
	
	b=prompt("Введите слово\строку, чтобы проверить палиндром ли это: ");
	
	function pal(instr, outstr){
		instr = instr;
		outstr = outstr || '';
		if (outstr.length==b.length){
			if (b==outstr){
				return 'YES';
			}
			else return 'NO';
		}
		else{
			outstr+=instr[instr.length-1];
			return (pal(instr.substring(0, instr.length-1), outstr));
		}
	}
	
	alert(pal(b));
	
}
