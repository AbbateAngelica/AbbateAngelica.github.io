var clipboard = new ClipboardJS('.js-mail-copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    document.getElementById('notificacion').style.display = "block";

    setTimeout(function() {
      notificacion.style.display = "none";
    }, 2000);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});