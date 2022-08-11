	
function proveriVreme() {
	var ok = true;
	var date = document.getElementById("date").value;
	date = date.split("/");
	day = parseInt(date[0]);
	month = parseInt(date[1]);
	year = parseInt(date[2]);
	
	var time = document.getElementById("time").options[document.getElementById("time").selectedIndex].value;
	time = time.split(":");
	var hour = parseInt(time[0]);
	var min = parseInt(time[1]);
	date = new Date(year, month - 1, day, hour, min, 0);
	var now = new Date();
	//document.write(day + " " + month + " " + year + "   " + hour + " " + min);
	
	if (now.getTime() >= date.getTime()) {
		document.getElementById("timeWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>You can't reserve for the past!</strong></div>";
		ok = false;
	}
	else if ((date.getTime() - now.getTime()) > (1000 * 3600 * 24 * 30)) {
		document.getElementById("timeWarning").innerHTML = "<div class='alert alert-danger bo-rad-10'>" + 
		"<strong>You can't reserve more than one month in advance!</strong></div>";
		ok = false;
	}
	else {
		document.getElementById("timeWarning").innerHTML = "";
	}
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}	
	
function proveriFilm() {
	var ok = true;
	if (document.getElementById("movie").selectedIndex == 0) {
		document.getElementById("movieWarning").innerHTML = "<div class='alert alert-danger size12 bo-rad-10'>" + 
		"<strong>Choose movie first!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("movieWarning").innerHTML = "";
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}	

function proveriImejl() {
	var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.myForm.email.value;
	var ok = true;
	if (email.length == 0) {
		document.getElementById("emailWarning").innerHTML = "<div class='size12 bo-rad-10 alert alert-danger'>" + 
		"<strong>Enter email!</strong></div>";
		ok = false;
	}
	else if (!emailCheck.test(email)) {
		document.getElementById("emailWarning").innerHTML = "<div class='size12 bo-rad-10 alert alert-danger'>" + 
		"<strong>Unvalid format!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("emailWarning").innerHTML = "";
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}	
	
function proveriTelefon() {
	var phoneCheck = /^((\d{3}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{9})|(\d{10})|(\+\d{5}-\d{3}-\d{3})|(\+\d{5}-\d{3}-\d{2}-\d{2})|(\+\d{5}\d{6})|(\+\d{5}\d{7}))$/
	var phone = document.myForm.phone.value;
	var ok = true;
	if (phone.length == 0) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger size12 bo-rad-10'>" + 
		"<strong>Enter number!</strong></div>";
		ok = false;
	}
	else if (!phoneCheck.test(phone)) {
		document.getElementById("phoneWarning").innerHTML = "<div class='alert alert-danger size12 bo-rad-10'>" + 
		"<strong>Unvalid format!</strong></div>";
		ok = false;
	}
	else
		document.getElementById("phoneWarning").innerHTML = "";
	
	if (ok)
		document.getElementById("submit").disabled = false;
	
	return ok;
}	

function proveri() {
	
	var ok = true;
	var cond = proveriFilm();
	if (cond == false)
		ok = false;
	cond = proveriVreme();
	if (cond == false)
		ok = false;
	cond = proveriImejl();
	if (cond == false)
		ok = false;
	cond = proveriTelefon();
	if (cond == false)
		ok = false;
	
	if (ok) {
		rezervisi();
		document.getElementById("submit").disabled = false;
	}
	else
		document.getElementById("submit").disabled = true;
}



// FUNKCIJE ZA REZERVACIJU




function inicijalizuj() {
	//localStorage.removeItem("rezervacije");
	
	if (!proveriBrowser())
		return;
	var storage = localStorage.getItem("rezervacije");
	if ((storage != null) && (storage.length != 0))
		return;
	var ukupno = document.getElementById("movie").options.length;
	for (var i = 1; i < document.getElementById("movie").options.length; i++) {
		var value = document.getElementById("movie").options[i].value + "*0";
		localStorage.setItem(i, value);
	}
	localStorage.setItem("rezervacije", ukupno);
}

function rezervisi() {
	inicijalizuj();
	if (!proveriBrowser())
		return;
	var kljuc = document.getElementById("movie").selectedIndex;
	var vrednost = localStorage.getItem(kljuc);
	vrednost = vrednost.split("*");
	//document.write("aloo");
	var index = document.getElementById("people").selectedIndex;
	//document.write("index = " + index);
	var broj = parseInt(document.getElementById("people").options[index].value);
	broj = broj + parseInt(vrednost[13]);
	//document.write("broj = " + broj);
	var novaVrednost = "";
	for (var i = 0; i < vrednost.length - 1; i++) {
		novaVrednost = novaVrednost + vrednost[i] + "*";
	}
	novaVrednost = novaVrednost + broj;
	//document.write("nova vrednost = " + novaVrednost);
	localStorage.setItem(kljuc, novaVrednost);
}

function izlistajRezervacije() {
	//inicijalizuj();
	if (!proveriBrowser()) {
		document.getElementById("lista").innerHTML = "<div class='container section-mainmenu p-t-110 p-b-70 bg1-pattern'>Your browser doesn't support this functionality!</div>";
		return;
	}
	var ukupno = localStorage.getItem("rezervacije");
	if ((ukupno == null) || (ukupno == 0)) {
		document.getElementById("lista").innerHTML = "<div class='container section-mainmenu p-t-110 p-b-70 bg1-pattern'>You haven't made any reservation yet!</div>";
		return;
	}
	var niz = new Array();
	for (var i = 1; i < ukupno; i++) {
		var vrednost = localStorage.getItem(i);
		niz[i - 1] = vrednost;
	}
	niz.sort(sortiraj);
	var kod2 = "";
	var kod1 = "<div class='container section-mainmenu p-t-110 p-b-70 bg1-pattern'>";
	for (var j = 0; j < niz.length;) {
		var podaci = niz[j].split("*");
		var slika = "";
		if ((j % 3) == 0)
			slika = "images/cinema.jpg";
		else if ((j % 3) == 1)
			slika = "images/cinema1.jpg";
		else
			slika = "images/cinema2.jpg";
		//document.write(niz[j].split("*")[1] + " " + niz[j].split("*")[13] + "<br>");
		kod2 = kod2 + 
		"<section class='section-lunch bgwhite'>" +
			"<div class='header-lunch parallax0 parallax100' style='background-image: url(" + slika + ");' id='" + podaci[13] + "'>" +
				"<div class='bg1-overlay t-center p-t-170 p-b-165'>" +
					"<h2 class='tit4 t-center'>" +
					podaci[13] + 
					"</h2>" +
				"</div>" +
			"</div>" +
		
			"<div class='row p-t-50 p-b-10'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r-auto'>" +
					"<div class='blo3 flex-w flex-col-l-sm m-b-30'>" +
						"<div class='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>" +
							"<a href='" + podaci[0] + "-eng.html" + "'><img src='" + podaci[6] + "' alt='IMG-MENU' height='80%'></a>" +
						"</div>" +
						"<div class='text-blo3 size21 flex-col-l-m'>" +
							"<a href='" + podaci[0] + "-eng.html" + "' class='txt22 m-b-3'>" +
								podaci[2] +
							"</a>" + 
							"<div><b>Duration: </b>" + podaci[7] + "</div>" +
							"<div><b>Director: </b>" + podaci[9] + "</div>" +
							"<div><b>Roles: </b>" + podaci[11] + "</div>" +

							"<a href='" + podaci[0] + "-eng.html" + "' class='dis-block txt4 m-t-30'>" +
								"Read more" +
								"<i class='fa fa-long-arrow-right m-l-10' aria-hidden='true'></i>" +
							"</a>" +
							"<span class='txt22 m-t-20'>" + 
								podaci[12] + 
							"</span>" +
						"</div>" + 
					"</div>" +
				"</div>" +
			"</div>";
		kod1 = 	kod1 +"<div class='row'>" +
				"<div class='col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto'>" +
					"<div class='wrap-item-mainmenu p-b-22'>" +
						"<h3 class='tit-mainmenu tit10 p-b-25'>" +
							podaci[13] +
						"</h3>" +
						
						"<div class='item-mainmenu m-b-36'>" +
							"<div class='flex-w flex-b m-b-3'>" +
								"<a href='#" + podaci[13] + "' class='name-item-mainmenu txt21'>" +
									podaci[2] +
								"</a>" +

								"<div class='line-item-mainmenu bg3-pattern'></div>" +

								"<div class='price-item-mainmenu txt22'>" +
									podaci[5] +
								"</div>" +
							"</div>" +

							"<span class='info-item-mainmenu txt23'>" +
								podaci[4] +
							"</span>" +
						"</div>"
		var k = j + 1;
		while (k < niz.length) {
			var podaci2 = niz[k].split("*");
			if (podaci2[13] == podaci[13]) {
				kod1 = 	kod1 + 
						"<div class='item-mainmenu m-b-36'>" +
							"<div class='flex-w flex-b m-b-3'>" +
								"<a href='#" + podaci2[13] + "' class='name-item-mainmenu txt21'>" +
									podaci2[2] +
								"</a>" + 

								"<div class='line-item-mainmenu bg3-pattern'></div>" +

								"<div class='price-item-mainmenu txt22'>" +
									podaci2[5] +
								"</div>" +
							"</div>" +

							"<span class='info-item-mainmenu txt23'>" +
								podaci2[4] +
							"</span>" +
						"</div>";
				kod2 = kod2 + "<div class='row p-t-50 p-b-10'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r-auto'>" +
					"<div class='blo3 flex-w flex-col-l-sm m-b-30'>" +
						"<div class='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>" +
							"<a href='" + podaci2[0] + "-eng.html" + "'><img src='" + podaci2[6] + "' alt='IMG-MENU' height='80%'></a>" +
						"</div>" +
						"<div class='text-blo3 size21 flex-col-l-m'>" +
							"<a href='" + podaci2[0] + "-eng.html" + "' class='txt22 m-b-3'>" +
								podaci2[2] +
							"</a>" + 
							"<div><b>Duration: </b>" + podaci2[7] + "</div>" +
							"<div><b>Director: </b>" + podaci2[9] + "</div>" +
							"<div><b>Roles: </b>" + podaci2[11] + "</div>" +

							"<a href='" + podaci2[0] + "-eng.html" + "' class='dis-block txt4 m-t-30'>" +
								"Read more" +
								"<i class='fa fa-long-arrow-right m-l-10' aria-hidden='true'></i>" +
							"</a>" +
							"<span class='txt22 m-t-20'>" + 
								podaci2[12] + 
							"</span>" +
						"</div>" + 
					"</div>" +
				"</div>" +
			"</div>";
						
			}
			else break;
			k = k + 1;
		}
		j = k;
		kod1 = kod1 + "</div></div></div>";
		kod2 = kod2 + "</section>";
	}
	kod1 = kod1 + "</div>" + kod2;
	document.getElementById("lista").innerHTML = kod1;
}

function sortiraj(a, b) {
	var valA = parseInt(a.split("*")[13]);
	var valB = parseInt(b.split("*")[13]);
	return valB - valA;
}

function proveriBrowser() {
	if ('localStorage' in window && window.localStorage != null)
		return true;
	else {
		return false;
	}
}
