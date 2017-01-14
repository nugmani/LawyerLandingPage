$(function() {



	/*При перезагрузке страницы отображать начало*/
/*$(document).ready(function(){
document.location.href='';
});*/

$('#buttonShowHide').click(function(){
	$('#writeback').fadeIn(300);
	$("#buttonShowHide").fadeOut(300);
	var	top = $('#buttonShowHide').offset().top;
	$('body,html').animate({scrollTop: top}, 1500);	
	return false;

});

/*крестик закрытия*/
$('.popup-modal-dismiss').click(function(){
	$(this).closest('#writeback').fadeOut(300);
	$("#buttonShowHide").fadeIn(300);
	return false;
})

/*показать секцию отправки сообщения по нажатию конверта*/
$('.BtnShow').click(function(){
	$('#writeback').fadeIn(300);
	$("#buttonShowHide").fadeOut(300);
	var	top = $('#buttonShowHide').offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
	return false;
});

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	/*history.pushState('', document.title, window.location.pathname);*/
	return false;
});



	$(".teams").owlCarousel({
		items : 3,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
		responsive:{
				0:{
						items:1
				},
				768:{
						items:2
				},
				1000:{
						items:3
				}
			}
	});



$(".toggle-mnu").click(function(){
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
});

$(".toggle-mnu").click(function(e){
		e.preventDefault();
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


$(".main-photo").animated("fadeInDown");
$(".header-left p, .header-left h2").animated("fadeInDown");
$(".info-item").animated("zoomIn");
$(".section_2").animated("slideInRight");
$(".soc-icons").animated("bounceIn");
$(".wrap-contact-phone").animated("zoomIn");
$(".wrap-icons-contact").animated("fadeInDown");
$(".consult h3").animated("zoomIn");

/*jquery код - настройка перехода по якорю, чтобы решетка не отображалась в адресной строке после перехода*/
/*$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				 scrollTop: $(anchor.attr('href')).offset().top-100
			}, 1000);
			e.preventDefault();
	 }); */



	var waypointsvg = new Waypoint({

		element: $(".section_3"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_3 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg" + index
						});
						//ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#writeback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			//alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);

			th.fadeOut(300);
			$("#buttonShowHide").fadeIn(300);
		});
		return false;
		
	});
});




