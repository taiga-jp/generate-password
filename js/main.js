(function () {
  const baseNum = '1234567890',
    baseUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    baseLowercase = 'abcdefghijklmnopqrstuvwxyz',
    baseSymbol = '!"#$%&()=~|@[];:+-*<>?_>.,\'';

  const generateBtn = document.getElementById('generate');
  const copyBtn = document.getElementById('copy');

  const generatePassword = (length) => {
    let password = '';
    let basePassword = "";

    const num = document.getElementById('num');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const symbol = document.getElementById('symbol');

    if (num.checked) {
      basePassword += baseNum;
    }

    if (uppercase.checked) {
      basePassword += baseUppercase;
    }

    if (lowercase.checked) {
      basePassword += baseLowercase;
    }

    if (symbol.checked) {
      basePassword += baseSymbol;
    }

    for (let i = 0; i < length; i++) {
      password += basePassword.charAt(Math.floor(Math.random() * basePassword.length));
    }

    return password;
  }

  const displayPassword = () => {
    const password = document.getElementById('password');
    const length = document.getElementById('length').value;
    password.innerHTML = generatePassword(length);
  }

  const copyPassword = () => {
    const text = document.getElementById('password').textContent;
    navigator.clipboard.writeText(text).then(e => {
      alert('コピーできました');
    });
  }

  generateBtn.addEventListener('click', displayPassword);
  copyBtn.addEventListener('click', copyPassword);
}());