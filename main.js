// Clipboard (para copiar en el portapapeles)

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

// Swiper initialization

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  // autoplay: {
  //   delay: 25000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});