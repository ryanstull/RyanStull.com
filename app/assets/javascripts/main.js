
var transitionSpeed = 150;
var down = "-=1rem";
var up = "+=1rem";
var mq = window.matchMedia( "(max-width: 400px)" );

$('.navButtonWrapper').on({
	click: function() {
		if(!$(this).children("a").hasClass("active")){
			var txt = $(this).text();
			var selex = txt.toLowerCase();
			$("nav").children().each(function(){
				$(this).children().removeClass("active");
			});
			$(this).children("a").addClass("active");
			if(!mq.matches){
				animateUpAndDown(this,down)
			}
			$("main").children().each(function(){
				if($(this).hasClass("active") && $(this).id!=selex ){
					$(this).removeClass("active");
					$(this).fadeOut(transitionSpeed,function() {
						$("#"+selex).addClass("active").fadeIn(transitionSpeed);
					});
				}
			});
		}
	},
	mouseenter: function() {
		if(!mq.matches && !$(this).children("a").hasClass("active")){
			animateUpAndDown(this,up)
		}
	},
	mouseleave: function() {
		if(!mq.matches && !$(this).children("a").hasClass("active")){
			animateUpAndDown(this,down)
		}
	}
});

function animateUpAndDown(item,direction){
	$(item).animate({
		"padding-bottom": direction
	},transitionSpeed)
}
