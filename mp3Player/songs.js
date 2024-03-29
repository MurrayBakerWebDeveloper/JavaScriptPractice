function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
}

Song.prototype.play = function() {
    this.isPlaying = true;
};

Song.prototype.stop = function() {
    this.isPlaying = false;
};

Song.prototype.toHTML = function() {
    htmlString = '<li';
    if (this.isPlaying) {
        htmlString += 'class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '</span></li>';
    console.log (htmlString);
    return htmlString;
};