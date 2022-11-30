// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

let total = 0;

function sum(number) {
    total = total + number;
    console.log(`Введено число ${number}, сумма ${total}`);

    function sum(number) {
        total = total + number;
        console.log(`Введено число ${number}, сумма ${total}`);

        function sum(number) {
            total = total + number;
            console.log(`Введено число ${number}, сумма ${total}`);
        }
        sum(20);
    }
    sum(5);
}
sum(3);