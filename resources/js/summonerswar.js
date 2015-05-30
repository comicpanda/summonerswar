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
  source = $("#tp-episodes").html(),
  template = Handlebars.compile(source),
  bannerHref = mobile && !samsung ? (android ? PLAY_GOOGLE : APP_STORE) : PLAY_SUMMONERSWAR_LINK,
  data = {"episodes" : [
    {
      "title"    : "Prologue",
      "images"   : ["ep0-1.png", "ep0-2.png", "ep0-3.png", "ep0-4.png"],
      "bannerCss" : "type-one",
      "bannerSrc" : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep0.png"
    },
    {
      "title"    : "Chapter 1",
      "images"   : ["ep1-1.png", "ep1-2.png", "ep1-3.png", "ep1-4.png"],
      "bannerCss" : "type-two",
      "bannerSrc" : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep1.png"
    },
    {
      "title"    : "Chapter 2",
      "images"   : ["ep2-1.png", "ep2-2.png"],
      "bannerCss" : "type-one",
      "bannerSrc" : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep2.png"
    },
    {
      "title"    : "Chapter 3",
      "images"   : ["ep3-1.png", "ep3-2.png", "ep3-3.png", "ep3-4.png", "ep3-5.png"],
      "bannerCss" : "type-two",
      "bannerSrc" : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep3.png"
    },
    {
      "title"    : "Chapter 4",
      "images"   : ["ep4-1.png", "ep4-2.png", "ep4-3.png", "ep4-4.png", "ep4-5.png"],
      "bannerCss" : "type-one",
      "bannerSrc" : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep4.png"
    },
    {
      "title"    : "Chapter 5",
      "images"   : ["ep5-1.jpg", "ep5-2.jpg", "ep5-3.jpg", "ep5-4.jpg", "ep5-5.jpg", "ep5-6.jpg", "ep5-7.jpg"],
      "bannerCss" : "type-two",
      "bannerSrc" : mobile ? "sw-mobilebanner2.png" : "sw-banner2.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep5.jpg"
    },
    {
      "title"    : "Chapter 6",
      "images"   : ["ep6-1.jpg", "ep6-2.jpg", "ep6-3.jpg", "ep6-4.jpg", "ep6-5.jpg", "ep6-6.jpg", "ep6-7.jpg",
        "ep6-8.jpg",
        "ep6-9.jpg", "ep6-10.jpg", "ep6-11.jpg", "ep6-12.jpg", "ep6-13.jpg", "ep6-14.jpg", "ep6-15.jpg", "ep6-16.jpg",
        "ep6-17.jpg", "ep6-18.jpg"],
      "bannerCss" : "type-one",
      "bannerSrc" : mobile ? "sw-mobilebanner1.png" : "sw-banner1.png",
      "bannerHref" : bannerHref,
      "thumbSrc": "ep6.jpg"
    }
  ]};
$('body').addClass(mobile ? 'm' : 'desktop');
$("#episode-nav").html(Handlebars.compile($("#tp-episode-nav").html())(data));
$("#episodes").html(Handlebars.compile($("#tp-episodes").html())(data));

jQuery(function() {
    $('.go-episode')
    .on('click', function(e) {
        e.preventDefault();
        var _self = $(this),
            $targetEl = $('#'+_self.data('target'));
        console.log($targetEl);
    })
    .tooltip({container : '#smart-view'});
});
