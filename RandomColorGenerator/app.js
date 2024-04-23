const randomColor = () => {
  let hexNum = "0123456789ABCDEF";
  color = "#";
  for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color += `${hexNum[randomNum]}`;
  }
  document.querySelector("#colorCode").innerText = color;
  document.body.style.backgroundColor = color;
  navigator.clipboard.writeText(color);
};

document.querySelector("#btn").addEventListener(
  "click",

  randomColor
);
randomColor();

// Alternate code to generate random color

// randomColor = Math.floor(Math.random() * 16777125);
// color = `#${randomColor}`;
