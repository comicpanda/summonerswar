jQuery.easing.easeInOutQuad = function (p) {
  return p < 0.5 ? Math.pow(p * 2, 2) / 2 : 1 - Math.pow(p * -2 + 2, 2) / 2;
};
var isMobile = {
  Android    : function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry : function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS        : function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera      : function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows    : function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any        : function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

var PLAY_SUMMONERSWAR_LINK = "http://ad-x.co.uk/API/click/C0mT41614MV/am554c97ed71d795",
  PLAY_GOOGLE = "https://play.google.com/store/apps/details?id=com.com2us.smon.normal.freefull.google.kr.android.common&hl=en",
  APP_STORE = "https://itunes.apple.com/app/summoners-war/id852912420?mt=8",
  mobile = isMobile.any(),
  android = !!(mobile && isMobile.Android()),
  iOS = !!(mobile && isMobile.iOS()),
  samsung = !(android || iOS),
  bannerHref = mobile && !samsung ? (android ? PLAY_GOOGLE : APP_STORE) : PLAY_SUMMONERSWAR_LINK,
  data = {"episodes" : [
    {
      "title"      : "Prologue",
      "images"     : ["ep0-1.png", "ep0-2.png", "ep0-3.png", "ep0-4.png"],
      "bannerCss"  : "type-one",
      "bannerSrc"  : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep0.png",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 1",
      "images"     : ["ep1-1.png", "ep1-2.png", "ep1-3.png", "ep1-4.png"],
      "bannerCss"  : "type-two",
      "bannerSrc"  : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep1.png",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 2",
      "images"     : ["ep2-1.png", "ep2-2.png"],
      "bannerCss"  : "type-one",
      "bannerSrc"  : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep2.png",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 3",
      "images"     : ["ep3-1.png", "ep3-2.png", "ep3-3.png", "ep3-4.png", "ep3-5.png"],
      "bannerCss"  : "type-two",
      "bannerSrc"  : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep3.png",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 4",
      "images"     : ["ep4-1.png", "ep4-2.png", "ep4-3.png", "ep4-4.png", "ep4-5.png"],
      "bannerCss"  : "type-one",
      "bannerSrc"  : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep4.png",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 5",
      "images"     : ["ep5-1.jpg", "ep5-2.jpg", "ep5-3.jpg", "ep5-4.jpg", "ep5-5.jpg", "ep5-6.jpg", "ep5-7.jpg"],
      "bannerCss"  : "type-two",
      "bannerSrc"  : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep5.jpg",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    },
    {
      "title"      : "Chapter 6",
      "images"     : ["ep6-1.jpg", "ep6-2.jpg", "ep6-3.jpg", "ep6-4.jpg", "ep6-5.jpg", "ep6-6.jpg", "ep6-7.jpg",
        "ep6-8.jpg",
        "ep6-9.jpg", "ep6-10.jpg", "ep6-11.jpg", "ep6-12.jpg", "ep6-13.jpg", "ep6-14.jpg", "ep6-15.jpg", "ep6-16.jpg",
        "ep6-17.jpg", "ep6-18.jpg"],
      "bannerCss"  : "type-one",
      "bannerSrc"  : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc"   : "ep6.jpg",
      "playgooge"  : PLAY_GOOGLE,
      "appstore"   : APP_STORE
    }
  ]};
$('body').addClass(mobile ? 'm' : 'desktop');
$("#episode-nav").html(Handlebars.compile($("#tp-episode-nav").html())(data));
$("#episodes").html(Handlebars.compile($("#tp-episodes").html())(data));

jQuery(function () {
  $(window).on('load', function () {
    setTimeout(function () {
      $('html, body').scrollTop(0);
    }, 0);
  });
  var $html = $('html, body');
  var updateTooltipTitle = function ($elem, title, indicator) {
    $elem.data('originalTitle', '<span>' + indicator + '</span>' + title)
      .tooltip('update');
  };
  var updateEpisodeNavs = function (selectedIdx) {
    $episodeList.removeClass('on')
      .eq(selectedIdx)
      .addClass('on');

    $episodeNavs.each(function (i, el) {
      var $el = $(el),
        idx = 0;
      if (!$el.hasClass('first')) {
        idx = selectedIdx;
        if ($el.hasClass('prev')) {
          $el.toggleClass('hidden', selectedIdx === 0);
          idx--;
        } else {
          $el.toggleClass('hidden', selectedIdx === ($episodeList.length - 1));
          idx++;
        }
        $el.data('idx', idx);
        $el.find('img').attr('src', $episodeList.eq(idx).find('img').attr('src'));
      }
      updateTooltipTitle($el,
        $episodeList.eq(idx).data('title'),
        $el.data('indicator'));
    });
  };

  var scrollToEpisode = function (idx) {
    var $window = $(window),
      $targetEl = $('#ep-' + idx),
      scrollTop = $targetEl.offset().top;

    scrollTop = Math.min(scrollTop || 0, document.body.scrollHeight - $window.height());
    var distance = Math.ceil(Math.abs($window.scrollTop() - scrollTop)),
      duration = Math.min(distance ? Math.max(distance * 0.45, 450) : 0, 2000);

    $html.animate({scrollTop : scrollTop}, { duration : duration, easing : 'easeInOutQuad'})
      .promise().done(function () {updateEpisodeNavs(idx);});
  };

  var $episodeNavs = $('.ep-nav > a')
    .on('click', function (e) {
      e.preventDefault();
      scrollToEpisode($(this).data('idx'));
    }).tooltip();

  var $episodeList = $('.go-episode').on('click', function () {
    updateEpisodeNavs($(this).data('idx'));
  });

  $episodeList.tooltip({container : '#smart-view'});
  updateEpisodeNavs(0);
});
