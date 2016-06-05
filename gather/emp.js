(function() {
    'use strict';

    var stats = {
        'site': 'emp',
        'up': $($('#stats_block .stat')[1]).text(),
        'down': $($('#stats_block .stat')[3]).text(),
        'credits': $($('#stats_block .stat')[0]).text(),
        'ratio': $($('#stats_block .stat')[5]).text()
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
