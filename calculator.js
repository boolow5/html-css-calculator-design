var display = document.getElementById("display");
var result = 0;
var lastSign = '';
var containsResult = false;

function inputDisplay(digit) { 
	if ((display.value == 0)||(containsResult)) { 
		display.value = digit;
	} else {
		display.value += digit; 
	}
	containsResult = false;
}

function inputSign(digit) { 
	display.value = digit;
}

function clearDisplay() {
	display.value = 0;
}

function calculate(lastVal, sign) {
	if (result == 0) {
		result = display.value;
		} else {			
			
				if (lastSign=='+') {
					result += lastVal;
					displayResult() ;
				} else if (lastSign=='-') {
					result -= lastVal;
					displayResult() ;
			} else if (lastSign=='/') {
					result /= lastVal;
					displayResult() ;
			} else if (lastSign=='*') {
					result *= lastVal;
					displayResult() ;
			} else if (lastSign=='%') {
					result %= lastVal;
					displayResult() ;
		}
	}
	lastSign = sign;
	containsResult = true;
}

function displayResult() {
	display.value = parseInt(result);
	//containsResult = true;
}

function getResult() {
	displayResult();
	result = 0;
	
}

