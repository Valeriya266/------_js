/** Задача 1
 * У нас есть массив с числами, который при этом может содержать внутри себя такие же массивы с числами 
 * Найти сумму всех чисел, включая все вложенные массивы (они могут быть разного уровня вложенности)
 *  1. Решить задачу с помощью цикла for 
 *  2. Решить задачу с помощью reduce (можно получить вариант в 2 строки, если использовать стрелочные ф-ии)
 *  3. Написать ф-ю, которая будет полностью копировать объект (deep clone / deep copy)
 */

let test1 = [1, 2, [3, 4]];
let test2 = [4, 5, [1, 3, [7, 10], [2, 8, 2]], [9, 1], 5, 30];

function getNestedArrSum(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result += getNestedArrSum(arr[i]);
        } 
        else result += arr[i];
    }

    return result;
}

let sum1 = getNestedArrSum(test1);
let sum2 = getNestedArrSum(test2);
console.log(sum1, sum2);

/** Задача 2
Написать функцию, которая на вход будет принимать строку(одно слово) и производить подсчет букв в слове.
Результат может быть в любом виде, главное, чтобы было видно сколько раз каждая буква использовалась в слове
Пример: островок — "o: 3, т: 1, c: 1, р:1, в: 1, к: 1"
Использовать циклы только for/while 
*/

function getLettersCount (str) {
 // получили массив элементов отсортированных по алфавиту 
 
 // мы можем работать с объектами как с хэш-таблицами / словарями
 let dict = {};
 for(let i = 0; i < str.length; i++) {
  let letter = str[i];
  if(letter in dict) {
    dict[letter]++
  } else {
    dict[letter] = 1;
  }

 }

  return dict;
} 
console.log(getLettersCount('олово')) // {'о': 3, 'л': 1, 'в': 1}

/** Задача 3
Написать функцию, которая будет определять является ли строка палиндромом. 
Палиндром — слово, словосочетание или текст, которые одинаково читаются с любой стороны. 
Примеры слов: дед, пуп, заказ, кабак, комок, потоп, шабаш, шалаш
Примеры фраз: искать такси, тут как тут, дивен мне вид, а лес у села */

function isPalindrome(str) {
    let arr = str.split('').filter(item => item !== ' ');
    let pos = Math.floor(arr.length / 2);
    // при такой записи нужно присвоить значение каждой переменной, не забывай!
    // let a = '', b = ''; 

    let a = '';
    let b = '';
    
    for (let i = 0; (arr.length % 2 === 0 ? i < pos : i <= pos); i++) {
        a += arr[i];
    } 

    for (let i = arr.length - 1; i >= pos; i--) {
        b += arr[i];
    }

    if (a === b) {
        return true;
    } else return false;
}
console.log(isPalindrome('боб'));
console.log(isPalindrome('ооооооооок'));

function isPalindromeWhile(str) {
  // выкидываем из строки пробел
  str = str.replace(/[\n\u0020]/g, '')
  if(str.length === 1) {
    return true;
  }

  let lPos = 0;
  let rPos = str.length - 1;
  while(str[lPos] === str[rPos]) {
    lPos++
    rPos--
    if(lPos > rPos) {
      return true;
    }
  }

  return false;
}

