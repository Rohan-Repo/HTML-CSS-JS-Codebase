// String so no parsing required
let userName = prompt( 'Enter Name: ' );
console.log( 'Name : ', userName );

// Number so parsing IS required
let age = prompt( 'Enter Age: ' );
// parseInt - converts String Input into Integer
age = parseInt( age );

if( age >= 18 )
    console.log( 'User is eligible to vote!' );
else
    console.log( 'User is NOT eligible to vote!' );