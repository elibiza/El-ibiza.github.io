function cifrarIbi(texto, desplazamiento) {
  return texto.split('').map(char => {
    let c = char.charCodeAt(0);
    if (c >= 65 && c <= 90) {
      return String.fromCharCode(((c - 65 + desplazamiento) % 26) + 65);
    } else if (c >= 97 && c <= 122) {
      return String.fromCharCode(((c - 97 + desplazamiento) % 26) + 97);
    } else {
      return char;
    }
  }).join('');
}

document.getElementById("texto").addEventListener("input", actualizar);
document.getElementById("desplazamiento").addEventListener("input", actualizar);

function actualizar() {
  const texto = document.getElementById("texto").value;
  const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  const resultado = cifrarIbi(texto, desplazamiento);
  document.getElementById("resultado").innerText = resultado;
}
