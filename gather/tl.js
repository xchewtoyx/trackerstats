(function() {
    'use strict';

    var stats = {
        'site': 'tl',
        'up': $('span.uploaded')[0].nextSibling.nodeValue.trim(),
        'down': $('span.downloaded')[0].nextSibling.nodeValue.trim(),
        'ratio': $('span.memberbar_alt')[1].nextSibling.nodeValue.trim()
    };
    console.log(stats);
    chrome.runtime.sendMessage(stats);
})();
