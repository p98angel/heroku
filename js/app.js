let sw = window.location.href + 'sw.js';
if (navigator.serviceWorker)
        navigator.serviceWorker.register(sw);
