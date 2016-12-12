var smart={}
smart.name='g9100';
smart['hdd']=8192;//Mb
smart['ram']=2048;//Mb
smart.apps=[];//Установленные приложения
smart.active=[];//Запущенные приложения
smart.addapp=function(name,hdd,ram){
	x=smart.apps.length;
	smart.apps[x]={};
	smart.apps[x].name=name;
	smart.apps[x].hdd=hdd;
	smart.apps[x].ram=ram;
}
smart.start=function(n){
	smart.active.push(n);
}
smart.mystatus=function(){
	usedhdd=0;
	for (i=0;i<smart.apps.length;i++){
		usedhdd+=smart['apps'][i].hdd;
	}
	usedram=120;
	for (i=0;i<smart.active.length;i++){
		j=smart.active[i];
		//j????
		usedram+=smart['apps'][j].ram;
	}
	console.log('Модель:' +smart.name+' \nЖесткий диск: '+usedhdd+'/'+smart.hdd+'\nПотребление памяти: '+usedram+'/'+smart.ram);
}
smart.addapp('firefox',30,250);
smart.addapp('opera',300,200);
smart.addapp('chrome',50,300);
smart.addapp('Мимимишки',120,5)
smart.start(2);
smart.mystatus();