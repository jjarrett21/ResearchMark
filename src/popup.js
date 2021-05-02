// init buttons "
let saveAll = document.getElementById("saveAll");

// when the button is click print a list of tabs in console for now.
saveAll.addEventListener("click", async () => {
  let [tabs] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tabs.id },
    function: saveAllTabs(tabs),
  });
});

// function body
function saveAllTabs() {
  if (tabs) {
    console.log(tabs);
  }
}
