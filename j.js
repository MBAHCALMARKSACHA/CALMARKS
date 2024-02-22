
		// Function that display value 
		function dis(val) { 
			document.getElementById("result").textContent += val 
		} 

		function myFunction(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").textContent += event.key; 
		} 

		var cal = document.getElementById("calcu"); 
		cal.onkeyup = function (event) { 
			if (event.keyCode === 13) { 
				console.log("Enter"); 
				let x = document.getElementById("result").textContent 
				console.log(x); 
				solve(); 
			} 
		} 

		// Function that evaluates the digit and return result 
		function solve() { 
			try{
			   let result=eval(document.getElementById('result').textContent);
			   document.getElementById('result').textContent=result;

			}
            catch(error){

				document.getElementById('result').textContent=error;
			}
		} 

		// Function that clear the display 
		function clr() { 
			document.getElementById("result").textContent = "" 
		} 
	