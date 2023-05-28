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
