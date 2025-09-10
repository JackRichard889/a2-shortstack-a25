## Chat App
This app is designed to work as a global chat client, where users log in and post messages and can communicate with each other.
The body of the app, in the CSS, uses a flexbox to position items. The page itself also doesn't overflow, just the chat content.

To use the app, simply run the `node server.improved.js` command.

https://a2-jackrichard.onrender.com/

## Technical Achievements
- **Create Single Page App**: The server hosts a single page app where users can get the main content, showing all messages from the server and post new messages.
- **HTML Forms**: Display an HTML form with two fields (name and message) with a submit button that triggers a JS callback.
- **Chat Display**: Data from the server is displayed on the main screen of the application using HTML and JS. This was a challenge since JS is used to construct the HTML elements when they are displayed.
- **Chat Refresh**: Using setInterval allows the chat to refresh and update when new messages become available. This was a challenge to implement since it needed to understand when to scroll to the bottom of the chat, and how often to refresh.
- **JavaScript Fetch**: The JS fetch function is used to get the current chat logs and also to POST new chats to the server when the form is submitted.
- **Node Server**: The Node server handles GET and POST requests for files and content, and for new messages. This was a challenge to organize at first to make the server code readable and clear.
- **Dynamic Colors**: The derived field on the server is the color of the sender's name, which is calculated by the first character of their entered name. This was a challenge to figure out an easy way to take a letter and make it into a color. HSL colors were used to acheive this.

### Design/Evaluation Achievements
- **Used ARIA Attributes**: Used ARIA attributes on the form fields to ensure that they are accessibility compliant and describe their purposes.
- **Used CSS Variables**: Used CSS variables to organize colors
- **CSS Selectors**: Made use of ID, class, and element selectors in CSS, like the messages div (#messages), input tag, and card class (.card).
- **Used Font from Google Fonts**: Used the League Spartan font from Google Fonts.
- **Used Color Palette**: Implemented a color palette for the project for consistent styling. 