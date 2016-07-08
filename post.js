(function() {
    'use strict';

    var FACTORS = {
        'MB': 1000000,
        'MiB': 1024 * 1024,
        'GB': 1000000000,
        'GiB': 1024 * 1024 * 1024,
        'TB': 1000000000000,
        'TiB': 1024 * 1024 * 1024 * 1024
    };

    function tobytes(valueString) {
        var value = valueString.split(' ');
        return value[0] * FACTORS[value[1]];
    }

    function postStats(stats, sender, sendResponse) {
        var metrics = '';
        console.log(new Date().toLocaleString() + ' site=' + stats.site);
        if(stats.up && stats.down) {
            metrics += 'transfer_bytes,site=' + stats.site;
            metrics += ' up=' + tobytes(stats.up);
            metrics += ',down=' + tobytes(stats.down) + '\n';
        }
        if(stats.ratio) {
            metrics += 'ratio,site=' + stats.site;
            metrics += ' value=' + stats.ratio + '\n';
        }
        if (stats.credits) {
            metrics += 'credits,site=' + stats.site;
            metrics += ' value=' + stats.credits + '\n';
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
                })
                    .fail(function(jqXHR, textStatus) {
                        console.log(
                            'Failed to post stats to ' +
                                options.influxUrl +
                                ' Reason: ' +
                                textStatus
                        );
                    });
            } else {
                console.log('Configure the Torrent Stats extension.');
            }
        });
    }

    (function() {
        chrome.runtime.onMessage.addListener(postStats);
    })();
}());
