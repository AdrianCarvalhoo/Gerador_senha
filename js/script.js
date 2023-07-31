const pwEl = document.getElementById("senha");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const lenValueEl = document.getElementById("lenValue");
const upperEl = document.getElementById("Maiuscula");
const lowerEl = document.getElementById("Minuscula");
const numberEl = document.getElementById("Numero");
const symbolEl = document.getElementById("Caracteres");
const generateEl = document.getElementById("generate");
const resetEl = document.getElementById("reset");

const letrasmaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasminusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@$%¨&*()_-+=+\\|}]{[^~?°/.*<>,";
        
function getLowercase() {
    return letrasminusculas[Math.floor(Math.random() * letrasminusculas.length)];
}

function getUppercase() {
    return letrasmaiusculas[Math.floor(Math.random() * letrasmaiusculas.length)];
}

function getNumber() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getSymbol() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function generatePassword() {
    const len = lenEl.value;
    lenValueEl.innerText = len;
    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        alert("Por favor, gere uma senha primeiro.");
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("A senha foi copiada para a área de transferência!");
});

resetEl.addEventListener("click", () => {
    lenEl.value = 12;
    lenValueEl.innerText = 12;
    upperEl.checked = true;
    lowerEl.checked = true;
    numberEl.checked = true;
    symbolEl.checked = true;
    pwEl.innerText = "";
});

lenEl.addEventListener("input", () => {
    const len = lenEl.value;
    lenValueEl.innerText = len;
});

lenEl.addEventListener("change", generatePassword);
