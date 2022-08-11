
function omiljeniFilmovi() {
	if (!proveriBrowser())
		return;
	if (document.getElementById("toggle-heart").checked)
		dodajOmiljeniFilm();
	else
		ukloniOmiljeniFilm();
}


function proveriBrowser() {
	if ('localStorage' in window && window.localStorage !== null)
		return true;
	else {
		alert("Local Storage is not supported!")
		return false;
	}
}

function dodajOmiljeniFilm() {
	var lista = localStorage.getItem("filmovi");
    if ((lista == null) || (lista.length == 0))
		lista = document.getElementById("toggle-heart").value;
	else
		lista = lista + ";" + document.getElementById("toggle-heart").value;  //cuvamo naziv html stranice, naziv filma i naziv slike, njih odvajamo *, a grupe od 3 medjusobno odvajam ;
	
	if(!proveraPostoji())
		localStorage.setItem("filmovi", lista);
	//document.write(lista);
}

function proveraPostoji() {
	var lista = localStorage.getItem("filmovi");
	if ((lista == null) || (lista.length == 0))
		return false;
	var film = document.getElementById("toggle-heart").value;
	var parovi = lista.split(";");
	for (var i = 0; i < parovi.length; i++) {
		if (parovi[i] == film)
			return true;
	}
	return false;
	
}

function postaviBoju() {
	if (!proveriBrowser())
		return;
	if (proveraPostoji()) {
		document.getElementById("toggle-heart").checked = true;
		//document.getElementById("toggle-label").style.color = "#e2264d";
	}
}

function ukloniOmiljeniFilm() {
	var lista = localStorage.getItem("filmovi");
	localStorage.removeItem("filmovi");
	if ((lista == null) || (lista.length == 0))
		return;
	var film = document.getElementById("toggle-heart").value;
	var parovi = lista.split(";");
	var novaLista = new Array(); var cnt = 0;
	for (var i = 0; i < parovi.length; i++) {
		if (parovi[i] != film) {
			novaLista[cnt] = parovi[i];
			cnt++;
		}
	}
	lista = "";
	for (var j = 0; j < cnt - 1; j++)
		lista += novaLista[j] + ";";
	if ((cnt - 1) >= 0)
		lista += novaLista[cnt-1];
	localStorage.setItem("filmovi", lista);		
	//document.write(novaLista);
}

function izlistajFilmove() {
	//localStorage.removeItem("filmovi");
	if (!proveriBrowser()) {
		document.getElementById("rezultat").innerHTML = "<div class='container'><div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'><div class='text-blo3 size21 flex-col-l-m'>Ваш интернет претраживач не подржава ову функционалност!<br><br><br><br>" + "</div></div></div></div></div>";
		return
	}
		
	
	var lista = localStorage.getItem("filmovi");
	if ((lista == null) || (lista.length == 0)) {
		document.getElementById("rezultat").innerHTML = "<div class='container'><div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'><div class='text-blo3 size21 flex-col-l-m'>Још нисте одабрали омиљени филм!<br><br><br><br>" + "</div></div></div></div></div>";
		return;
	}
	var parovi = lista.split(";");
	var rezultat = "<div class='container'>";
	for (var i = 0; i < parovi.length; i++) {
		var stranica = parovi[i].split("*")[0] + ".html";
		var naziv = parovi[i].split("*")[1]; 
		var slika = parovi[i].split("*")[2];
		rezultat = rezultat + "<div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'>" + 
				"<div class='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>" + 
							"<a href='" + stranica + "'><img src='" + slika + "' alt='IMG-MENU'></a>" + 
						"</div>" + 
				"<div class='text-blo3 size21 flex-col-l-m'>" + 
							"<a href='" + stranica + "' class='txt22 m-b-3'>" + naziv + "</a>" +
						    "<a href='" + stranica + "' class='dis-block txt4 m-t-30'>" + 
								"Прочитајте опширније" + 
								"<i class='fa fa-long-arrow-right m-l-10' aria-hidden='true'></i>" + 
							"</a>" + "</div></div></div></div>"; 

		//document.write(i + " " + slika);					
	}
		rezultat = rezultat + "</div>";
	document.getElementById("rezultat").innerHTML = rezultat;
}



function izlistajFilmoveEngleski() {
	//localStorage.removeItem("filmovi");
	if (!proveriBrowser()) {
		document.getElementById("rezultat").innerHTML = "<div class='container'><div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'><div class='text-blo3 size21 flex-col-l-m'>Your web browser doesn't support this functionality!<br><br><br><br>" + "</div></div></div></div></div>";
		return
	}
		
	
	var lista = localStorage.getItem("filmovi");
	if ((lista == null) || (lista.length == 0)) {
		document.getElementById("rezultat").innerHTML = "<div class='container'><div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'><div class='text-blo3 size21 flex-col-l-m'>You haven't chosen your favourite film!<br><br><br><br>" + "</div></div></div></div></div>";
		return;
	}
	var parovi = lista.split(";");
	var rezultat = "<div class='container'>";
	for (var i = 0; i < parovi.length; i++) {
		var stranica = parovi[i].split("*")[0] + "-eng.html";
		var naziv = parovi[i].split("*")[3]; 
		var slika = parovi[i].split("*")[2];
		rezultat = rezultat + "<div class='row p-t-40 p-b-30'>" + 
				"<div class='col-md-8 col-lg-6 m-l-r'><div class='blo3 flex-w flex-col-l-sm m-b-30'>" + 
				"<div class='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>" + 
							"<a href='" + stranica + "'><img src='" + slika + "' alt='IMG-MENU'></a>" + 
						"</div>" + 
				"<div class='text-blo3 size21 flex-col-l-m'>" + 
							"<a href='" + stranica + "' class='txt22 m-b-3'>" + naziv + "</a>" +
						    "<a href='" + stranica + "' class='dis-block txt4 m-t-30'>" + 
								"Read more" + 
								"<i class='fa fa-long-arrow-right m-l-10' aria-hidden='true'></i>" + 
							"</a>" + "</div></div></div></div>"; 

		//document.write(i + " " + slika);					
	}
		rezultat = rezultat + "</div>";
	document.getElementById("rezultat").innerHTML = rezultat;
}