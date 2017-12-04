$(document).ready(function(){

	$('#montilt').tilt({
		scale: 1.2,
		glare: true,
	  	maxGlare: 1.5,
	  	reset: false
	});

	$('.montilt2').tilt({
		scale: 1.2,
		glare: true,
	  	maxGlare: 0.5,
	  	reset: true
	});

	$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});

		$('.real-int#flyers').click(function(){
			
			
			$('.je_affiche#flyers').toggle();
			$('.je_affiche#covring').hide();
			$('.je_affiche#potestatem').hide();
		});

		$('.real-int#covring').click(function(){
			
			$('.je_affiche#covring').toggle();
			$('.je_affiche#flyers').hide();
			$('.je_affiche#potestatem').hide();
		});

		$('.real-int#potestatem').click(function(){
			
			$('.je_affiche#potestatem').toggle();
			$('.je_affiche#flyers').hide();
			$('.je_affiche#covring').hide();
		});



    //menu pour smartphone
    $('div.button_span').click(function(){
		$(this).parents('nav').find('ul').fadeToggle();
		// dire de chercher dans la nav les ul
	}); 
	
	//transition du menu
	$('.scrollto').click(function(e) {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate({
		scrollTop : $(page).offset().top - 60
		}, speed);
		e.preventDefault();
	});
	

	$('section#all').waypoint(function(direction) {
		if (direction === 'up') {
			$('section#chut').removeClass('in');

		} else if (direction === 'down') {
			$('section#chut').addClass('in');
		}
	}, {
		offset : '180px'
	});
	
	// activer les itemS en fonction de la position
	// $("section").waypoint(function(){
	// 		changeActiveItem(this);
	// }, {offset: '70px'});
	
	//changement de couleur des items de la nav
	$('section#descrii').waypoint(function(direction) {
		if (direction === 'up') {
			$('#menunu').removeClass('scrolled');
			$('nav ul a').removeClass('active');

		} else if (direction === 'down') {
			$('#menunu').addClass('scrolled');
		}
	}, {
		offset : '70px'
	});
	
	
	//activation des animation au wapoint qui croise un sesame_ouvre-toi
	$('.sesame_ouvre-toi').waypoint(function() {
			$(this.element).addClass('in');
		}, {offset : '70%'});
	
	
	
	
});



      window.onload = function() {
        Particles.init({
          selector: '#particles-js',
          color: '#75A5B7',
          maxParticles: 130,
          connectParticles: true,
          responsive: [
            {
              breakpoint: 768,
              options: {
                maxParticles: 80
              }
            }, {
              breakpoint: 375,
              options: {
                maxParticles: 50
              }
            }
          ]
        });
      };
    




  var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector('#spinner');
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute('style','-webkit-transform: rotateY('+ angle +'deg); -moz-transform: rotateY('+ angle +'deg); transform: rotateY('+ angle +'deg);');
}   
		
	























