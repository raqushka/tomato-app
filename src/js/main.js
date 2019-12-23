import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div> 
        Your App injected to DOM correctly! 
        <h1>fffff</h1>
      </div>
    )
  }
}

// Message Listener function
// chrome.runtime.onMessage.addListener((request, sender, response) => {
//     alert('called mainjs?');
//   // If message is injectApp
//   if(request.injectApp) {
//     // Inject our app to DOM and send response
//     injectApp();
//     response({
//       startedExtension: true,
//     });
//   }
// });

// function injectApp() {
//   const newDiv = document.createElement("div");
//   newDiv.setAttribute("id", "chromeExtensionReactApp");
//   document.body.appendChild(newDiv);
//   ReactDOM.render(<App />, newDiv);
// }
