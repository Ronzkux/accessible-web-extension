document.getElementById('toggleBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'toggle'}, function(response) {
            if (response) {
                updateUI(response.status);
            }
        });
    });
});

function updateUI(status) {
    const statusElement = document.getElementById('status');
    const buttonElement = document.getElementById('toggleBtn');
    
    statusElement.textContent = status;
    buttonElement.textContent = status === 'ON' ? 'Turn OFF' : 'Turn ON';
    
    if (status === 'ON') {
        statusElement.className = 'status-value status-on';
    } else {
        statusElement.className = 'status-value status-off';
    }
}