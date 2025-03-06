// Show the add-to-cart confirmation dialog
function showDialog() {
    document.getElementById("dialog-box").style.display = "block";
}

// Close the dialog box
function closeDialog() {
    document.getElementById("dialog-box").style.display = "none";
}

// Attach event listener to "Add to Cart" button
document.querySelector(".add-to-cart").addEventListener("click", showDialog);
