const table = document.getElementById('result');

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95', true);

request.onload = function () {

	  // Begin accessing JSON data here
	  var data = JSON.parse(this.response);

	  if (request.status >= 200 && request.status < 400) {
		  const rate = data.rates;
		  for(var currency in rate){		
			  
			  const row = document.createElement('tr');
			  		      
			  const curr = document.createElement('td');
			  row.setAttribute('id', 'currency');		  	  
			  curr.textContent = currency;	
			  if (currency == "HKD"){
				  curr.style.borderColor = "red";
			  }	
			  
			  const oldAmount = document.createElement('td');
			  oldAmount.textContent = rate[currency];
			  if (checkEvenNumber(rate[currency])) {
				  oldAmount.style.borderColor = "red";
			  }
			 
			  const newAmount = document.createElement('td');
			  var value = rate[currency] + 10.0002;
			  var valueToFix = value.toFixed(6);
			  newAmount.textContent = valueToFix;
			  if (checkEvenNumber(rate[currency])) {
				  newAmount.style.borderColor = "red";
			  }
			  
			  table.appendChild(row);
			  row.appendChild(curr);
			  row.appendChild(oldAmount);
			  row.appendChild(newAmount);
		  }	  
	  } else {
	    console.log('error');
	  }
	}

function checkEvenNumber(amount){
	if (amount%2 == 0) {
		return true
	} else {
		return false
	}		
}

// Send request
request.send();

