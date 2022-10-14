const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbwwNDk8NEZ2fYwyYG4KsHJ84w4jBJOmDRduPLJYy4zDv2KbGGEvx976o1a6jMsM8ufxaw/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        document.querySelector("#msg").innerHTML = data;
    });
    e.target.reset();
})

const button = form.elements["button"];

const inputArr = Array.from(form);
const validInputArr = [];

inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")){
        el.setAttribute("is-valid", "0");
        validInputArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
form.addEventListener("button", formCheck);

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")){
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)){
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    }
    else{
        el.style.border = "2px solid rgb( 255, 0, 0)";
        el.setAttribute("is-valid", "0");
    }
}

function formCheck(e) {
    e.preventDefault();
    const isAllValid = [];
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    if (!Boolean(Number(isAllValid))){
        alert("Please fill the fields correctly")
        return;
    }
}