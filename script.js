/*Скрипт для меню навигации*/

var show_el = document.getElementById('header_show');
var button_close = document.getElementById('button_close');
var block_1_0 = document.getElementsByClassName('block_1');
var block_2_0 = document.getElementsByClassName('block_2');

for (i = 1; i <= 6; i++) {
	var li_i = document.getElementById('li_'+i);
	var block_1_i = document.getElementById('block_1_'+i);
	var block_2_i = document.getElementById('block_2_'+i);
}

document.addEventListener("mouseover", function (e) {
	for (j = 1; j <= 6; j++) {
		if (e.target.id == "li_"+j) {

			show_el.style = "display: block";

			var x = document.getElementsByClassName("block_1");
			for (y = 0; y < x.length; y++) {
    		x[y].style.display = 'none';
			}

			var z = document.getElementsByClassName("block_2");
			for (p = 0; p < z.length; p++) {
    		z[p].style.display = 'none';
			}
		
			if (j == 1) {
				block_1_1.style = "display: block";
				block_2_1.style = "display: block";
			}

			if (j == 2) {
				block_1_2.style = "display: block";
				block_2_2.style = "display: block";
			}

			if (j == 3) {
				block_1_3.style = "display: block";
				block_2_3.style = "display: block";
			}

			if (j == 4) {
				block_1_4.style = "display: block";
				block_2_4.style = "display: block";
			}

			if (j == 5) {
				block_1_5.style = "display: block";
				block_2_5.style = "display: block";
			}

			if (j == 6) {
				block_1_6.style = "display: block";
				block_2_6.style = "display: block";
			}
		}
	}
});

button_close.onclick = function () {
	show_el.style = "display: none";
}

/*Скрипт для скрытия/открытия блоков из меню поиска квартиры*/

var show_menu_1 = document.getElementById('show_menu_1');
var hide_menu_1 = document.getElementById('hide_menu_1');
var count = 0;

/*show_menu_1.onclick = function () {
	if (count == 0) {
		hide_menu_1.style = "display: block";
		count++;
	}

	else {
		hide_menu_1.style = "display: none";
		count = 0;
	}
}*/
