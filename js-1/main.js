$(document).ready(function(){

	var one = 0, two = 0, sum = 0;

	one = prompt('Введите первое число');
	two = prompt('Введите второе число');
	
	function countSum(a, b){
		return parseInt(a) + parseInt(b);
	}	

	alert('Сумма = ' + countSum (one, two));

});