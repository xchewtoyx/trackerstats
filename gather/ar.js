(function() {
    'use strict';

    var stats = {
        'site': 'ar',
        'up': $('#stats_seeding .stat').text(),
        'down': $('#stats_leeching .stat').text(),
        'ratio': $('#stats_ratio .stat').text()
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
