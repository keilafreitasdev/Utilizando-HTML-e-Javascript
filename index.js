document.getElementById("submitButton").addEventListener("click", function() {
    var numA = parseFloat(document.getElementById("numA").value);
    var numB = parseFloat(document.getElementById("numB").value);
    var messageElement = document.getElementById("message");

    if (isNaN(numA) || isNaN(numB)) {
     messageElement.innerHTML = "Por favor, insira números válidos em ambus os campos. ";
     messageElement.style.color ="red";
     
    }else if (numB > numA) {
     messageElement.innerHTML = "Formulário válido! Número B é maior que o número A." ;

    }else {
     messageElement.innerHTML = "Formulário inválido! Número B deve ser maior que o número A. "
     messageElement.style.color = "red";
    }
 });