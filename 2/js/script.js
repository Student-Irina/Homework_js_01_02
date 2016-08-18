
var arrNames = [];
var pos;
var newName;
for (var i = 0; i < 5; i++) {
	pos = i + 1;
  newName = prompt('Введите значение массива ' + pos);
 	arrNames.push(newName); 
 }

 var userName = prompt('Введите, пожалуйста, имя пользвателя:');
 
 /**
 * Поиск введенного имени пользователя в массиве
 */

 var flag = false;

  for (var i = 0; i < arrNames.length; i++) {
     if (arrNames[i] === userName) {
      flag = true;  
     }
  }

  if (flag === true){
  	alert(userName + ', вы успешно вошли');
  } else {
     alert('Такого имени нет в массиве');
  }


