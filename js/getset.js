function getset(){
	function warrior(myname,weapon,maxbullets){
		var bullets=0; // Текущее число патронов
		this.getbullets = function(amount){
			if (amount){
				if (amount<=0) {alert('Дай больше 0!');return;}
				if (amount+bullets>maxbullets) {
					alert('Взял ' +(maxbullets-bullets)+ ' патронов из '+amount);
					bullets=maxbullets;
				}
				else{
					bullets+=amount;
					alert('Взял '+bullets+' патронов');
				}
			}
			else{
				alert('У меня '+bullets+' патронов из '+maxbullets);
			}
		}
	}

	valera = new warrior('Валера','Автомат',300);
	valera.getbullets();
	valera.getbullets(50);
	valera.getbullets(270);
	valera.getbullets();
	
}