var video;
var slider;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	slider = document.querySelector("#volumeSlider");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - ((1/10)*video.playbackRate);
	console.log("Playback Rate: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (10/9) * video.playbackRate;
	console.log("Playback Rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 5;
	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Video Muted");
	 }
	 
	 else {    
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Video Unmuted");
	 }
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = slider.value/100;
	document.getElementById("volume").innerHTML = (slider.value) + '%';
	console.log("Volume: " + video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.setAttribute("class", "oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.setAttribute("class", "");
});
