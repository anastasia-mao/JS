var map={
	1:[0,'s',0,0,0,'s','s','s','s',0],
	2:[0,0,0,0,0,0,0,0,0,0],
	3:[0,'s',0,0,0,'s','s',0,0,0],
	4:[0,'s',0,0,0,0,0,0,0,0],
	5:[0,'s',0,0,0,0,0,0,'s',0],
	6:[0,0,0,0,0,0,0,0,0,0],
	7:[0,'s',0,'s','s',0,0,0,0,'s'],
	8:[0,0,0,0,0,0,0,0,0,0],
	9:[0,'s',0,0,0,0,'s','s','s',0],
	10:[0,'s',0,0,0,0,0,0,0,0],
}

function render(){
	var lines='';
	for (y in map){
		var line='';
		for (x=0; x<10; x++){
			line+=map[y][x]+'\t';
		}
		line+='\n';
		lines+=line;
	}
	console.log(lines);
	
}

function shot (x,y){
	if(x<=10&&x>0&&y<=10&&y>0){
		if(map[x][y-1]=='s'){
			console.log('попал');
			map[x][y-1]='x';
			render();
		}
		else{
			console.log('не попал');
			map[x][y-1]='-';
			render();
		}
	}
}