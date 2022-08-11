
function proveri() {
	var cond = proveriPoruku();
	var ok = true;
	if (cond == false)
		ok = false;
	cond = proveriIme();
	if (cond == false)
		ok = false;
	cond = proveriImejl();
	if (cond == false)
		ok = false;
	cond = proveriTelefon();
	if (cond == false)
		ok = false;
	
	if (ok)
		document.getElementById("submit").disabled = false;
	else
		document.getElementById("submit").disabled = true;
}
	
function proveriPoruku() {
	var comment = document.myForm.message.value;
	var ok = true;
		
	if (comment.length == 0) {
		document.getElementById("messageWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Празна порука!</strong></div>";
		ok = false;
	} else if (comment.length == 1 ) {
		document.getElementById("messageWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Прекратка порука!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("messageWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriIme() {
	var name = document.myForm.name.value;
	var ok = true;
		
	if (name.length == 0) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Празно поље!</strong></div>";
		ok = false;
	}
	else if (name.length == 1) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Прекратко име!</strong></div>";
		ok = false;
	}
	else 
		document.getElementById("nameWarning").innerHTML = "";
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriImejl() {
	var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.myForm.email.value;
	var ok = true;	
		
	if (email.length == 0) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Празно поље!</strong></div>";
		ok = false;
	} else if (!emailCheck.test(email)) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Погрешан формат!</strong></div>";
		ok = false;
	}
	else document.getElementById("emailWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}

function proveriTelefon() {
	var phoneCheck = /^((\d{3}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{9})|(\d{10})|(\+\d{5}-\d{3}-\d{3})|(\+\d{5}-\d{3}-\d{2}-\d{2})|(\+\d{5}\d{6})|(\+\d{5}\d{7}))$/;
	var phone = document.myForm.phone.value;
	var ok = true;
	
	if (phone.length == 0) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Празно поље!</strong></div>";
		ok = false;
	}
	else if (!phoneCheck.test(phone)) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Погрешан формат!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("phoneWarning").innerHTML = "";
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}



// Funkcije na engleskom //



function proveriEngleski() {
	var cond = proveriPorukuEngleski();
	var ok = true;
	if (cond == false)
		ok = false;
	cond = proveriImeEngleski();
	if (cond == false)
		ok = false;
	cond = proveriImejlEngleski();
	if (cond == false)
		ok = false;
	cond = proveriTelefonEngleski();
	if (cond == false)
		ok = false;
	
	if (ok)
		document.getElementById("submit").disabled = false;
	else
		document.getElementById("submit").disabled = true;
}
	
function proveriPorukuEngleski() {
	var comment = document.myForm.message.value;
	var ok = true;
		
	if (comment.length == 0) {
		document.getElementById("messageWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Blank message!</strong></div>";
		ok = false;
	} else if (comment.length == 1 ) {
		document.getElementById("messageWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Too short message!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("messageWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriImeEngleski() {
	var name = document.myForm.name.value;
	var ok = true;
		
	if (name.length == 0) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Blank name!</strong></div>";
		ok = false;
	}
	else if (name.length == 1) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Short name!</strong></div>";
		ok = false;
	}
	else 
		document.getElementById("nameWarning").innerHTML = "";
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriImejlEngleski() {
	var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.myForm.email.value;
	var ok = true;	
		
	if (email.length == 0) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Blank email!</strong></div>";
		ok = false;
	} else if (!emailCheck.test(email)) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Invalid format!</strong></div>";
		ok = false;
	}
	else document.getElementById("emailWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}

function proveriTelefonEngleski() {
	var phoneCheck = /^((\d{3}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{9})|(\d{10})|(\+\d{5}-\d{3}-\d{3})|(\+\d{5}-\d{3}-\d{2}-\d{2})|(\+\d{5}\d{6})|(\+\d{5}\d{7}))$/;
	var phone = document.myForm.phone.value;
	var ok = true;
	
	if (phone.length == 0) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Blank phone!</strong></div>";
		ok = false;
	}
	else if (!phoneCheck.test(phone)) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size12'>" + 
		"<strong>Unvalid format!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("phoneWarning").innerHTML = "";
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}