(function() {
    'use strict';

    var inkdrops =
        $("#stats_inkdrops .stat").text()
        .replace(',', '')
        .trim();

    var stats = {
        'site': '32p',
        'credits': inkdrops
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
