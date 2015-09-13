(function() {

function setToClipboard(text) {
  var ta1 = document.getElementById("ta1");
  ta1.value = text;
  ta1.select();
  document.execCommand('Copy');
  ta1.value = "";
}

function setHtml(tabid) {
  chrome.tabs.sendMessage(tabid, {greeting: "hello"}, function(response) {
    if (response != null) {
      setToClipboard(response)
    }
  });
}

// chrome.contextMenus.create({
//   title: "Copy as HTML",
//   type: "normal",
//   contexts: ["selection"],
//   onclick: function(info, tab) {
//     setHtml(tab.id)
//   }
// });

chrome.browserAction.onClicked.addListener(function(tab) {
  setMarkdown(tab.id)
});

function setMarkdown(tabid) {
  chrome.tabs.sendMessage(tabid, {greeting: "hello"}, function(response) {
    if (response != null) {
      setToClipboard(toMarkdown(response))
    }
  });
}

chrome.contextMenus.create({
  title: "Copy as Markdown",
  type: "normal",
  contexts: ["selection"],
  onclick: function(info, tab) {
    setMarkdown(tab.id)
  }
});

})();
