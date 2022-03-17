var player =
document.getElementById("player");
var virus = 
document.getElementById("virus");
var counter = 5; // Startwert für Countdown
var paused=true; // Wenn auf true werden Viren nicht gewertet

function jump(eventID){
	console.log(eventID)// Ausgabe der eventID auf Webkonsole

	if (eventID == "btn_start"){ //Klick auf Start-Button
		
	}

	if(eventID == "game"){ //Bei Klick auf Spielfeld springen
		if (player.classList !="animate") {
				player.classList.add("animate");
			}
			setTimeout(function(){
				player.classList.remove("animate");
			},500);
	}

	if (eventID=="count" || eventID=="Click") { //Klick auf den Countdown oder Click zum Starten
		setInterval(function(){
			counter--;
			if (counter >=0) {
				id= document.getElementById("count");
				id.innerHTML = counter;
			}else{
				document.getElementById("count").hidden=true;//Countdown ausblenden
				paused=false;// Viren werden wieder gewertet
				virus.style.webkitAnimationPlayState="running";//Animation der Viren starten
			}
		},1000)// Timer in Millisekunden für Countdown =1s
	}

}
var checkDead = setInterval(function(){
	if(!paused){		
		var playerTop = 
		parseInt(window.getComputedStyle(player).getPropertyValue("top"));
		var virusLeft = 
		parseInt(window.getComputedStyle(virus).getPropertyValue("left"));
		if (virusLeft<20 && virusLeft>0 && playerTop>=130) {
			virus.style.animation = "none";
			virus.style.display = "none";
			alert("AAHH, YOU ARE INFECTED! PLEASE GO INTO QUARANTINE!");
		}
	}		
},10);


var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');

function playPause(ele) {
	if(audio.paused) {
		audio.play();
		ele.innerHTML = 'Stop &#9611;';
	} else {
		audio.pause();
		ele.innerHTML = 'Play &#9658;';
	}
}

