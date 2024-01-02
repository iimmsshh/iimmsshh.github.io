const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/torii.jpg") {
    myImage.setAttribute("src", "images/otera.jpg");
  } else {
    myImage.setAttribute("src", "images/torii.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん、Mozilla はかっこいいよ。`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  