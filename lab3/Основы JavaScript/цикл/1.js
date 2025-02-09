// let i = 3;
//
// while (i) {
//     alert( i-- );
// } // 1
//
// let i = 0;
// while (++i < 5) alert( i ); //4
//
// let i = 0;
// while (i++ < 5) alert( i ); //5
//
// for (let i = 0; i < 5; i++) alert( i );
//
// for (let i = 0; i < 5; ++i) alert( i );

// for(let i = 2; i <= 10; ++i) {
//     if (i % 2 == 0) {
//         alert( i );
//     }
// }


// let i = 0;
// while (i<3){
//     alert( `number ${i}!` );
//     i++}

// let number;
// do {
//     number = prompt("Enter your number", "");
// } while (number <= 100 && number);

let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert( i );
    }