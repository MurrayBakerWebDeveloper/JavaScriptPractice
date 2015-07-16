var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshiine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshiine);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButtion = document.getElementById("play");
playButtion.onclick = function() {
    playlist.play();
    var playlistElement = document.getElementById("playlist");
}

var nextButtion = document.getElementById("next");
nextButtion.onclick = function() {
    playlist.next();
    var playlistElement = document.getElementById("playlist");
}

var stopButtion = document.getElementById("stop");
stopButtion.onclick = function() {
    playlist.stop();
    var playlistElement = document.getElementById("playlist");
}