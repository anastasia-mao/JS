var testjson = '[ \
		{"key":1, "price":100, "itemName":"Картоха", "itemImg":"img/potato.png"},\
		{"key":2,"price":200,"itemName":"Маркоха","itemImg":"img/Carrot.jpg"},\
		{"key":3,"price":300,"itemName":"Манго","itemImg":"img/mango.jpg"}\
]'


function addElement(parent, tag, attr, text){
	var par = document.getElementById(parent),
	elem = document.createElement(tag),
	text = text || "";
	for (a in attr){
		elem.setAttribute(attr[a][0],attr[a][1]);
	}
	elem.innerHTML = text;
	par.appendChild(elem);
}


function getJsonCount(json){
	var items = JSON.parse(json);
	return items.length;
}

function getJsonObjectKeys(json, object, keys){
	var items = JSON.parse(json),
	itemsArr = [];
	for (k in keys){
		itemsArr.push(items[object][keys[k]])
	}
	return itemsArr;
}

function findKey(json, key){
	for (i=0; i<getJsonCount(testjson); i++){
		if (getJsonObjectKeys(testjson, i, ["key"])==key) return i;
	}
}


function catalog(){
	for (i=0; i<getJsonCount(testjson); i++){
		var item = getJsonObjectKeys(testjson, i, ["key", "itemName", "price", "itemImg"]),
		key = item[0],
		itemName = item[1],
		price = item[2],
		itemImg = item[3];
		addElement('catalog', 'div', [[ 'id','catalogItemId'+key ], ['class', 'catalogItem']]);
		addElement('catalogItemId'+key, 'img', [ ['class', 'catalogImg'], ['src',itemImg] ]);
		addElement('catalogItemId'+key, 'h3', [ ['class', 'catalogHeader'] ], itemName);
		addElement('catalogItemId'+key, 'h5', [ ['class', 'catalogPrice'] ], price);
		addElement('catalogItemId'+key, 'button', [ ['id', 'add'+key], ['onclick','basket.add('+key+',1); basket.clear(); basket.render();'] ], 'Добавить');
		//console.log(itemImg);
	}
}

catalog();

var basket = {
	items: {},
	sum: 0,
	add:function(key, count){
		if (key in basket.items){
			basket['items'][key]+= count;
		}
		else {
			basket['items'][key]=count;
		}
	},
	del:function(itemIndex){
			delete basket.items[itemIndex+1]; //itemIndex+1 т.к. itemIndex - индекс в basket.items, а удаляется по ключу
			document.getElementById('basketItemId'+itemIndex).remove();
	},
	recalc:function(){
		this.sum = 0;
		for ( i in basket.items ){
			this.sum+=basket.items[i]*getJsonObjectKeys(testjson, findKey(testjson,i), ['price'])[0];
		}
		return this.sum;
	},
	render:function(){
		this.recalc;
		for ( i in this.items ){
			var item = findKey(testjson,i),
			itemKeys = getJsonObjectKeys(testjson, item, ["itemName", "price", "itemImg"]),
			itemName = itemKeys[0],
			price = itemKeys[1],
			itemImg = itemKeys[2];
			console.log('img:'+itemImg);
			addElement('basket', 'div', [[ 'id','basketItemId'+i ], ['class', 'basketItem']]);
			addElement('basketItemId'+i, 'img', [ ['class', 'basketImg'], ['src',itemImg] ]);
			addElement('basketItemId'+i, 'h3', [ ['class', 'basketHeader'] ], itemName);
			addElement('basketItemId'+i, 'input', [ ['type', 'text'],['class', 'basketCount'],['value', this.items[i+1]] ] );
			addElement('basketItemId'+i, 'h5', [ ['class', 'basketPrice'] ], price);
			addElement('basketItemId'+i, 'button', [ ['id', 'del'+i], ['onclick','basket.del('+i+');basket.clear(); basket.render();'] ], 'Удалить');
		}
		addElement('basket', 'span', [[ 'id','sumtext'], ['class', 'sumtext']], 'Итого: ');
		addElement('basket', 'span', [[ 'id','sum'], ['class', 'sum']], this.recalc());
	},
	clear:function(){
		document.getElementById('basket').remove();
		var catalog = document.getElementById('catalog'),
		div = document.createElement('div');
		div.id = 'basket';
		div.className = 'basket';
		body.insertBefore(div,document.getElementById('catalog'));
		addElement('basket', 'h2', [[ 'id','basketHead'], ['class', 'basketHead']], 'Корзина');
	}
	
}

function init(){
	basket.clear();
	addElement('catalog', 'h2', [[ 'id','catalogHead'], ['class', 'catalogHead']], 'Каталог');
	basket.render();

}

init();
