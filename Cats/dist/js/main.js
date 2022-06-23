$(document).ready(function(){



function topTextModifierFoiegras(){
		if ($("#foiegras").hasClass("selected")){
		$("#foiegras").find(".cat-food__block").hover(console.log("13"), function() {
			$("#foiegras").find(".cat-food__toptext").css({"color":" red"}).text("Котэ не одобряет?")
		})
		} else {
		$("#foiegras").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		$("#foiegras").find(".cat-food__block").hover(console.log("14"), function() {
			$("#foiegras").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		})
	}
	}

	function switchToSelectedFoiegras(){

		$("#foiegras").find(".cat-food__bottomtext").toggleClass("hidden");
		$("#foiegras").find('.cat-food__block').toggleClass("selected");
		$("#foiegras").find('.cat-food__size').toggleClass("selected");
		$('#foiegras').toggleClass("selected");	
		topTextModifierFoiegras()
		
	}
	if ($("#foiegras").hasClass("disabled")){
		console.log("12");
		} else {
	$("#foiegras").find(".cat-food__block").click(switchToSelectedFoiegras);
	$("#foiegras").find(".cat-food__button").click(switchToSelectedFoiegras)


	function hoverFoiegras(){
		$("#foiegras").find(".cat-food__size").toggleClass("cat-food__size--hover");
		$("#foiegras").find(".cat-food__button").toggleClass("cat-food__button--hover")
	}
	}
	$("#foiegras").find(".cat-food__block").hover(hoverFoiegras)

	function topTextModifierFish(){
		if ($("#fish").hasClass("selected")){
		$("#fish").find(".cat-food__block").hover(console.log("13"), function() {
			$("#fish").find(".cat-food__toptext").css({"color":" red"}).text("Котэ не одобряет?")
		})
		} else {
		$("#fish").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		$("#fish").find(".cat-food__block").hover(console.log("14"), function() {
			$("#fish").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		})
	}
	}

	function switchToSelectedFish(){
		$("#fish").find(".cat-food__bottomtext").toggleClass("hidden");
		$("#fish").find('.cat-food__block').toggleClass("selected");
		$("#fish").find('.cat-food__size').toggleClass("selected");
		$('#fish').toggleClass("selected");
		topTextModifierFish()
	}
	if ($("#fish").hasClass("disabled")){
		console.log("12");
		} else {
	$("#fish .cat-food__block, #fish .cat-food__button").click(switchToSelectedFish)
	}
	function hoverFish(){
		$("#fish .cat-food__size").toggleClass("cat-food__size--hover");
		$("#fish .cat-food__button").toggleClass("cat-food__button--hover")
	}

	$("#fish").find(".cat-food__block").hover(hoverFish)

	function topTextModifierChicken(){
		if ($("#chicken").hasClass("selected")){
		$("#chicken").find(".cat-food__block").hover(console.log("13"), function() {
			$("#chicken").find(".cat-food__toptext").css({"color":" red"}).text("Котэ не одобряет?")
		})
		} else {
		$("#chicken").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		$("#chicken").find(".cat-food__block").hover(console.log("14"), function() {
			$("#chicken").find(".cat-food__toptext").css({"color":"#666"}).text("Сказочное заморское яство");
		})
	}
	}
		
		function switchToSelectedChicken(){
		$("#chicken .cat-food__bottomtext").toggleClass("hidden");
		$('#chicken .cat-food__block').toggleClass("selected");
		$('#chicken .cat-food__size').toggleClass("selected");
		$('#chicken').toggleClass("selected");
		topTextModifierChicken()
	}
	if ($("#chicken").hasClass("disabled")){
		console.log("12");
		} else {
	$("#chicken .cat-food__block, #chicken .cat-food__button").click(switchToSelectedChicken)
	}
	
	
	function hoverChicken(){
		$("#chicken .cat-food__size").toggleClass("cat-food__size--hover");
		$("#chicken .cat-food__button").toggleClass("cat-food__button--hover")
	}
	
	$("#chicken .cat-food__block").hover(hoverChicken)

})


	
