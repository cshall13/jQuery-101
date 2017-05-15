// console.dir(document);
// var dom = $(document);
// console.dir(dom);
// console.dir($);

// 1. Wait until the document is fully loaded....i.e. READY
// 2. Once th DOM is loaded, run the anon funciton
$(document).ready(function(){
	// var thing = document.getElementById('thing');
	// var thing = $('#thing');							//LINES 9 & 10 ARE THE SAME (10 IS JQUERY)
	// console.log(thing);

	// var classThing = document.getElementsByClassName('thing');
	// classThing = $('.thing');
	// console.dir(classThing);

	// var body = document.getElementsByTagName('body');
	// body = $('body');


	$('button').click(function () {
		// console.log(this);
		// console.log($(this).attr('toDo'));
		var whatToDo = $(this).attr('toDo');
		if(whatToDo == 'hide'){
			$('#thing').hide();
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if (whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			// if you dont pass html an arg it will simply return innerHTML
			console.log($('#thing').html());
			// If you pass html() an arg, innerHTML will change to that
			$('#thing').html('<strong>I am new inner HTML.</strong>');
		}else if(whatToDo == 'text'){
			$('#thing').text('<strong>I am new inner HTML</strong>');
		}else if(whatToDo == 'prepend'){
			$('#thing').prepend('<strong>I am new inner HTML.</strong>');
		}else if(whatToDo == 'append'){
			$('#thing').append('<strong>I am HTML added to the end.</strong>');
		}else if(whatToDo == 'css'){
			// css method taks and argument, and object, jsut like css
			// it will apply the css as a style attribute
			$('#thing').css({
				'color':'orange',
				'font-size':'40px',
				'background-color':'blue',
				'border-radius':'50%'

			});
		}else if(whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
		}else if(whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css');
		}else if(whatToDo == 'fadeToggle'){
			$('#thing').fadeToggle();
		}else if(whatToDo == 'slideToggle'){
			$('#thing').slideToggle();
		}else if(whatToDo == 'animate'){
			$('#thing').animate({
				width: "40%",
				opacity: 0.3,
				fontSize: "40px",
				borderWidth: "10px"
			},1500);
		}else if(whatToDo == 'scroll'){
			$('#thing').scroll();
		}
	});

});


// 1.Wait unitl after ABSOLUTELY EVERYTHING has loaded (picture,videos, etc.)
// $(window).on("load",function(){
// 	console.log("the window has loaded!")
// 	var thing = document.getElementById('thing');
// 	console.log(thing);
// });