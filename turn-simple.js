/* 
 * Simple 3D Flip Book Library
 * Based on sogithehuman.neocities.org flip transition style
 * Simplified version inspired by turn.js
 */

(function($) {
  'use strict';

  // CSS prefix detection
  function getCSSPrefix() {
    var prefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
    var prefix = '';
    for (var i = prefixes.length - 1; i >= 0; i--) {
      if (prefixes[i] + 'Transform' in document.body.style) {
        prefix = '-' + prefixes[i].toLowerCase() + '-';
        break;
      }
    }
    return prefix;
  }

  var cssPrefix = getCSSPrefix();
  var isTouch = 'ontouchstart' in window;

  // Default options
  var defaults = {
    width: 800,
    height: 600,
    duration: 2000, // 2초 전환 (웹사이트와 동일)
    easing: 'ease-out', // 웹사이트와 동일
    perspective: 3000,
    autoCenter: true,
    when: null
  };

  // Main flipbook object
  var Flipbook = {
    init: function(options) {
      var self = this;
      var $flipbook = $(this);
      var opts = $.extend({}, defaults, options);
      
      // Store options
      $flipbook.data('flipbook-opts', opts);
      $flipbook.data('flipbook-current-page', 1);
      $flipbook.data('flipbook-total-pages', 0);
      $flipbook.data('flipbook-animating', false);

      // Set up container
      $flipbook.css({
        position: 'relative',
        width: opts.width,
        height: opts.height,
        perspective: opts.perspective + 'px',
        perspectiveOrigin: 'center center',
        transformStyle: 'preserve-3d'
      });

      // Add book container
      var $book = $('<div class="flipbook-book"></div>').css({
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(20deg)',
        transformOrigin: 'center center'
      });

      $flipbook.append($book);
      $flipbook.data('flipbook-book', $book);

      // Process existing pages
      var $pages = $flipbook.find('.page, .hard');
      var totalPages = $pages.length;
      $flipbook.data('flipbook-total-pages', totalPages);

      // Create leaf structure for each page pair
      var $leaves = $('<div class="flipbook-leaves"></div>');
      $book.append($leaves);

      $pages.each(function(index) {
        var pageNum = index + 1;
        var $page = $(this);
        
        // Create leaf wrapper
        var $leaf = $('<div class="flipbook-leaf" data-page="' + pageNum + '"></div>');
        
        // Set initial z-index (뒤에서 앞으로)
        var zIndex = totalPages - index;
        $leaf.css({
          position: 'absolute',
          left: '50%',
          width: '50%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform ' + (opts.duration / 1000) + 's ' + opts.easing,
          cursor: 'pointer',
          transform: 'rotateY(0deg)',
          transformOrigin: 'left center',
          zIndex: zIndex
        });

        // Move page into leaf
        $page.removeClass('page hard').addClass('flipbook-page flipbook-page-front');
        $page.css({
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          background: 'linear-gradient(90deg, #555, #aaa 3%, #fff)'
        });

        $leaf.append($page);
        $leaves.append($leaf);

        // Store leaf reference
        $page.data('flipbook-leaf', $leaf);
        $leaf.data('flipbook-page', $page);
        $leaf.data('flipbook-z-index', zIndex);
      });

      // Set up click handlers
      setupClickHandlers($flipbook, opts);

      // Auto center
      if (opts.autoCenter) {
        centerFlipbook($flipbook);
      }

      // Bind events
      if (opts.when) {
        for (var eventName in opts.when) {
          if (opts.when.hasOwnProperty(eventName)) {
            $flipbook.on(eventName, opts.when[eventName]);
          }
        }
      }

      $flipbook.trigger('ready');
      return this;
    },

    page: function(pageNum) {
      var $flipbook = $(this);
      
      if (pageNum === undefined) {
        return $flipbook.data('flipbook-current-page') || 1;
      }

      if ($flipbook.data('flipbook-animating')) {
        return this;
      }

      var totalPages = $flipbook.data('flipbook-total-pages');
      if (pageNum < 1 || pageNum > totalPages) {
        return this;
      }

      var currentPage = $flipbook.data('flipbook-current-page') || 1;
      if (pageNum === currentPage) {
        return this;
      }

      // Flip pages between current and target
      flipToPage($flipbook, pageNum);
      
      return this;
    },

    next: function() {
      var $flipbook = $(this);
      var currentPage = $flipbook.data('flipbook-current-page') || 1;
      var totalPages = $flipbook.data('flipbook-total-pages');
      
      if (currentPage < totalPages) {
        return this.flipbook('page', currentPage + 1);
      }
      return this;
    },

    previous: function() {
      var $flipbook = $(this);
      var currentPage = $flipbook.data('flipbook-current-page') || 1;
      
      if (currentPage > 1) {
        return this.flipbook('page', currentPage - 1);
      }
      return this;
    },

    pages: function() {
      return $(this).data('flipbook-total-pages') || 0;
    },

    size: function(width, height) {
      var $flipbook = $(this);
      
      if (width === undefined || height === undefined) {
        return {
          width: $flipbook.width(),
          height: $flipbook.height()
        };
      }

      $flipbook.css({
        width: width,
        height: height
      });

      var opts = $flipbook.data('flipbook-opts');
      if (opts) {
        opts.width = width;
        opts.height = height;
      }

      if ($flipbook.data('flipbook-opts').autoCenter) {
        centerFlipbook($flipbook);
      }

      return this;
    }
  };

  // Helper: Set up click handlers
  function setupClickHandlers($flipbook, opts) {
    $flipbook.on('click', '.flipbook-leaf', function(e) {
      // 링크 클릭은 무시
      if ($(e.target).closest('a').length) {
        return;
      }

      var $leaf = $(this);
      var $flipbook = $leaf.closest('.flipbook');
      
      if ($flipbook.data('flipbook-animating')) {
        return;
      }

      var pageNum = parseInt($leaf.data('page'), 10);
      var currentPage = $flipbook.data('flipbook-current-page') || 1;

      // 현재 페이지보다 앞에 있는 페이지만 플립 가능
      if (pageNum <= currentPage) {
        return;
      }

      // Flip this leaf
      flipLeaf($flipbook, $leaf, pageNum);
    });
  }

  // Helper: Flip a single leaf
  function flipLeaf($flipbook, $leaf, pageNum) {
    if ($flipbook.data('flipbook-animating')) {
      return;
    }

    $flipbook.data('flipbook-animating', true);
    $flipbook.trigger('turning', [pageNum]);

    // Add flipped class
    $leaf.addClass('flipped');
    $leaf.css({
      transform: 'rotateY(-180deg)',
      transformOrigin: 'left center'
    });

    var opts = $flipbook.data('flipbook-opts');
    var duration = opts.duration || 2000;

    // Update z-index after animation
    setTimeout(function() {
      var totalPages = $flipbook.data('flipbook-total-pages');
      var initialZ = $leaf.data('flipbook-z-index');
      var newZ = totalPages - (initialZ - 1);
      
      $leaf.css('zIndex', newZ);
      $flipbook.data('flipbook-current-page', pageNum);
      $flipbook.data('flipbook-animating', false);
      
      $flipbook.trigger('turned', [pageNum]);
    }, duration);

    // Reset animation flag after a bit longer
    setTimeout(function() {
      $flipbook.data('flipbook-animating', false);
    }, duration + 100);
  }

  // Helper: Flip to specific page
  function flipToPage($flipbook, targetPage) {
    var currentPage = $flipbook.data('flipbook-current-page') || 1;
    
    if (targetPage <= currentPage) {
      return;
    }

    // Flip all pages between current and target
    for (var i = currentPage + 1; i <= targetPage; i++) {
      var $leaf = $flipbook.find('.flipbook-leaf[data-page="' + i + '"]');
      if ($leaf.length) {
        setTimeout(function(leaf, page) {
          return function() {
            flipLeaf($flipbook, leaf, page);
          };
        }($leaf, i), (i - currentPage - 1) * 100);
      }
    }
  }

  // Helper: Center flipbook
  function centerFlipbook($flipbook) {
    var $parent = $flipbook.parent();
    if ($parent.length) {
      $flipbook.css({
        margin: '0 auto',
        display: 'block'
      });
    }
  }

  // jQuery plugin
  $.fn.flipbook = function(method) {
    if (Flipbook[method]) {
      return Flipbook[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return Flipbook.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.flipbook');
    }
  };

  // Export
  window.Flipbook = Flipbook;

})(jQuery || window.jQuery || window.$);




