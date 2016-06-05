'use strict';

var FACTORS = {
    'MB': 1000000,
    'GB': 1000000000,
    'TB': 1000000000000
};

function tobytes(valueString) {
    var value = valueString.split(' ');
    return value[0] * FACTORS[value[1]];
}

function postStats(stats, sender, sendResponse) {
    var metrics = 'transfer_bytes,site=' + stats.site + ' up=';
    metrics += tobytes(stats.up) + ',down=' + tobytes(stats.down) + '\n';
    metrics += 'ratio,site=' + stats.site + ' value=' + stats.ratio + '\n';
    if (stats.credits) {
        metrics += 'credits,site=' + stats.site + ' value=' + stats.credits + '\n';
    }
    chrome.storage.sync.get(null, function (options) {
      console.log(metrics);
    
      if(options.influxUrl && options.influxCredentials) {
        $.ajax({
          url: options.influxUrl,
          type: 'POST',
          data: metrics,
          dataType: 'text',
          headers: {
            Authorization: 'Basic ' + options.influxCredentials,
          }
        });
      } else {
        console.log('Configure the Torrent Stats extension.');
      }
    });
}

(function() {
    chrome.runtime.onMessage.addListener(postStats);
})();
