// PROGRAMMAZIONE ASINCRONA:



setTimeout(togliLeLasagne, 3000);

function togliLeLasagne() {
    console.log('Le lasagne sono pronte!!!');
}

// for (let i = 0; i < 100; i++) {
    
//     if(i % 5 === 0 && i % 3 === 0) {
//         console.log('FizzBuzz');
//     } else if(i % 5 === 0) {
//         console.log('Fizz');
//     } else if(i % 3 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     };
    
// };

setTimeout(buttaLaSpazzatura, 10000);

function buttaLaSpazzatura() {
    console.log('Ho fatto la differenziata!!!');
}

setTimeout(salutaLaNonna, 5000);

function salutaLaNonna() {
    document.getElementById('main').innerHTML = '<h1>Ciao Nonna</div>'
}

