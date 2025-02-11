document.getElementById("yesBtn").addEventListener("click", function() {
    showPopup("yes.gif", "Te iubesc KOT <3", false);
});

document.getElementById("noBtn").addEventListener("click", function() {
    showPopup("no1.gif", "Cred ca ai gresit", true);
});

let noCount = 0;
const noImages = ["no1.gif", "no2.gif", "no3.gif", "no4.gif"];
const noTexts = [
    "Afigheli?",
    "APASA DA REPEDE",
    "Nu vsio gatovi jopu!",
    "IA ABIDELSIA"
];

function showPopup(image, text, showButtons) {
    document.getElementById("popupImg").src = image;
    document.getElementById("popupText").textContent = text;
    
    let popupButtons = document.getElementById("popupButtons");

    if (showButtons) {
        popupButtons.classList.remove("hidden");
    } else {
        popupButtons.classList.add("hidden");
    }

    document.getElementById("popup").style.display = "flex";
}

document.getElementById("popupYes").addEventListener("click", function() {
    showPopup("yes.gif", "Te iubesc KOT <3", false);
});

document.getElementById("popupNo").addEventListener("click", function() {
    noCount++;

    if (noCount < noImages.length - 1) {
        showPopup(noImages[noCount], noTexts[noCount], true);
    } else {
        showPopup(noImages[noCount], noTexts[noCount], false);
    }
});

document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
