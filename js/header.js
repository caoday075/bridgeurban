function hide1Element() {
	document.getElementById("wrap_search_top").style.marginTop = "-50px";//P đổi .top thành .marginTop
	// document.getElementById("container_menu").style.margin = "0 45px 0 45px";
	if ($(window).width() > 803) document.getElementById("myCarousel").style.top = "0px";
}	

function display1Element() {
	document.getElementById("wrap_search_top").style.marginTop = "0px";//P đổi .top thành .marginTop
	// document.getElementById("container_menu").style.margin = "50px 45px 0 45px";	
	if ($(window).width() > 803) document.getElementById("myCarousel").style.top = "50px";
}

function display2Element() {
	document.getElementById("wrap_popup_menu").style.display = "block";
	$('html, body').css({
    overflow: 'hidden',
    height: '100%'
	});
}

function hide2Element() {
	document.getElementById("wrap_popup_menu").style.display = "none";
	$('html, body').css({
    overflow: 'unset',
    height: 'auto'
	});
}