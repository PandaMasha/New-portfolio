let elem = document.getElementById('contact');

function changeText() {
    elem.innerHTML = "Looking forward to hear from you!!!";
  }
  function returnText() {
    elem.innerHTML = "Contacts: <br> E-mail: mvspanda2@gmail.com";
  }
  elem.addEventListener("mouseout", changeText);
  elem.addEventListener("click", returnText);

  elem.removeEventListener("mouseout", changeText, true);

  //elem.style.background = 'red';

 
  