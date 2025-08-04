// Numbers - Integers or Decimals
let length = 16;
let weight = 7.5;

console.log( 'Type of length : ', typeof length );

// Strings 
let color = 'Yellow';
console.log( 'Type of color : ', typeof color );

// Booleans
let x = true;
let y = false;

console.log( 'Type of x : ', typeof x );

// Object 
let person = 
{ 
    firstName: 'John', 
    lastName: 'Smith', 
    age: 50,
    eyeColor: 'blue'
};

// let person = { firstName: 'John', lastName: 'Smith', age: 50, eyeColor: 'blue' };

// Array Object - Multiple Items Grouped Together
const cars = [ 'Ford', 'Lexus', 'BMW' ];
console.log( 'First Element = ' + cars[0] );
const nums = [ 1, 2, 3 ];
console.log( 'Last Element = ' + nums[2] );

// Date Object 
const date = new Date( '2024-01-31' );
console.log( 'Old Date : ', date );

const today = new Date();
console.log( 'New Date : ', today );

// String Concatenation happening automatically!
let z = 16 + 'Ford';
console.log( z );

console.log( 'Val 1 = ' + length + weight );
console.log( 'Val 2 = ' + (length + weight) );

// JS Strings - Collection of characters together
// With Single Quotes
let carName1 = 'Toyota Highlander';
// With Double Quotes
let carName2 = "Ford Explorer";

// Exponential Values
let q = 123e5; //  123 * (10 ^ 5)
console.log( q ); 
let p = 123e-5; // 123 * (10 ^ -5)
console.log( p ); 

// If we need a number greater than 64 Floating Point Value
let r = BigInt( "123456789012345678901234567890" );
console.log( r ); 

// booleans - True or False
let l=5, m=5, n=6;
console.log( 'l == m : ' + (l == m ) ); // true
console.log( 'l == n : ' + (l == n ) ); // false

// undefined value 
let o;
console.log( o, ' Type - ', typeof o );
o = 123;
console.log( o, ' Type - ', typeof o );

