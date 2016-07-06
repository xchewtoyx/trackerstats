(function() {
    'use strict';

    var inkdrops = $("#stats_inkdrops .stat").text().trim();
    var stats = {
        'site': '32p',
        'credits': inkdrops
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
