// welcome message
var user = 'User';
var salutation = 'Hi,';
var greeting = salutation + user + '! Here are the reviews for Banana crew';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 10,
        studentDiscount = .5,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('price'),
        studentPriceEl = document.getElementById('student-price');

        priceEl.textContent = price.toFixed(2);
        studentPriceEl.textContent = studentPrice.toFixed(2);