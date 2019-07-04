$(document).ready(function(){
	var scrollLink = $('.scroll');

	// Smooth Scrolling
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000)
	});

	// Active Link Switching
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function(){

			var sectionOffset = $(this.hash).offset().top

			if( sectionOffset <= scrollbarLocation){
				$(this).parent().addClass('Active');
				$(this).parent().siblings().removeClass('Active');
			}
		})
	})
})

$(window).scroll(function(){
	if($(document).scrollTop() > 50){
		$('nav').addClass('shrink');
	}else{
		$('nav').removeClass('shrink', 'textchange');
	}
});

function swaptext_beach(){
	var btns = $('#btnst_beach').text();
	if (btns == "BEACH"){
		document.getElementById("btnst_beach").innerHTML = "Hide Tour";
	}else{
		document.getElementById("btnst_beach").innerHTML = "BEACH";
	}
}

function swaptext_hill(){
	var btns = $('#btnst_hill').text();
	if (btns == "HILL STATION"){
		document.getElementById("btnst_hill").innerHTML = "Hide Tour";
	}else{
		document.getElementById("btnst_hill").innerHTML = "HILL STATION";
	}
}

function swaptext_palaces(){
	var btns = $('#btnst_palaces').text();
	if (btns == "PALACES"){
		document.getElementById("btnst_palaces").innerHTML = "Hide Tour";
	}else{
		document.getElementById("btnst_palaces").innerHTML = "PALACES";
	}

function swaptext_gallery(){
	var btns = $('#btnst_gallery').text();
	if (btns == "GALLERY"){
		document.getElementById("btnst_gallery").innerHTML = "Hide Gallery";
	}else{
		document.getElementById("btnst_gallery").innerHTML = "GALLERY";
	}
}


function checkForm(form)
{
	var fullname = formorder.fullname.value;
	var email = formorder.email.value;
	var tel = formorder.tel.value;
	var gender = formorder.gender.value;
	var product = formorder.product.value;
	var quantity_adult = formorder.quantity_adult.value;
	var quantity_children = formorder.quantity_children.value;
	var price = formorder.txtPayment.value;

	if(product == 300){
		product = "PHU QUOC Island";
	}else if(product == 450){
		product = "CON DAO Island";
	}else if (product == 300){
		product = "HA NOI Capital";
	}else if (product == 400){
		product = "HUE Monuments";
	}else if (product == 500){
		product = "NINH BINH Province";
	}else if (product == 450){
		product = "BA NA Hill";
	}else if (product == 550){
		product = "SAPA";
	}else{
		product = "Null";
	}

	if(fullname == ''){
		alert("You must enter your Name!");
    }else if(!checkmail(email)){
		alert("Your email is invalid!");
	}else if (!checkphone(tel)){
		alert("Your phone is invalid! - Phone-number have 10 number and start with 0");
	}else if(gender == 'Null'){
		alert("Pleas choose your Gender!");
	}else if(product == 'Null'){
		alert("Please choose Tour in the list!");
	}else if(quantity_adult == 0){
		alert("Quantity item cannot zero (0)!");
		return false;
	}else if(!form.confirm.checked){
		alert("Please confirm form!");
	}else{
		alert("INFO YOUR TICKET" + '\n' + 
			 gender + '.' + ' '+ fullname + '\n' + 
			"Phone : " + tel + '\n' +  
			"Tour : " + product + '\n' + 
			"Adult : " + quantity_adult + '\n' +
			"Child : " + quantity_children + '\n' + 
			"Total Price : " + price + " $");
	}
}

function checkmail(mail){
	var x = /^[a-z0-9]+@[a-z]+(\.[a-z]{2,})+$/;

	return x.test(mail);
}

function checkphone(phone){
	var phonenumber = /^\+?\d{1,1}?[- .]?\(?(?:\d{2,2})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

	return phonenumber.test(phone);
}