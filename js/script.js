let pswrd = document.querySelector("#pswrd");
let secondPswrd = document.querySelector("#secondPswrd");
let toggleBtn = document.querySelector("#toggleBtn");
let inputBox = document.querySelector("#inputBox");
let secondInputBox = document.querySelector("#secondInputBox");
let validation = document.querySelector(".validation");
let lower = document.querySelector("#lower");
let upper = document.querySelector("#upper");
let number = document.querySelector("#number");
let special = document.querySelector("#special");
let eight = document.querySelector("#eight");
let allConditionsTrue = false;

// Mostrar e esconder senha
toggleBtn.onclick = function () {
	if (pswrd.type === "password") {
		pswrd.setAttribute("type", "text");
		toggleBtn.classList.add("hide");
	} else {
		pswrd.setAttribute("type", "password");
		toggleBtn.classList.remove("hide");
	}
};

function checkValidation(problem, solution, pass) {
	if (problem.test(pass)) {
		solution.classList.add("valid");
		return true;
	} else {
		solution.classList.remove("valid");
		return false;
	}
}

// Validação de senha
function passwordValidation(pass) {
	const lower = new RegExp("(?=.*[a-z])");
	const upper = new RegExp("(?=.*[A-Z])");
	const number = new RegExp("(?=.*[0-9])");
	const special = new RegExp("(?=.*?[#?!@$%^&*-])");
	const eight = new RegExp("(?=.{8,})");

	checkValidation(lower, this.lower, pass); // Caixa baixa
	checkValidation(upper, this.upper, pass); // Caixa alta
	checkValidation(number, this.number, pass); // Caracter especial
	checkValidation(special, this.special, pass); // Caracter Numérico
	checkValidation(eight, this.eight, pass); // Tamanho mínimo

	if (checkValidation(lower, this.lower, pass) && checkValidation(upper, this.upper, pass) && checkValidation(number, this.number, pass) && checkValidation(special, this.special, pass) && checkValidation(eight, this.eight, pass)) {
		this.allConditionsTrue = true;
		inputBox.classList.add("allValid");
	} else {
		this.allConditionsTrue = false;
		inputBox.classList.remove("allValid");
	}
}

// Autenticação de confirmação de senha
function authenticateSecondPassword(pass) {
	if (pass === this.pswrd.value && this.allConditionsTrue) {
		this.secondInputBox.classList.add("allValid");
		this.secondInputBox.classList.remove("invalidPass");
	} else if (!(pass === this.pswrd.value && this.allConditionsTrue)) {
		this.secondInputBox.classList.remove("allValid");
		this.secondInputBox.classList.add("invalidPass");
	}

	if (pass == 0) {
		this.secondInputBox.classList.add("transparent");
	} else {
		this.secondInputBox.classList.remove("transparent");
	}
}
