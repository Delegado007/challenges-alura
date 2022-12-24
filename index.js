const encriptarTexto = (
  texto,
  bloqueResultado,
  bloqueEmptyMessage,
  textAreaEncriptado
) => {
  let replacedText = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")

  textAreaEncriptado.value = replacedText
  if (textAreaEncriptado.value !== "") {
    bloqueEmptyMessage.classList = "notVisible"
    bloqueResultado.classList = "isVisible bloque-resultado"
  } else {
    bloqueEmptyMessage.classList = "isVisible empty-message"
    bloqueResultado.classList = "notVisible"
  }
}

const desencriptarTexto = (
  texto,
  bloqueResultado,
  bloqueEmptyMessage,
  textAreaEncriptado
) => {
  let replacedText = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")

  textAreaEncriptado.value = replacedText
  if (textAreaEncriptado.value !== "") {
    bloqueEmptyMessage.classList = "notVisible"
    bloqueResultado.classList = "isVisible bloque-resultado"
  } else {
    bloqueEmptyMessage.classList = "isVisible empty-message"
    bloqueResultado.classList = "notVisible"
  }
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    const buttonEncriptar = document.querySelector("#btn-encriptar")
    const buttonDesencriptar = document.querySelector("#btn-desencriptar")
    const textArea = document.querySelector(".textarea")
    const textAreaEncriptado = document.querySelector("#texto-encriptado")
    const bloqueEmptyMessage = document.querySelector(".empty-message")
    const bloqueResultado = document.querySelector('.bloque-resultado')
    const buttonCopy = document.querySelector('.btn-copiar')


    buttonEncriptar.onclick = () => encriptarTexto(
      textArea.value,
      bloqueResultado,
      bloqueEmptyMessage,
      textAreaEncriptado
    )

    buttonDesencriptar.onclick = () => desencriptarTexto(
      textArea.value,
      bloqueResultado,
      bloqueEmptyMessage,
      textAreaEncriptado
    )

    buttonCopy.onclick = (e) => navigator.clipboard.writeText(textAreaEncriptado.value);

    if (textArea.value !== "") {
      console.log("entra?")
      emptyMessageElem.classList = "notVisible"
    }
  }
};