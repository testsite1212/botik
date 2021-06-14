document.getElementById('sub').onclick = function() {
	let inp = document.getElementById('inp').value;
	let p = document.getElementById('left');
	let a = document.querySelector('.righ');
	let d = document.querySelector('.let');
	let f = document.querySelector('.right');

	if (inp === 'здоров') {
		p.innerHTML = 'здоров';
		a.innerHTML = 'Добрий день';
	}
	else if (inp === 'ти нуб') {
		d.innerHTML = 'ти нуб';
		f.innerHTML = 'тут нуб лиш ти';
	}
	else if (inp === 'Марина розумна?') {
		d.innerHTML = 'Марина розумна,';
		f.innerHTML = 'Не знаю може так';
	}
	else if (inp === 'Женя розумний?') {
		d.innerHTML = 'Женя розумний?';
		f.innerHTML = 'Він лошара';
	}
	else if (inp === 'Богдан розумний?') {
		d.innerHTML = 'Богдан розумний?,';
		f.innerHTML = 'ВІН ГЕНІЙ';
	}
	else if (inp === 'Даш 100 руб?') {
		d.innerHTML = 'Даш 100 руб?,';
		f.innerHTML = 'Женя іди в дупу';
	}
	else if (inp === 'Ти дибил!!!') {
		d.innerHTML = 'Ти дибил!!!';
		f.innerHTML = 'Сам ти такий';
	}
	else if (inp === 'Богдан нуб?') {
		d.innerHTML = 'Богдан нуб?';
		f.innerHTML = 'Ні ВІН ГЕНІЙ';
	}
	else if (inp === 'Хочеш поговорити?') {
		d.innerHTML = 'Хочеш поговорити?';
		f.innerHTML = 'Якшо з Женьом ні';
	}
	else if (inp === 'Скільки тобі років?') {
		d.innerHTML = 'Скільки тобі років?';
		f.innerHTML = 'Мені 2 год';
	}
	else if (inp === 'Знаєш маму Богдана?') {
		d.innerHTML = 'Знаєш маму Богдана?';
		f.innerHTML = 'Так звісно';
	}
	else if (inp === 'Богдан босс?') {
		d.innerHTML = 'Богдан босс?';
		f.innerHTML = 'Так він ГЕНІЙ';
	}
	else if (inp === 'Хочеш грошей?') {
		d.innerHTML = 'Хочеш грошей?';
		f.innerHTML = 'Дай Богдану';
	}
	else if (inp === 'Як тебе звати?') {
		d.innerHTML = 'Як тебе звати?';
		f.innerHTML = 'BHD';
	}

}