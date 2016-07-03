(function() {
    'use strict';

    var statstring = $($('#top span')[4]).text();
    var sep = $('<span>&nbsp;&nbsp;</span>').text();
    var readings = statstring.split(sep);
    console.log(readings);
    var stats = {
        'site': 'tvc',
        'up': readings[3].split(': ')[1],
        'down': readings[4].split(': ')[1],
        'credits': readings[1].split(': ')[1],
        'ratio': readings[0].split(': ')[1]
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
