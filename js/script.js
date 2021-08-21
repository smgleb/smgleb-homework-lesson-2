// N.2 Домашнее задание FUNCTIONS_AND_ARRAYS
// 1. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.
//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]


function numberSplit() {
	let num = arguments[0];
	let arr = [];
	if (parseInt(num) === num) {
		if (num % 2 === 0) {
			arr.push(num / 2, num / 2);
		} else {
			let a = num % 2;
			let numCel = num - a;
			if (numCel < 0) {
				arr.push((numCel / 2) + a, numCel / 2)
			} else {
				arr.push(numCel / 2, (numCel / 2) + a)
			}
		}
		return arr;
	} else {
		return ('Введите целое число');
	}
}
console.log(numberSplit(15));
console.log(numberSplit(-15));
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));


// 2. Создайте функцию, которая возвращает количество " true” значений в массиве.
// numericTrue([true, false, false, true, false]) ➞ 2
//  numericTrue ([false, false, false, false]) ➞ 0
//  numericTrue ([]) ➞ 0
//Вернуть 0, если дан пустой массив.
//Все элементы массива имеют тип bool (true или false).


function numericTrue(a) {
	let arr = a;
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i])
		}
	}
	return newArr.length;
}
console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));



// 3. Вернуть наибольшее и наименьшее числа
// Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число.
// highLow([1, 2, 3, 4, 5]) ➞ 5, 1
// highLow([1, 2, -3, 4, 5]) ➞ 5. -3
// highLow([1, 9, 3, 4, –5]) ➞ 9, -5
// highLow([13]) ➞ 13, 13


function highLow(num) {
	let arr = num;
	function compareNum(a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
		if (a === b) return 0;
	}
	let min = arr.sort(compareNum)[0];
	let max = arr.sort(compareNum)[arr.length - 1];

	return `${max}, ${min}`

}

console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5]));
console.log(highLow([13]));
