a=prompt('Введите cлово');
a=parseInt(a);
a=a.toString(3);
b=a.length;
c='';
while (b>0) {
	b--;
	c+=a[b];
}
c=parseInt(c, 3);
alert(c);
