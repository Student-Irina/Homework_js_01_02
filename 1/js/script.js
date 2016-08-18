var base = prompt('Введите число:');
var exp =  prompt('Введите cтепень:');

if ( base == '' || exp == ''  ) {
    alert('Вы не все значения ввели!'); 
} else if ( base == null && exp == null ) {
	alert('Аккуратней на одном из окон вы нажали кнопку "Отмена" вместо "Ок"!'); 
} else if (exp < 0) { 
	alert('Степень ' + exp + 
		' не поддерживается, введите целую степень, большую 0!'); 
} else if ( parseInt( base ) != base  || parseInt( exp ) != exp) {
    alert('Необходимо вводить целые числа!'); 
} else {
	console.log( 'Результат ', pow(base, exp) );
} 

/**
 * Возвращает base в степени exp, только для целых base
 */
function pow(base, exp) {
  var result = 1;

 for (var i = 0; i < exp; i++){
 	result *=  base; 
 }

 return result; 
}
