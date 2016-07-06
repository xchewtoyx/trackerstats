(function() {
    'use strict';

    var inkdrops = $("#stats_inkdrops .stat").text().trim();
    var stats = {
        'site': '32p',
        'up': "0 Mb",
        'down': "0 Mb",
        'ratio': 0,
        'credits': inkdrops
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
