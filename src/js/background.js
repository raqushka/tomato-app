console.log('hello background');
console.log('hello background');

chrome.browserAction.onClicked.addListener(tab => console.log('icon clicked', tab));
