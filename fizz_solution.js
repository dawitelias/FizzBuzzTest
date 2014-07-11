/* 
Dawit Elias
June 25, 2014
dawitelias14@gmail.com

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% 
of programming job candidates who can't seem to program their way out of a wet paper bag. 
The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."
*/

function fizzbuzz() {

	for (var i = 0; i <= 100; i++) {
		
		var str = '';

		if (i % 3 == 0) {
			str += "Fizz"
		}

		if (i % 5 == 0) {
			str += "Buzz"
		}

		if (str.length === 0) {
			str = i.toString();
		}
		console.log(str);	
	}
}

fizzbuzz();