let today = new Date();
console.log( 'Date : ', today );
console.log( 'Hours : ', today.getHours() );

let hours = today.getHours();

if( hours < 12 )
    console.log( 'Good Morning!' );
else
if( hours == 12 )
    console.log( 'Mid-day!' );
else
if( hours > 12 && hours < 16 )
    console.log( 'Good Afternoon!' );
else if( hours >= 16 && hours < 22 )
    console.log( 'Good Evening!' );
else
    console.log( 'Good Night!' );

// Purely for testing purpose!
let hourArr = [ 10, 14, 17, 22 ];

for ( let i=0; i<4; i++ )
{
    console.log( 'For Hour : ', hourArr[i] );
    if( hourArr[i] < 12 )
    console.log( 'Good Morning!' );
    else
    if( hourArr[i] == 12 )
        console.log( 'Mid-day!' );
    else
    if( hourArr[i] > 12 && hourArr[i] < 16 )
        console.log( 'Good Afternoon!' );
    else if( hourArr[i] >= 16 && hourArr[i] < 22 )
        console.log( 'Good Evening!' );
    else
        console.log( 'Good Night!' );

}
