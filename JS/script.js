"use strict";

let url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=12b886&data=";

const linkInput = $("[data-link]");
const createBtn = $("[data-create]");
const qrImg = $("[data-qr]");
const codeContainer = $("[data-codeContainer]");

createBtn.click(function () {
  if (linkInput.val() != "") {
    qrImg.attr("src", `${String(url)}${String(linkInput.val())}`);
    // codeContainer.css("background-color", "#ffffff");
  } else {
    alert("Input is empty");
  }
});
