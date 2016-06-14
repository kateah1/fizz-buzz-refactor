$(document).ready(function() {


	function fizzbuzz(integer) {
		
		if(isNaN(integer)) {
			alert("Please enter a valid number!");
		}
		else {

			for (var num = 1; num <= integer; num++) {

				if (num % 3 === 0 && num % 5 === 0) {
					$("ul").append("<li>" + "FizzBuzz" + "</li>");
				}
				else if(num % 3 === 0) {
					$("ul").append("<li>" + "Fizz" + "</li>");
				}
				else if(num % 5 === 0) {
					$("ul").append("<li>" + "Buzz" + "</li>");
				}
				else {
					$("ul").append("<li>" + num + "</li>");
				}	
			}
		}		
	}	

	$("button").on('click', function() {
		$("ul").empty();
		fizzbuzz(Number($("#item").val()));
	})

});
