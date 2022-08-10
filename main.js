var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elStart = document.querySelector('.start');
var elEnd = document.querySelector('.end');
var elList = document.querySelector('.list');

var show = function(){
	elList.textContent = '';
		var x = 0;
		things.forEach(function(thing){
			var li = document.createElement('li');
			li.textContent = thing;
			var btn = document.createElement('button');
			btn.classList.add('remove');
			btn.textContent = 'x';
			btn.dataset.id = x++;
			li.appendChild(btn);
			elList.appendChild(li);
		});
}

var things = [];

if(localStorage.getItem('narsalar')){
	var things = localStorage.getItem('narsalar').split(',');
	show();
}

elForm.addEventListener('submit', function(evt){
	evt.preventDefault();
});

// Boshiga qo'shish
elStart.addEventListener('click', function(){
	if(elInput.value.trim() === ''){
		alert("To'ldir");
		elInput.value = '';
	} else if(things.indexOf(elInput.value) !== -1){
		alert("Bu narsa ro'yxatda bor");
	} else {
		things.unshift(elInput.value);
		elInput.value = '';
				
		localStorage.setItem('narsalar', things);
		show(things);
	}
});

// Oxiriga qo'shish
elEnd.addEventListener('click', function(){
	if(elInput.value.trim() === ''){
		alert("To'ldir");
		elInput.value = '';
	} else if(things.indexOf(elInput.value) !== -1){
		alert("Bu narsa ro'yxatda bor");
	} else {
		things.push(elInput.value);
		elInput.value = '';
				
		localStorage.setItem('narsalar', things);
		show(things);
	}
});

elList.addEventListener('click', function(evt){
	if(evt.target.classList.contains('remove')){
		var index = Number(evt.target.dataset.id);
		things.splice(index, 1);
		
		localStorage.setItem('narsalar', things);
		show(things);
	}
});