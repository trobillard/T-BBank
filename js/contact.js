const maxLength = 400;

// Span à modifier
let span = document.getElementById("count");
span.innerText = maxLength;

// récupère et ajoute un event au textarea
let textarea = document.getElementById("message");
let areaHelp = document.getElementById("messageHelp")
textarea.addEventListener("keyup", function(){
  let remain = maxLength - this.value.length;
  if(remain >= 0) {
    span.innerText = remain;
  }
  else {
    this.value = this.value.substring(0, maxLength - 1);
  }

  if(this.value.match(/(\bcon(ne|nard|nasse)?\b)|(\bsex(e)?\b)/g)) {
    this.classList.add("border", "border-danger");
    areaHelp.innerText = "Uncorrect Input";
  }
  else {
    this.classList.remove("border", "border-danger");
    areaHelp.innerText = "";
  }
});