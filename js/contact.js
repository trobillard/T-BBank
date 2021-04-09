/*function textArea(max) {
  let reste;
  let message = document.getElementById("message")
  let errorMessage = document.getElementById("errorMessage");
  errorMessage.innerText = max + " Remaining Caracters"
  // press on the key 
  message.onkeypress = function () {
      // calculate the remain character
      reste = max - message.value.length
      // authorized overrun
      if (reste < 1) {
          return false;
      }
      errorMessage.innerText = reste + " Remaining Caracters"
  }
  // release on the key
  message.onkeyup = function () {
      // calculate the remain character
      reste = max - message.value.length
      // authorized overrun
      if (reste < 0) {
          return false;
      }
      errorMessage.innerText = reste + " Remaining Caracters"
      let regex = new RegExp(/(\bcon(ne|nard|nasse)?\b)|(\bsex(e)?\b)/g);
       // not empty value
       if (message.value !== '') {
          if (regex.test(message.value)) {
              message.className += " box-red";
          }
          else {
              message.className = "form-control form-control:focus"
          }
      }
  }
}

textArea(400);*/

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