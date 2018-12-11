(function($){
  Drupal.behaviors.ccnpreprocess1 = {
    attach: function (context, settings) {
      /* MENU-SPECIFIC */
        $('.front ul.ccn-main-menu li a').addClass('scroll-to-link');
        $('.front ul.ccn-main-menu li a.no-scroll').removeClass('scroll-to-link');
        /* -------------------
        Removing URL before hash
        ---------------------*/
          $('.front ul.ccn-main-menu li a.scroll-to-link').each(function(){
            $(this).attr('href','#'+$(this).attr('href').split('#')[1]);
          });
      /* DRUPAL */
        $('.form-text').addClass('input-style');
        $('.form-textarea').addClass('tx-style');
        $('.img-member-srrnd > img').addClass('member');
        $('.work-process .process-container > div:first-child > .process').addClass('active-process');
        $('.work-process .process-info:first-child').addClass('active-info');
        $('.serv .bg-serv .services .serv-description:first-child').addClass('this-service');
        $('.not-logged-in .footer .block-simplenews form').addClass('subscribe-form clearfix');
        $('.not-logged-in .footer .block-simplenews form .form-item-mail').addClass('input-container');
        $('.not-logged-in .footer .block-simplenews form .form-item-mail label').text('Subscribe');
        $('.not-logged-in .footer .block-simplenews form .form-item-mail label .form-required').addClass('hide');
        $('.not-logged-in .footer .block-simplenews form .form-text').removeClass('input-style').addClass('subscribe-email').attr('placeholder', 'Your email');
        $('.not-logged-in .footer .block-simplenews form #edit-submit').removeClass('send').addClass('subscribe-submit').attr('value', '');

      /* FIX */
        $('.alert button.close').click(function(){
          $(this).parent().remove();
        });
	      $('.w-banner .banner-nav .row > div:first-child > .banner-navigation').addClass('active-nav');
        $('.serv > .container > .row > .service:first-child').addClass('active-serv');
        $('.serv > div:nth-child(3)').addClass('current-det');
        $('.serv > .detail').each(function(){
          $(this).find('img.serv-pic-convert').replaceWith('<div class="serv-pic" style="background-image:url(' + $(this).find('img.serv-pic-convert').attr('src')+')"></div>');
        });
        $('.sk-describe').each(function(){
          var $percentage = $(this).find('h3').html();
          $(this).find('.timer-wrapper').css({"height":$percentage+"%"});
        });
        $('.year-price div.item-list ul').addClass('price-list').unwrap();
        $('.testimonials-container .testimonials-slider .swiper-wrapper .swiper-slide:first-child').addClass('default-active');
        $('.testimonials-container .testimonials-block .testimonials-item:first-child').addClass('active');
        $('.field-features-sw-place-det .item-list ul').addClass('place-det');
        $('.field-features-sw-hotel-info-list .item-list ul').addClass('hotel-info-list');
        $('.t-banner .swiper-container .swiper-wrapper .swiper-slide .container .t-banner-content > .banner-info:first-child').addClass('active');
        $('.hotel-section .tab-wrapper .tab-nav-wrapper .nav-tab .nav-tab-item:first-child').addClass('active');
        $('.hotel-section .tab-wrapper .tabs-content .tab-info:first-child').addClass('active');
        $('.hotel-section .tab-wrapper .tabs-content .tab-info.active .team-container .team-info .team-member-container:first-child').addClass('active');
        $('.hotel-section .hotel-block .hotel-slider .swiper-container .swiper-wrapper .item-list ul li').each(function(){
          $(this).replaceWith('<div class=\"swiper-slide vertical-slide background-parent\">' + $(this).html() + '</div>');
        });
        $('.hotel-section .hotel-block .hotel-slider .swiper-container .swiper-wrapper .item-list ul').each(function(){
          $(this).replaceWith(' ' + $(this).html() + ' ');
        });
        $('.hotel-section .hotel-block .hotel-slider .swiper-container .swiper-wrapper .item-list').each(function(){
          $(this).replaceWith(' ' + $(this).html() + ' ');
        });
        $('.hotel-section .tab-wrapper .tabs-content .swiper-slide.vertical-slide.background-parent').each(function(){
          $(this).find('img').addClass('center-image');
        });
	var $travelclicksrc = $('.t-banner .swiper-container .swiper-wrapper .swiper-slide .container .t-banner-content .info-img img:first-child').attr('data-src');
        $('.t-banner .swiper-container .swiper-wrapper .swiper-slide .center-image').attr('src', $travelclicksrc);
    }
  };
}(jQuery));