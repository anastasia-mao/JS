var arr=[];
var x=(-5);
var lines='';
for (i=0; i<21; i++){
	arr[i]=[]
	arr[i][0]=x;
	arr[i][1]=5-x*x/2;
	x+=0.5;
	lines+=arr[i][0]+'\t| '+arr[i][1]+'\n';
}
alert(lines)