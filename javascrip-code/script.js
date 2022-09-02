let cal = ["", "", ""];
let fistTime = true;
function banqueo() {
  if (cal[1] != "" && fistTime == true) {
    document.getElementById("textareaCalculator").value = "";
    fistTime = false;
  }
}

function noOLeaft() {
  let txt = document.getElementById("textareaCalculator").value;
  if (txt.valueOf(0) == "0" && txt.valueOf(1) != ".") {
    txt = txt.slice(1);
  }
  document.getElementById("textareaCalculator").value = txt;
}
//Numbers from 0 to 9
document.getElementById("buttonNumOne").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "1";
};
document.getElementById("buttonNumTwo").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "2";
};
document.getElementById("buttonNumThree").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "3";
};
document.getElementById("buttonNumFour").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "4";
};
document.getElementById("buttonNumFive").onclick = function () {
  banqueo();
  noOLeaft();
  document.getElementById("textareaCalculator").value += "5";
};
document.getElementById("buttonNumSix").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "6";
};
document.getElementById("buttonNumSeven").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "7";
};
document.getElementById("buttonNumEight").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "8";
};
document.getElementById("buttonNumNine").onclick = function () {
  noOLeaft();
  banqueo();
  document.getElementById("textareaCalculator").value += "9";
};
document.getElementById("buttonNumCero").onclick = function () {
  banqueo();
  let txt = document.getElementById("textareaCalculator").value;
  if (txt != "0") {
    txt += "0";
  }
  document.getElementById("textareaCalculator").value = txt;
};
//Dot
document.getElementById("buttonCharDot").onclick = function () {
  let txt = document.getElementById("textareaCalculator").value;
  if (txt == "") {
    txt += "0.";
  } else if (txt.indexOf(".") === -1) {
    txt += ".";
  }
  document.getElementById("textareaCalculator").value = txt;
};
//CE, C, LeftArrow
document.getElementById("buttonCharLeftArrow").onclick = function () {
  document.getElementById("textareaCalculator").value = document
    .getElementById("textareaCalculator")
    .value.slice(0, -1);
};
document.getElementById("buttonStringC").onclick = function () {
  document.getElementById("textareaCalculator").value = "";
  cal = ["", "", ""];
  fistTime = true;
};
document.getElementById("buttonStringCE").onclick = function () {
  document.getElementById("textareaCalculator").value = "";
};
//Symbols like ( + , - , * , / )
document.getElementById("buttonCharPlus").onclick = function () {
  cal[0] = document.getElementById("textareaCalculator").value;
  cal[1] = 1;
};
document.getElementById("buttonCharMinus").onclick = function () {
  cal[0] = document.getElementById("textareaCalculator").value;
  cal[1] = 2;
};
document.getElementById("buttonCharMult").onclick = function () {
  cal[0] = document.getElementById("textareaCalculator").value;
  cal[1] = 3;
};
document.getElementById("buttonCharDive").onclick = function () {
  cal[0] = document.getElementById("textareaCalculator").value;
  cal[1] = 4;
};
//Equal

document.getElementById("buttonCharEqual").onclick = function () {
  let txt = document.getElementById("textareaCalculator").value;
  if (txt == "" || txt == "0") {
    txt = 0;
  } else if (cal[0] == "") {
  } else {
    cal[2] = txt;
    switch (cal[1]) {
      case 1:
        txt = parseFloat(cal[0]) + parseFloat(cal[2]);
        break;
      case 2:
        txt = parseFloat(cal[0]) - parseFloat(cal[2]);
        break;
      case 3:
        txt = parseFloat(cal[0]) * parseFloat(cal[2]);
        break;
      case 4:
        txt = parseFloat(cal[0]) / parseFloat(cal[2]);
        break;
    }
  }
  document.getElementById("textareaCalculator").value = txt;
  cal = ["", "", ""];
  fistTime = true;
};
