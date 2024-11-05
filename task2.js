/*
Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

*/

let num = 100

function isPrime(number) {
	if (number < 2) {
		console.log(`Число ${num} не простое`)
		return false
	} else if (number > 1000) {
		console.log(`данные не верны`)
		return false
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			console.log(`Число ${num} не простое`)
			return false
		}
	}

	console.log(`Число ${num} простое`)
	return true
}

isPrime(num)
