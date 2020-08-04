function toggleClass() {
	let menu = document.getElementById("menu");
	let modal = document.getElementById("modal-menu");
	let html = document.getElementsByTagName("html")[0];

	if (menu.classList.contains('open')) {
		menu.classList.remove('open');
		modal.style.display = "none";
		html.style.overflow = "initial";

	} else {
		menu.classList.add("open");
		modal.style.display = "flex";
		html.style.overflow = "hidden";
	}
}