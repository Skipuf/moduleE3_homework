/*
Задание 4.

Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/
let num_start = 5
const num_end = 15

function number_loop() {
	if (num_start >= num_end) {
		clearInterval(interval_id)
	}
	console.log(num_start)
	num_start += 1
}

let interval_id = setInterval(number_loop, 1000)
