document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');
var orange = document.getElementById("orange");
orange.style.position = 'fixed';

// работаем со свиньей
document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');
var pig = getElementById('pig');
pig.style.position = 'fixed';

var mouseListener = function(event){mouseMoveFunc(event)}
document.addEventListener('mousemove', mouseListener);
spawnOrange();

function mouseMoveFunc(event){
	pig.style.left = event.clientX - 64 + 'px';
	pig.style.top = event.clientY - 64 +'px';
	checkCollision();
}

// spawn orange

function spawnOrange(){
	orange.style.left = Math.random()*(window.innerWidth()-128) + 'px';
	orange.style.top = Math.random()*(window.innerHeight() -128) + 'px';
}

//проверка коллизий

function checkCollision(){
	if(Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2) + Math.pow(pig.offsetTop - orange.offsetTop, 2)) < 128){
		spawnOrange();
		score++;
		setScore();
	}
}