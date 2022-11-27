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

// Show and Hide Password
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

// Handle Validation
function passwordValidation(pass) {
	const lower = new RegExp("(?=.*[a-z])");
	const upper = new RegExp("(?=.*[A-Z])");
	const number = new RegExp("(?=.*[0-9])");
	const special = new RegExp("(?=.*?[#?!@$%^&*-])");
	const eight = new RegExp("(?=.{8,})");

	checkValidation(lower, this.lower, pass); // Lower case
	checkValidation(upper, this.upper, pass); // Upper case
	checkValidation(number, this.number, pass); // Special char
	checkValidation(special, this.special, pass); // Numeric char
	checkValidation(eight, this.eight, pass); // Minimal Length

	if (checkValidation(lower, this.lower, pass) && checkValidation(upper, this.upper, pass) && checkValidation(number, this.number, pass) && checkValidation(special, this.special, pass) && checkValidation(eight, this.eight, pass)) {
		this.allConditionsTrue = true;
		inputBox.classList.add("allValid");
	} else {
		this.allConditionsTrue = false;
		inputBox.classList.remove("allValid");
	}
}

// Handle Password Confirmation
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
	console.log(pass);
}
