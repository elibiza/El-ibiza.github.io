const input = document.getElementById('inputText');
const output = document.getElementById('outputText');
const range = document.getElementById('shiftRange');
const shiftValue = document.getElementById('shiftValue');

range.addEventListener('input', () => {
    shiftValue.textContent = range.value;
    updateOutput();
});

input.addEventListener('input', updateOutput);

function updateOutput() {
    const text = input.value.toUpperCase();
    const shift = parseInt(range.value);
    let result = '';

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
        } else {
            result += char;
        }
    }

    output.textContent = result;
}
