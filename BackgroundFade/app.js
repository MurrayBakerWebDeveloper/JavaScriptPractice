function fadeDiv(hex){
    $(".start").animate({backgroundColor: hex }, 500);
}


function gradient(startColor, endColor, steps) {
    var start = {
        'Hex'   : startColor,
        'R'     : parseInt(startColor.slice(1,3), 16),
        'G'     : parseInt(startColor.slice(3,5), 16),
        'B'     : parseInt(startColor.slice(5,7), 16)
    }
    var end = {
        'Hex'   : endColor,
        'R'     : parseInt(endColor.slice(1,3), 16),
        'G'     : parseInt(endColor.slice(3,5), 16),
        'B'     : parseInt(endColor.slice(5,7), 16)
    }
    diffR = end['R'] - start['R'];
    diffG = end['G'] - start['G'];
    diffB = end['B'] - start['B'];

    stepsHex  = [];
    stepsR    = [];
    stepsG    = [];
    stepsB    = [];

    for(var i = 0; i <= steps; i++) {
        stepsR[i] = start['R'] + ((diffR / steps) * i);
        stepsG[i] = start['G'] + ((diffG / steps) * i);
        stepsB[i] = start['B'] + ((diffB / steps) * i);
        stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
    }
    return stepsHex;

}
changes = gradient("#ffff00", "#0000ff", 50);

$(document).ready(function(){
    for(var i = 0; i < changes.length; i++) {
        fadeDiv(changes[i]);
        console.log(i, changes[i]);
    }
});