(function () {
  var AD_KEY = '7ae00591146ba3954fa952c008324bf3';
  var AD_SRC = 'https://throbbingimmensely.com/' + AD_KEY + '/invoke.js';
  var AD_WIDTH = 300;
  var AD_HEIGHT = 250;

  function loadFontAwesome() {
    if (document.querySelector('link[href*="fontawesome"]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.insertBefore(link, document.head.firstChild);
  }

  function createPopup(position) {
    var popup = document.createElement('div');
    Object.assign(popup.style, {
      position: 'fixed',
      zIndex: '999999',
      background: '#fff',
      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      borderRadius: '6px',
      overflow: 'hidden',
      width: AD_WIDTH + 'px',
    });

    if (position === 'top-left') {
      popup.style.top = '10px';
      popup.style.left = '10px';
    } else {
      popup.style.bottom = '10px';
      popup.style.right = '10px';
    }

    var bar = document.createElement('div');
    Object.assign(bar.style, {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: '#f1f1f1',
      padding: '3px 6px',
      borderBottom: '1px solid #ddd',
    });

    var closeBtn = document.createElement('button');
    Object.assign(closeBtn.style, {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '15px',
      color: '#666',
      padding: '0',
      lineHeight: '1',
      display: 'flex',
      alignItems: 'center',
    });
    closeBtn.setAttribute('aria-label', 'Close ad');
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBtn.addEventListener('click', function () {
      popup.remove();
    });

    bar.appendChild(closeBtn);
    popup.appendChild(bar);

    var frame = document.createElement('iframe');
    Object.assign(frame.style, {
      display: 'block',
      border: 'none',
      width: AD_WIDTH + 'px',
      height: AD_HEIGHT + 'px',
    });
    frame.scrolling = 'no';
    popup.appendChild(frame);
    document.body.appendChild(popup);

    var doc = frame.contentDocument || frame.contentWindow.document;
    doc.open();
    doc.write(
      '<scr' + 'ipt>' +
        'atOptions={' +
          '"key":"' + AD_KEY + '",' +
          '"format":"iframe",' +
          '"height":' + AD_HEIGHT + ',' +
          '"width":' + AD_WIDTH + ',' +
          '"params":{}' +
        '};' +
      '</scr' + 'ipt>' +
      '<scr' + 'ipt src="' + AD_SRC + '"></scr' + 'ipt>'
    );
    doc.close();
  }

  function init() {
    loadFontAwesome();
    createPopup('top-left');
    createPopup('bottom-right');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
