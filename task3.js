/*
Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function number_sum(num_a) {
	return function (num_b) {
		return num_a + num_b
	}
}

let num_sum = number_sum(10)

let result_sum_1 = num_sum(1)
let result_sum_2 = num_sum(2)
let result_sum_3 = num_sum(3)
let result_sum_4 = num_sum(4)

console.log(`result_sum_1 = ${result_sum_1}`)
console.log(`result_sum_2 = ${result_sum_2}`)
console.log(`result_sum_3 = ${result_sum_3}`)
console.log(`result_sum_4 = ${result_sum_4}`)
