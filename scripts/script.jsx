//Source: https://gist.github.com/jlong/2428561
var parser = document.createElement('a');
parser.href = window.location.href;

var userLang = parser.search.split('lang=')[1];

if (!userLang) {
    userLang = navigator.language.substring(0, 2);
}

if (userLang != 'fr') {
    userLang = 'en';
}

function shareSocial(socialnetwork) {
    var wWidth = 570;
    var wHeight = 520;
    
    //Source: http://jsfiddle.net/w665x/138/
    var x = screen.width/2 - wWidth/2 + window.screenX;
    var y = screen.height/2 - wHeight/2 + window.screenY;
    window.open(socialnetwork, 'SocialSharing','width='+ wWidth + ',height=' + wHeight + ',left=' + x + ',top=' + y);
}
