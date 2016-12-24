chat.onclick=function(event){
	if (event.target.className=="get"){
		var textbox=document.getElementById('content'),
		text= textbox.value,
		elem = document.createElement('div'),
		box=document.getElementById('box');
		idcount=box.childNodes.length;
		elem.className = "msg";
		elem.id = 'msgNumber'+(idcount+1);
		elem.innerHTML = '<p class="msgText">'+text+'</p><button class="delete">x</button>';
		box.append(elem);
		textbox.value="";	
	}
	else if (event.target.className=="delete"){
		event.target.parentElement.style.display="none";
	}
}