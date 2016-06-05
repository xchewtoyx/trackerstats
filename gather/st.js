(function() {
    'use strict';

    var stats = {
        'site': 'st',
        'up': $($('#Statusdiv font')[2]).text(),
        'down': $($('#Statusdiv font')[3]).text(),
        'credits': $('#Statusdiv a[href="mybonus.php"]').text(),
        'ratio': $($('#Statusdiv font')[0]).text()
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
