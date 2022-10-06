// const express = require("express");
// const {auth} = require("google-auth-library");
// const {google} = require("googleapis");

// const app = express();
const express = require("express");
const { google } = require("googleapis");

const app = express();

app.get("/", (req, res) => {
    // const auth = new google.auth.GoogleAuth({
    //     keyFile: "credentials.json",
    //     scopes: "https://www.googleapis.com/auth/spreadsheets",
    // });
    // const client = await auth.getClient();

    // const googleSheets = google.sheets({version: "v4", auth: client});

    // const spreadsheetId = "1deoiyQCCC3KiXlAhraQXcnV6JxoDBz0uslB9Ukn1pu4";

    // const metaData = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,
    // });
    // const getRows = await googleSheets.spreadsheets.values.get({
    //     auth,
    //     spreadsheetId,
    //     range: "Лист1",
    // })
    // metaData.data
    res.send("hehe");
});





app.listen(1337, (req, res) => console.log("running on 1337"));

const form = document.forms["form"];
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
form.getEventListener("button", formCheck);

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
    const isValid = isAllValid.reduce((acc, current)=>{
        return acc && current;
    });
    if (!Boolean(Number(isAllValid))){
        alert("Please fill the fields correctly")
        return;
    }
    formSubmit();
}
function formSubmit(){
    console.log("Your message sent!");
}