// FRONT-END (CLIENT) JAVASCRIPT HERE


let lastMessageAt = 0;

/* Formatting for a single message to display to the user. */
const displayMessage = function (message) {
    const date = new Date(message.sentAt);
    const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return `<div><p><strong style="color: ${message.fromStyle};">${message.from}: </strong>${message.message}</p> <span>${formattedDate}</span></div>`;
}

/* Show messages from server to the user. */
const displayMessages = function (messages) {
    const container = document.querySelector("#messages");
    container.innerHTML = messages.map(displayMessage).join("");

    // If there is a new message, scroll to the bottom to show it.
    if (lastMessageAt < messages[messages.length - 1].sentAt) {
        container.scroll({top: container.scrollHeight, behavior: 'smooth'});
        lastMessageAt = messages[messages.length - 1].sentAt;
    }
}

/* Send new message to server. */
const submit = async function (event) {
    event.preventDefault();

    const message = document.querySelector("#message"),
        from = document.querySelector("#from"),
        json = {from: from.value || 'Anonymous', message: message.value, sentAt: Date.now()},
        body = JSON.stringify(json);

    message.value = '';

    const response = await fetch("/messages", {
        method: "POST",
        body
    });

    const messages = await response.json();

    displayMessages(messages);
}

/* Get all messages from the server. */
const update = async function () {
    const response = await fetch("/messages");
    const messages = await response.json();

    displayMessages(messages);
}

window.onload = function () {
    const button = document.querySelector("button");
    button.onclick = submit;

    // Start listening for messages.
    setInterval(update, 2500);
}