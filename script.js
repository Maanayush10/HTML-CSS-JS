console.log('The script is loaded successfully')

const txtAr = document.getElementById("myText");
const totalC = document.getElementById("total-count");
const remainC = document.getElementById("remain-count");
txtAr.addEventListener('keyup', () => {
    // console.log('key press')
    updateCounter();
    decrementCounter();
    changeColour();
})

function updateCounter() {
    totalC.innerHTML = txtAr.value.length
}

function decrementCounter() {
    remainC.innerHTML = txtAr.getAttribute("maxlength") - txtAr.value.length
}

function changeColour() {
    if (txtAr.value.length > 0) {
        totalC.style.color = "blue";
    }
    else if (txtAr.value.length == 0) {
        totalC.style.color = "red";
    }

    else {
        totalC.style.color = "red";
    }


    if (txtAr.value.length > (txtAr.getAttribute("maxlength") - 10)) {
        remainC.style.color = "red";
    }
    else if (txtAr.value.length < (txtAr.getAttribute("maxlength") - 10)) {
        remainC.style.color = "blue";
    }
    else {
        totalC.style.color = "blue";
    }
}