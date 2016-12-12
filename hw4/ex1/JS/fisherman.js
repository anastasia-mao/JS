var fisherman={
	name:'Петр',
	surname:'Каратай',
	experience:59,
		put: function (intitle, inweight, incount){
				if (intitle in fisherman.backpack) {
					fisherman['backpack'][intitle]['weight']+=inweight;
					fisherman['backpack'][intitle]['count']+=incount;
				}
				else fisherman.backpack[intitle]={weight:inweight, count:incount};
			},
		get: function (intitle, inweight, incount){
				if (intitle in fisherman.backpack) {
					if (inweight<=fisherman['backpack'][intitle]['weight'] &&incount<=fisherman['backpack'][intitle]['count']){
					fisherman['backpack'][intitle]['weight']-=inweight;
					fisherman['backpack'][intitle]['count']-=incount;	
					}
					else {
						console.log('Вы не можете убрать столько из рюкзака объект '+intitle+ ', т.к. есть всего:\nВес - '
						+(fisherman['backpack'][intitle]['weight'])+'г, Количество - '+fisherman['backpack'][intitle]['count']+' шт.');
					}
				}
				else fisherman.backpack[intitle]={weight:inweight, count:incount};
			},
		weightBackpack: function (){
			var w=0;
			for (key in fisherman.backpack){
				w+=fisherman.backpack[key]['weight'];
			}
			console.log('Вес рюкзака '+w+'г');
		},
	backpack:{
		'Удочка':{'weight':300, 'count':1},
		'Наживка':{'weight':20, 'count':5},
		'Леска':{'weight':10, 'count':1},
		'Грузила':{'weight':30, 'count':5},
		'Крючки':{'weight':1, 'count':30},
	}
}
console.log('Рыбак: '+fisherman.surname+' '+fisherman.name+'\nОпыт рыбаловства '+fisherman.experience);

for (key in fisherman.backpack){
	console.log(fisherman.backpack[key]);
}

/*function put(intitle, inweight, incount){
	if (intitle in fisherman.backpack) {
		fisherman['backpack'][intitle]['weight']+=inweight;
		fisherman['backpack'][intitle]['count']+=incount;
	}
	else fisherman.backpack[intitle]={weight:inweight, count:incount};
}*/
