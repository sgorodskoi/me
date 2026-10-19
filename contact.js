(function () {
  function address(el) {
    return el.getAttribute('data-mail-user') + '@' + el.getAttribute('data-mail-host');
  }

  function each(selector, handler) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) handler(nodes[i]);
  }

  each('[data-mail-link]', function (el) {
    el.href = 'mailto:' + address(el);
  });

  each('[data-mail-reveal]', function (el) {
    el.addEventListener('click', function () {
      var mail = address(el);
      var link = document.createElement('a');
      link.href = 'mailto:' + mail;
      link.textContent = mail;
      el.parentNode.replaceChild(link, el);
      link.focus();
    });
  });
})();
