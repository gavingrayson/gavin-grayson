// welcome message
var user = 'User';
var salutation = 'Hello,';
var greeting = salutation + user + '! list of prices';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// price for apparel
var price = 60,
        userDiscount = .10,
        userPrice = price - (price * userDiscount),
        priceEl = document.getElementById('price'),
        userPriceEl = document.getElementById('user-price');

        priceEl.textContent = price.toFixed(2);
        userPriceEl.textContent = userPrice.toFixed(2);