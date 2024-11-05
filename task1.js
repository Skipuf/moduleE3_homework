/*
Задание 1.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

*/

let result = {
	zero: 0,
	even: 0,
	odd: 0,
}
const ARR = [1, 0, 11, 22, 99, 88, null, true, NaN, 'str']

function even_or_odd(num) {
	if (typeof num === 'number' && !isNaN(num)) {
		if (num === 0) {
			result['zero'] += 1
		} else if (num % 2 === 0) {
			result['even'] += 1
		} else {
			result['odd'] += 1
		}
	}
}

ARR.forEach(even_or_odd)

console.log(
	`Нулей: ${result['zero']} \nЧетных: ${result['even']} \nНечетных: ${result['odd']}`
)
