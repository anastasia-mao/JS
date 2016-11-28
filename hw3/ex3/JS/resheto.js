x=prompt('Введите максимальное число');
x=parseInt(x);
var t=simple(x);
function simple(max){
	var arr=[];
	for (var i=2;i<=max;i++){
	arr[i]=true;
	}
	n=2;
	while (n*n<=max){
		if (arr[n]==true){
			for(i=2;i*n<=max;i++){
			arr[i*n]=false;
			}
		}
	n++;
	}
	return arr;
}

console.log('Простые числа:\n');
for (i=2;i<=x;i++){
	if (t[i]) console.log(i+'\t');
}