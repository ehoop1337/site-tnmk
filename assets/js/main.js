$(document).ready(function() {

	
	const   body 			= $("body"),
			header 			= $("#header"),
			menu 			= $("#menu"),
			menuBack 		= $('.menu_back'),
			menuToggle 		= $("#header_menutoggle"),
			wrapper 		= $(".wrapper"),
			menuNavLength 	= $("#menu .menu_nav ul li").length,
	    	menuItemsLength = $("#menu .menu_items > .menu_nav_item").length,
	    	menuNavLi 		= $("#menu .menu_nav li"),
	    	windowWidth  	= $(window).width(),
	    	windowHeight 	= $(window).height();

	var 	scrollTop,
			activeAnimTwoBk = false,
			heightBlockOne 	= $("#block_1").height();
			blockTwo 		= $("#block_2 .block_2");



	// Отступ от высоты шапки
	wrapper.css("padding-top", header.height());

	// Фон шапки при скроллинге
	$(window).scroll(function(){
		scrollTop = $(this).scrollTop();
		if(scrollTop > 10){
			header.addClass("scrolling");
		}else{
			header.removeClass("scrolling");
		}
	});

	// При старте 
	if($(window).scrollTop() > 0){
		header.addClass("scrolling");
	}

	// При наведении на кнопку обратного звонка
	if(windowWidth > 500){
		$('.header_contacts button')
		.mouseover(function() {
			$(this).parent().addClass("opacityZero")
	    })
	    .mouseout(function(){           
	        $(this).parent().removeClass("opacityZero")
	    });
	}
	

	// Старт анимаций главный экран
	setTimeout(timeOutAnimated, 200, "#header .header");
	$("#block_1 .block_1_back").addClass("activeAnimate");
	//setTimeout(timeOutAnimated, 200, "#block_1 .block_1 .h1");
	$("#block_1 .block_1 .h1").addClass("activeAnimate");
	setTimeout(timeOutAnimated, 900, "#block_1 .block_1 .h1 h1");
	setTimeout(timeOutAnimated, 900, "#block_1 .block_1 .h1 p");
	setTimeout(timeOutAnimated, 200, "#block_1 .block_1_background");
	setTimeout(timeOutAnimated, 700, "#block_1 .block_1 .box");
	setTimeout(timeOutAnimated, 500, "#block_1 .block_1 .right .box_items");
	function timeOutAnimated(elem){
		$(elem).addClass("activeAnimate");
	}
	function removeTimeOutAnimated(elem){
		$(elem).removeClass("activeAnimate");
	}

	// Старт анимаций второй экран
	$(window).scroll(function(){
		if(activeAnimTwoBk == false){
			if(scrollTop > heightBlockOne - (heightBlockOne / 3)){
				activeAnimTwoBk = true;
				blockTwo.addClass("activeAnimate");
				setTimeout(activeRotateColorAnimated, 1500, "#block_2 .block_2");
			}
		}
	});
	function activeRotateColorAnimated(elem){
		$(elem).addClass("colorRotate");
	}

	// Клик вне меню
	$(document).mouseup(function (e){
		if (!menu.is(e.target)
		    && menu.has(e.target).length === 0) {
			removeClassesMenu()
		}
	});

	// Меню
	menu.css('margin-top', header.find(".header_menutoggle").height());
	menuToggle.on("click", function(){
		if(!menuBack.hasClass("active")){
			addClassesMenu()
		}
	});

	// При нажатии на ссылку
	menu.on("click", "a", function(){
		removeClassesMenu()
	});
	function removeClassesMenu(){
		body.css('overflow', 'auto');
		removeDelayItemsMenu();
		menu.removeClass("active")
		menuBack.removeClass("active")
		menuToggle.removeClass("active")
		$('#menu').removeClass("openedDopMenu");
	}
	function addClassesMenu(){
		body.css('overflow', 'hidden');
		setDelayItemsMenu();
		menu.addClass("active")
		menuBack.addClass("active")
		menuToggle.addClass("active")
		$('#menu').removeClass("openedDopMenu");
	}

    // Анимация появление элементов меню
    function setDelayItemsMenu(){
	    var k = 0.1;
	    for(var i = 0; i < menuNavLength; i++){
	    	$("#menu .menu_nav ul li:eq("+i+") > a span").css({"transition-delay":k+"s"});
	    	k = k + 0.1;
	    }
	    for(var s = 0; s < menuItemsLength; s++){
	    	var m = k;
		    for(var i = 0; i < $("#menu .menu_items .menu_nav_item:eq("+s+") .item").length; i++){
		    	for(var j = 0; j < $("#menu .menu_items .menu_nav_item:eq("+s+") .item:eq("+i+") ul > li").length; j++){
		    		$("#menu .menu_items .menu_nav_item:eq("+s+") .item:eq("+i+") ul > li:eq("+j+") > a").css({"transition-delay":m+"s"});
		    		m = m + 0.025;
		    	}
		    }
		}
	}
	function removeDelayItemsMenu(){
		$("#menu a").css({"transition-delay":"0s"})
		$("#menu a span").css({"transition-delay":"0s"})
	}

	// Анимация при фокусе на элемент меню
	menuNavLi.hover(function(){
		if(!$(this).hasClass('hover')){
			menuNavLi.removeClass('hover');
			$(this).addClass('hover');
			$("#menu .menu_items .menu_nav_item").removeClass('active');
			$("#menu .menu_items .menu_nav_item:eq("+$(this).index()+")").addClass('active');
		}
	}, function(){});

	// При навежении на «Перейти вкаталог»
	$("#block_1 .block_1 .box")
	.mouseover(function() {
		$(this).find(".hover_wrapper").addClass('active');
		setTimeout(timeOutAnimated, 300, "#block_1 .block_1 .box .hover_wrapper .hover .img");
    })
    .mouseout(function(){           
        $(this).find(".hover_wrapper").removeClass('active');
        setTimeout(removeTimeOutAnimated, 300, "#block_1 .block_1 .box .hover_wrapper .hover .img");
    });

    // Слайдер в 3 блоке
	$(".slider_b3").slick({
		lazyLoad: 'ondemand',
		centerMode: true,
  		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		adaptiveHeight: false,
		appendArrows: $(".slider_b3_arrows"),
		responsive: [
		{
		  breakpoint: 1150,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 1023,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 1,
		  }
		},
		]
	});
	$(".slider_b3_elems .nums .current").html('1');
	$(".slider_b3").on("beforeChange", function(event, slick, currentSlide, nextSlide){
        $(".slider_b3_elems .nums .current").html(nextSlide+1);
    });
    $(".slider_b3_elems .nums .max").html($(".slider_b3").slick("getSlick").slideCount);


    $('.block_4 .read_more').on("click", function(){
    	$('.block_4 .content .text_wrapper').toggleClass("active");
    });

    // Слайдер в 6 блоке
	$(".slider_b6").slick({
		lazyLoad: 'ondemand',
		centerMode: false,
  		variableWidth: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		adaptiveHeight: false,
		appendArrows: $(".slider_b6_arrows"),
		responsive: [
		{
		  breakpoint: 1150,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 1023,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
		  }
		},
		]
	});
	$(".slider_b6_elems .nums .current").html('1');
	$(".slider_b6").on("beforeChange", function(event, slick, currentSlide, nextSlide){
        $(".slider_b6_elems .nums .current").html(nextSlide+1);
    });
    $(".slider_b6_elems .nums .max").html($(".slider_b6").slick("getSlick").slideCount);


    // Слайдер в 3 блоке
	$(".slider_b7").slick({
		lazyLoad: 'ondemand',
		draggable: true,
		centerMode: false,
  		variableWidth: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		swipeToSlide: true,
		focusOnSelect: false,
		infinite: true,
		adaptiveHeight: false,
		appendArrows: $(".slider_b7_arrows"),
		responsive: [
		{
		  breakpoint: 1150,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 1023,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
		  }
		},
		]
	});
	$(".slider_b7_elems .nums .current").html('1');
	$(".slider_b7").on("beforeChange", function(event, slick, currentSlide, nextSlide){
        $(".slider_b7_elems .nums .current").html(nextSlide+1);
    });
    $(".slider_b7_elems .nums .max").html($(".slider_b7").slick("getSlick").slideCount);











    if(windowWidth < 1280)
    {
    	$(".header_search form").on("click", "button", function(e){
    		e.preventDefault();
    		$.fancybox.open({
				src : '#search_popup',
				type : 'inline'
			})
    	})
    	$('.block_11 .items').EhoopScrollBar();
    } 

    if (windowWidth < 1024)
    {
    	const block2childrens = $('.block_2 .last_line').children();
    	for (var i = 0; i < block2childrens.length; i++)
    	{
    		$('.block_2 .first_line').append(block2childrens[i]);
    	}
    	$('.block_2 .last_line').remove();
    	$('.after_befor_clone2').remove();
    	$('.after_befor_clone').remove();
    	$('.block_2 .first_line').EhoopScrollBar();
    	$('.block_5 .items').EhoopScrollBar();
    	$('.block_10 .items').EhoopScrollBar();
    }

    if (windowWidth > 766)
    {
    	$(document).on('click', '.header_contacts button', function(e) {
    		e.preventDefault();
    		$.fancybox.open({
				src : '#callback_popup',
				type : 'inline'
			})
    	})
    }

    if (windowWidth < 767)
    {
    	$('#block_1 .block_1 .right .box_items').EhoopScrollBar();
    	$(document).on('click', '.header_contacts', function(e) {
    		e.preventDefault();
    		$.fancybox.open({
				src : '#callback_popup',
				type : 'inline'
			})
    	})
    }

    if (windowWidth < 500)
    {
    	$('#menu .menu_nav li').hover(function(){
    		if($('#menu').hasClass("openedDopMenu")){
    			$('#menu').removeClass("openedDopMenu");
    		}else{
    			$('#menu').addClass("openedDopMenu");
    		}
    	},function(){});
    	$('#menu .menu_nav li').on("touchstart", 'a', function(){
    		$(this).click();
    	});

    	$(document).on('click', '.mobile_done_dop_menu', function(){
    		if($('#menu').hasClass("openedDopMenu")){
    			$('#menu').removeClass("openedDopMenu");
    		}else{
    			$('#menu').addClass("openedDopMenu");
    		}
    	})

    }




});