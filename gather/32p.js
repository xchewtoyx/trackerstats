(function() {
    'use strict';

    var multipliers = {
        '': 1,
        k: 1000,
        M: 1000000
    };

    function normalise(drops) {
        var parts = inkdrops.match(/^([\d.]+)([kM]?)$/);
        var drops = parts[1];
        var multiplier = parts[2];
        return drops * multipliers[multiplier];
    }

    var inkdrops =
        $("#stats_inkdrops .stat").text()
        .replace(',', '')
        .trim();

    var stats = {
        'site': '32p',
        'credits': normalise(inkdrops)
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
