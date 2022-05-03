createActive('hb1', 'hbi');
createActive('hm', 'hbi');
createActive('hal', 'hbi');


let b = document.getElementById('hb1');
let s = document.querySelector('body');
b.addEventListener('click', function (){
		s.classList.toggle('active')
	})
 
