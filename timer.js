// Sperax Walk to Win Challenge - Countdown Timer
// Hardcoded to display April 1st 12:59 AM consistently across all timezones
(function() {
  // HARDCODED END TIME - NO TIMEZONE CALCULATIONS
  var END = new Date('04/01/2026 00:59:59');
  
  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateCountdowns() {
    var now = new Date();
    var diff = END - now;

    if (diff <= 0) {
      diff = 0;
    }

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);

    // Update main countdown bar (if elements exist)
    var cdDays = document.getElementById('cd-days');
    var cdHours = document.getElementById('cd-hours');
    var cdMins = document.getElementById('cd-mins');
    var cdSecs = document.getElementById('cd-secs');
    
    if (cdDays) cdDays.textContent = pad(days);
    if (cdHours) cdHours.textContent = pad(hours);
    if (cdMins) cdMins.textContent = pad(mins);
    if (cdSecs) cdSecs.textContent = pad(secs);

    // Update dates section countdown (if elements exist)
    var dcDays = document.getElementById('dc-days');
    var dcHours = document.getElementById('dc-hours');
    var dcMins = document.getElementById('dc-mins');
    var dcSecs = document.getElementById('dc-secs');
    
    if (dcDays) dcDays.textContent = pad(days);
    if (dcHours) dcHours.textContent = pad(hours);
    if (dcMins) dcMins.textContent = pad(mins);
    if (dcSecs) dcSecs.textContent = pad(secs);
  }

  // Run immediately and then every second
  updateCountdowns();
  setInterval(updateCountdowns, 1000);
})();
