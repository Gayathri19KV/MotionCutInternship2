function selectMood(mood, color) {
    let body = document.body;
    body.style.backgroundColor = color;
    
    // Adjust text color for dark mode
    if (body.classList.contains("dark-mode")) {
        body.style.color = "white";
    } else {
        body.style.color = "black";
    }
    
    let historyList = document.getElementById("mood-history");
    let listItem = document.createElement("li");
    listItem.textContent = mood;
    historyList.appendChild(listItem);
}

function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    
    // Adjust text color when toggling dark mode
    if (body.classList.contains("dark-mode")) {
        body.style.color = "white";
    } else {
        body.style.color = "black";
    }
}
