/*
Задание 5.

Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.
*/

let number_degree = (number_x, number_n) => {
	return number_x ** number_n
}

console.log(number_degree(2, 10))
