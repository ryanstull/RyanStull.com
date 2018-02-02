
var transitionSpeed = 150;
var down = "-=1rem";
var up = "+=1rem";
var mq = window.matchMedia( "(max-width: 400px)" );

$('.navButtonWrapper').on({
	click: function() {
		if(!$(this).children("a").hasClass("active")){
			changeNavClass(this);
			changeSectionClass(this);
		}

		function changeNavClass(context) {
			$("nav").children().each(function(){
				$(this).children().removeClass("active");
			});
			$(context).children("a").addClass("active");
			if(!mq.matches){
				animateUpAndDown(context,down)
			}
		}
		function changeSectionClass(context) {
			var txt = $(context).text().toLowerCase();
			$("main").children().each(function(){
				if($(this).hasClass("active") && $(this).id!==txt ){
					$(this).removeClass("active");
					$(this).fadeOut(transitionSpeed,function() {
						$("#"+txt).removeClass("inactive").addClass("active").fadeIn(transitionSpeed);
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
