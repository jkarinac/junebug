chrome.browserAction.onClicked.addListener(function (tab){
	var urlOpen = "http://google.com";
	chrome.tabs.create({url: urlOpen});
});