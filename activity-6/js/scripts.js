// array to store messages
var messages = [];

// message type lookup objext. similar to enun.
var messageType= {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// see data
var data = [
    {
        type: messageType.out,
        user: 'mike',
        message: 'hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'joe',
        message: 'hi mike! no, how about qdoba?'
    },
    {
        type: messageType.out,
        user: 'mike',
        message: "ok, lets go!"
    }
];

// message constructor function
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
};

// function to create and return an element for the supplied message.
function createMessageElement(message) {
    // create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message);

    // create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // add a class using the message type.
    messageEl.className = message.type;
    
    return messageEl;
};

//button click event handler to add a new message.
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    // determine message type and set message variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'mike';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'joe';
            type= messageType.in;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    };

    // create new message
    if (messageInput.value != '') {
        //construct a message and add it to the array.
        var message = new message(type, user, messageInput.value);
        message.push(message);

        // create a message element
        var el = createMessageElement(message);

        // add the message element to the dom
        messageContainerEl.appendChild(el);

        // reset input.
        messageInput.value = '';
    }

    //load seed data from data array
    function loadSeedData() {
        for (var i = 0; i < data.length; i++) {
            var item = data(i);
            var message = new message(item.type, item.user, item.message);
            messages.push(message);
        }

        // load view with pre-loaded message
        var messageContainer = document.getElementById('message-container');

        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            var el = createMessagesElement(messages)

            messageContainerEl.appendChild(el);
        }
    }

}

var init = function() {
    // wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler

    // load seed data from data array
    loadSeedData();
}

init();