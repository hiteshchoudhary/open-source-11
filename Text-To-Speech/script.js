const textarea = document.querySelector("textarea");
const btn = document.querySelector("#btn");
let synt = speechSynthesis;
function textToSpeach(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    synt.speak(utternance);
}

btn.addEventListener("click", (e) => {
    if (textarea.value !== "") {
        textToSpeach(textarea.value);
    }
    else {
        textToSpeach("Please Enter Some Text First"); u7u
    }
})
//working only one default voice