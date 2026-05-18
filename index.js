const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const pwdLengthEl = document.getElementById("pwd-length");
const generatePwdBtn = document.getElementById("generate-pwd-btn");
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
const copyFirstPasswordBtn = document.getElementsByClassName("password-btn")[0];
const copySecondPasswordBtn = document.getElementsByClassName("password-btn")[1];

function generateAPassword() {
  let password = "";
  for (let i = 0; i < parseInt(pwdLengthEl.value, 10); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function copyPassword(passwordEl) {
  const passwordText = passwordEl.innerText;

  try {
    await navigator.clipboard.writeText(passwordText);
    alert("Password copied to the clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

generatePwdBtn.addEventListener("click", () => {
  firstPassword.textContent = generateAPassword();
  secondPassword.textContent = generateAPassword();
});

copyFirstPasswordBtn.addEventListener("click", () => {
  copyPassword(firstPassword);
});

copySecondPasswordBtn.addEventListener("click", () => {
  copyPassword(secondPassword);
});
