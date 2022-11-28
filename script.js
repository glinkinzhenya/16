// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

let sum = 0;
 
function first(number) {
    sum += number ;
    console.log(sum)
}

first(3);
first(5);
first(20);