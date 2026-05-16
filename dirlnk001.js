(function () {
  var STORAGE_KEY = 'p';
  var COOLDOWN = 9e5;
  var ADSTERRA = 'https://throbbingimmensely.com/cwcjsy3v?key=b271fec9ca1d37c003e7c19fc6b23b7e';

  function isReady() {
    var last = localStorage.getItem(STORAGE_KEY);
    return !last || Date.now() - last > COOLDOWN;
  }

  function markSeen() {
    localStorage.setItem(STORAGE_KEY, Date.now());
  }

  function onFirstClick() {
    if (!isReady()) return;
    window.open(ADSTERRA, '_blank');
    markSeen();
    document.removeEventListener('click', onFirstClick);
  }

  if (isReady()) {
    document.addEventListener('click', onFirstClick, { once: true });
  }
})();
