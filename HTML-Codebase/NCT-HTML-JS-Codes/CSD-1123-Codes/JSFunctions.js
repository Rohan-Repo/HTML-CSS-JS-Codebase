// function functionName( parameters) { ... }

// function definition
function multiply( n1, n2 ){
    return n1 * n2;
}

// function call
console.log( 'Mul = ', multiply(12,3) );

// function definition
function sayHello(){
    console.log( 'Hello, World!' );
}

// function call
sayHello();
sayHello();

function sayHello2( name ){
    console.log( 'Hello, ' + name );
}

sayHello2( 'John' );
sayHello2( 'Mary' );

function getFullName( firstName, lastName ){
    return firstName + ' ' + lastName;
}

console.log( '#1 - ' + getFullName('John', 'Smith') );
console.log( '#2 - ' + getFullName('Mary', 'Jones') );

function areaOfCircle( rad ){
    return Math.PI * rad * rad;
}

console.log( 'Area of Circle with Radius 5: ' + areaOfCircle(5) );

// Global variable
let x = 123;

// Local variable Eg
function localVarEg(){
    let carName = 'Ford';
    console.log( 'carName : ' + carName );
}

localVarEg();

// console.log( 'carName : ' + carName );
console.log( 'x : ' + x );