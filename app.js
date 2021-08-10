var nmrbill;
var nmrpessoa;
var customPer;
var resultT;
var resultP;

//calc and custom value calc functions
function calculate(porc) {
  nmrbill = document.getElementById("bill").value;
  nmrpessoa = document.getElementById("ppl").value;
  if (nmrbill >= 1 && nmrpessoa >= 1) {
    resultP = (nmrbill * porc) / 100 / nmrpessoa;
    resultT = resultP + nmrbill / nmrpessoa;
    document.getElementById("ppscreen").innerHTML = "$" + Math.floor((resultP * 100)) / 100;
    document.getElementById("ttscreen").innerHTML = "$" + Math.floor((resultT * 100)) / 100;
    setTheme("resBtc-2")
  }
  else if (nmrpessoa < 1) {
    document.getElementById("ppl").style.border = "2px solid brown";
    document.getElementById("err2").style.display = "block";
    setTimeout(() => {
      pplRestore()
    }, 3000);
  }
  else if (nmrbill < 1) {
    document.getElementById("bill").style.border = "2px solid brown";
    document.getElementById("err1").style.display = "block";
    setTimeout(() => {
      pplRestore()
    }, 3000);
  }
}

function calculateCustom() {
  nmrbill = document.getElementById("bill").value;
  nmrpessoa = document.getElementById("ppl").value;
  customPer = document.getElementById("cstm").value;
  if (nmrbill >= 1 && nmrpessoa >= 1) {
    resultP = (nmrbill * customPer) / 100 / nmrpessoa;
    resultT = resultP + nmrbill / nmrpessoa;
    document.getElementById("ppscreen").innerHTML = "$" + resultP.toFixed(2);
    document.getElementById("ttscreen").innerHTML = "$" + resultT.toFixed(2);
    setTheme("resBtc-2")
  }
  else if (nmrpessoa < 1) {
    document.getElementById("ppl").style.border = "2px solid red";
    document.getElementById("err2").style.display = "block";
    setTimeout(() => {
      pplRestore()
    }, 3000);
  }
  else if (nmrbill < 1) {
    document.getElementById("bill").style.border = "2px solid red";
    document.getElementById("err1").style.display = "block";
    setTimeout(() => {
      pplRestore()
    }, 3000);
  }
}

//reset button function
function resetF() {
  document.getElementById("bill").value = null;
  document.getElementById("ppl").value = null;
  document.getElementById("cstm").value = null;
  document.getElementById("ppscreen").innerHTML = "$0.00";
  document.getElementById("ttscreen").innerHTML = "$0.00";
  setTheme("resBtc-1")
}

//changing reset button color
function setTheme(themeName) {
  localStorage.setItem('resBtc', themeName);
  document.documentElement.className = themeName;
}

//restoring error msg status
function pplRestore() {
  document.getElementById("ppl").style.border = "0";
  document.getElementById("err2").style.display = "none";
  document.getElementById("bill").style.border = "0";
  document.getElementById("err1").style.display = "none";
}
