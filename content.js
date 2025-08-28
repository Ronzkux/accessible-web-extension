console.log("Extension is running on this page.");

document.body.style.lineHeight = "1.7";
document.body.style.fontSize = "18px";

let isReadableMode = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggle") {
        if (isReadableMode) {
            document.body.style.lineHeight = "";
            document.body.style.fontSize = "";
            isReadableMode = false;
            console.log("Readable mode disabled.");
        } else {
            document.body.style.lineHeight = "1.7";
            document.body.style.fontSize = "18px";
            isReadableMode = true;
            console.log("Readable mode enabled.");
        }

        sendResponse({status: isReadableMode ? "ON" : "OFF"});
    }
});