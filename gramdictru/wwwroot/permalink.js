(function () {

  'use strict';  

  function injectStyles() {
    var css = ['.permalink {',
          'color: inherit;',
          'padding-left: 50px;',
          'margin-left: -50px;',
    '}',
    '',    
    'h1 a.permalink,',
    'h2 a.permalink,',
    'h3 a.permalink,',
    'h4 a.permalink,',
    'h5 a.permalink,',
    'h6 a.permalink {',
        'color: inherit; text-decoration: inherit;}',
    '',    
    'p:hover a.permalink:before,',
    'li:hover a.permalink:before,',
    'h1:hover a.permalink:before,',
    'h2:hover a.permalink:before,',
    'h3:hover a.permalink:before,',
    'h4:hover a.permalink:before,',
    'h5:hover a.permalink:before,',
    'h6:hover a.permalink:before {',
      'content: "§";',
      'position: absolute;',
      'left: -20px;',
      'width: 30px;',
    '}', ].join('');

    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  function permalinkForHeaders() {
      var $ = document.querySelectorAll.bind(document);

      [].forEach.call($('h1,h2,h3,h4,h5,h6'), function (el) {
          if (!el.id)
              return;
          el.style = 'position: relative;';
          el.innerHTML = '<a class="permalink" href="#' + el.id + '">' + el.innerHTML + '</a>';
      });
  }

  function permalinkForParagraph() {
      var $ = document.querySelectorAll.bind(document);

      var a = document.createElement('a');      
      a.className = 'permalink';

    [].forEach.call($('p,li'), function (el) {
        if (!el.id)
            return;

        var clone = a.cloneNode(true);
        clone.href = '#' + el.id;
        el.style = 'position: relative;';
        el.insertBefore(clone, el.firstChild);
    });
  }

  if (document.querySelector && Function.prototype.bind) {
    injectStyles();
    permalinkForHeaders();
    permalinkForParagraph();
    if (window.location.hash && window.scrollY === 0) {
      // touching the location will cause the window to scroll
      window.location = window.location;
    }
  }
})();
