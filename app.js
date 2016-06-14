$(document).ready(function() {


	var integer = Number(document.getElementById("#item"))

	$("#submit").on('click', function(){

		for (var num = 1; num <= integer; num++) {

			if (integer % 3 == 0 && integer % 5 == 0) {
				$("ul").append("<li>" + "FizzBuzz" + "</li>");
			}
			else if(integer % 3 == 0) {
				$("ul").append("<li>" + "Fizz" + "</li>");
			}
			else if(integer % 5 == 0) {
				$("ul").append("<li>" + "Buzz" + "</li>");
			}
			else {
				$("ul").append("<li>" + integer + "</li>");
			};	
		};	
	});

});
