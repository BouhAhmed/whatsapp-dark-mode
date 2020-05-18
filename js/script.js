chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        $('body').addClass('dark');
    } else {
        $('body').removeClass('dark');
    }
});