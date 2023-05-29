function reRataPopulasi() {
	let jumNilai = document.querySelector("#jumNilai").value;
	var totalIndiv = document.querySelector("#totalIndiv").value;
	var rerata = jumNilai / totalIndiv;

	if (jumNilai === "") {
		alert("Masukan Nilai ΣX");
	} else if (totalIndiv === "") {
		alert("Masukan Nilai N");
	} else {
		document.querySelector("#hasil-rerata").innerHTML = rerata;
	}

}

function proPorsi() {
	var kuantitasX = document.querySelector("#kuantitasX").value;
	var kuantitasN = document.querySelector("#kuantitasN").value;
	var proporsi = kuantitasX / kuantitasN;

	if (kuantitasX === "") {
		alert("masukkan nilai X");
	} else if (kuantitasN === "") {
		alert("Masukkan nilai N");
	} else {
		document.querySelector("#hasil-proporsi").innerHTML = proporsi;
	}

}


