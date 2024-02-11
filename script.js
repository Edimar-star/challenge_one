const encryptText = document.querySelector("#encryptText")
const decryptText = document.querySelector("#decryptText")
const copyText = document.querySelector("#copyText")
const regularExpression = /^[a-z ]*[a-z][a-z ]*$/
const changeOrder = () => {
		const empty = document.querySelector('.empty')
		const contentText = document.querySelector('.contentText')
		empty.style.zIndex = "0"
		contentText.style.zIndex = "1"
}

encryptText.addEventListener("click", () => {
		const text = document.querySelector("#inputText").value
		if (text.length > 0 && regularExpression.test(text)) {
				// Oculto el div de informacion
				changeOrder()

				// Añado el texto encriptado
				const outputText = document.querySelector("#outputText")
				outputText.value = text.replaceAll("e", "enter")
						.replaceAll("i", "imes").replaceAll("a", "ai")
						.replaceAll("o", "ober").replaceAll("u", "ufat")
		}
})

decryptText.addEventListener("click", () => {
		const text = document.querySelector("#inputText").value
		if (text.length > 0 && regularExpression.test(text)) {
				// Oculto el div de informacion
				changeOrder()

				// Añado el texto desencriptado
				const outputText = document.querySelector("#outputText")
				outputText.value = text.replaceAll("ufat", "u")
						.replaceAll("ober", "o").replaceAll("ai", "a")
						.replaceAll("imes", "i").replaceAll("enter", "e")
		}
})

copyText.addEventListener("click", () => {
		const outputText = document.querySelector("#outputText").value
		if(outputText.length > 0) {
				navigator.clipboard.writeText(outputText)
						.then(() => console.log('Texto copiado al portapapeles'))
						.catch(err => console.error('Error al copiar al portapapeles:', err))
		}
})