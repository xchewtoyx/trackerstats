// Saves options to chrome.storage
function save_options() {
  var influxurl = document.getElementById('influxurl').value;
  var credentials = document.getElementById('credentials').value;
  chrome.storage.sync.set({
    influxUrl: influxurl,
    influxCredentials: credentials
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    influxUrl: null,
    influxCredentials: null 
  }, function(items) {
    document.getElementById('influxurl').value = items.influxUrl;
    document.getElementById('credentials').value = items.influxCredentials;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
