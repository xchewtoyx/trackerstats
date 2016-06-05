(function() {
    'use strict';

    var stats = {
        'site': 'mam',
        'up': $('#uploadedTD').text().trim(),
        'down': $('#downloadedTD').text().trim(),
        'credits': $('#bonusLink').text().split(':')[1].trim(),
        'ratio': $('#RatioTD').text().split(':')[1].trim()
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
