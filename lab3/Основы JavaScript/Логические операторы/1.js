alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1,2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) );// 1 , undefined
alert( null || 2 && 3 || 4 ); // 3
let value = NaN;

value &&= 10; // false
value ||= 20; // false
value &&= 30; // true
value ||= 40; // true

alert(value);


let age ;
if (14>=age && age<=90){
    alert('yes')
}

let age ;
if (!(14>=age && age<=90)){
    alert('no')
}

if (-1 || 0) alert( 'first' ); // true
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); //true


let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}