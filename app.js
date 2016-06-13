$(document).ready(function() {

	for (var num = 1; num <= 100; num++) {

		if (num % 3 == 0 && num % 5 == 0) {
			$("ul").append("<li>" + "FizzBuzz" + "</li>");
		}
		else if(num % 3 == 0) {
			$("ul").append("<li>" + "Fizz" + "</li>");
		}
		else if(num % 5 == 0) {
			$("ul").append("<li>" + "Buzz" + "</li>");
		}
		else {
			$("ul").append("<li>" + num + "</li>");
		}
	};	


});