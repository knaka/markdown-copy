chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (chrome.i18n.getMessage("@@extension_id") != sender.id) {
    return
  }
  // debugger;
  function getSelectedHtml() {
    var selection = window.getSelection()
    if (selection.rangeCount === 0) {
      return (null)
    }
    var range = selection.getRangeAt(0)
    var fragment = range.cloneContents()
    var div = document.createElement("div");
    div.appendChild(fragment.cloneNode(true));
    return (div.innerHTML)
  }
  sendResponse(getSelectedHtml())
});
