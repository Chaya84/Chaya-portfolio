const words = ["Web Developer", "BCA Student", "Problem Solver"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, j--);
    } else {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
