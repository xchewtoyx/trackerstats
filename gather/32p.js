(function() {
    'use strict';

    var inkdrops = $("#stats_inkdrops .stat").text().trim();
    var stats = {
        'site': '32p',
        'up': 0,
        'down': 0,
        'ratio': 0,
        'credits': inkdrops
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
