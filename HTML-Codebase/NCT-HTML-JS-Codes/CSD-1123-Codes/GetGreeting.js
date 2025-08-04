let userName = prompt( 'Enter Name: ' );

let hour = new Date().getHours();

let greeting;

if( hour < 10 )
    greeting = 'Good Morning!';
else if ( hour < 18 )
    greeting = 'Good Day!';
else
    greeting = 'Good Evening!';

console.log( greeting, ' : ', userName );