document.getElementById("toggleButton").addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggle"}, function(response) {
            if (response) {
                document.getElementById("status").textContent = response.status;
                document.getElementById("toggleButton").textContent =
                    response.status === "ON" ? "Turn OFF" : "Turn ON";
            }
        });
    });
});