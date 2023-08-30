document.getElementById("submitButton").addEventListener("click", function () {
	let numberA = parseFloat(document.getElementById("numberA").value);
	let numberB = parseFloat(document.getElementById("numberB").value);
	let messageElement = document.getElementById("message");

	if (isNaN(numberA) || isNaN(numberB)) {
		messageElement.innerHTML =
			"Por favor, insira números válidos em ambos os campos. ";
		messageElement.style.color = "red";
	} else if (numberB > numberA) {
		messageElement.innerHTML =
			"Formulário válido! Número B é maior que o número A.";
            messageElement.style.color = "green";
	} else {
		messageElement.innerHTML =
			"Formulário inválido! Número B deve ser maior que o número A. ";
		messageElement.style.color = "red";
	}
});
