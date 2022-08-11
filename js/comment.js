
function proveri() {
	var cond = proveriKomentar();
	var ok = true;
	if (cond == false)
		ok = false;
	cond = proveriIme();
	if (cond == false)
		ok = false;
	cond = proveriImejl();
	if (cond == false)
		ok = false;
	
	if (ok)
		document.getElementById("submit").disabled = false;
	else
		document.getElementById("submit").disabled = true;
}
	
function proveriKomentar() {
	var comment = document.myForm.comment.value;
	var ok = true;
		
	if (comment.length == 0) {
		document.getElementById("commentWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Нисте унели коментар!</strong></div>";
		ok = false;
	} else if (comment.length == 1 ) {
		document.getElementById("commentWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Прекратак коментар!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("commentWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriIme() {
	var name = document.myForm.name.value;
	var ok = true;
		
	if (name.length == 0) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Нисте унели име!</strong></div>";
		ok = false;
	}
	else if (name.length == 1) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
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
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Нисте унели имејл!</strong></div>";
		ok = false;
	} else if (!emailCheck.test(email)) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Погрешан формат!</strong></div>";
		ok = false;
	}
	else document.getElementById("emailWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}


// Funkcije za stranice na engleskom //





function proveriEngleski() {
	var cond = proveriKomentarEngleski();
	var ok = true;
	if (cond == false)
		ok = false;
	cond = proveriImeEngleski();
	if (cond == false)
		ok = false;
	cond = proveriImejlEngleski();
	if (cond == false)
		ok = false;
	
	if (ok)
		document.getElementById("submit").disabled = false;
	else
		document.getElementById("submit").disabled = true;
}
	
function proveriKomentarEngleski() {
	var comment = document.myForm.comment.value;
	var ok = true;
		
	if (comment.length == 0) {
		document.getElementById("commentWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Blank comment!</strong></div>";
		ok = false;
	} else if (comment.length == 1 ) {
		document.getElementById("commentWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>Too short comment!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("commentWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}
	
function proveriImeEngleski() {
	var name = document.myForm.name.value;
	var ok = true;
		
	if (name.length == 0) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Blank name!</strong></div>";
		ok = false;
	}
	else if (name.length == 1) {
		document.getElementById("nameWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Too short name!</strong></div>";
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
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Blank email!</strong></div>";
		ok = false;
	} else if (!emailCheck.test(email)) {
		document.getElementById("emailWarning").innerHTML = "<div class='alert alert-danger bo-rad-10 size30'>" + 
		"<strong>Invalid format!</strong></div>";
		ok = false;
	}
	else document.getElementById("emailWarning").innerHTML = "";
		
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}



