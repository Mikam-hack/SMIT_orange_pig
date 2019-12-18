document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');
var orange = document.getElementById("orange");
orange.style.position = 'fixed';

// работаем со свиньей
document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');
var pig = getElementById('pig');
pig.style.position = 'fixed';

var mouseListener = function(event){mouseMoveFunc(event)}
document.addEventListener('mousemove', mouseListener);

function mouseMoveFunc(event){
	pig.style.left = event.clientX - 64 + 'px';
	pig.style.top = event.clientY - 64 +'px';
}

