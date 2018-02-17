
var icon = document.getElementById('menu_icon');
var menu = document.getElementById('menu');
function work_mob_menu () {
	menu.classList.toggle("mob_menu");
}
icon.addEventListener("click", work_mob_menu);


