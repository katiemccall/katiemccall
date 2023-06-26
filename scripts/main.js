const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/backupflorence.jpeg") {
    myImage.setAttribute("src", "images/duomoflorence.jpeg");
  } else {
    myImage.setAttribute("src", "images/backupflorence.jpeg");
  }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Florence is wonderful, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Florence is wonderful, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
