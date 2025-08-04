// Get an elemnt with the ID of intro
let para = document.getElementById( 'intro' );

console.log( 'para.innerHTML : ', para.innerHTML );

// Print it's content onto the browser with string concatenation
document.write( 
    '<p> The Text from the Intro Paragraph = ' +
    para.innerHTML +
    '</p>'
);

// Changing HTML Content

// Get an elemnt with the ID of p1
let lbl = document.getElementById( 'p1' );

// Print it's InnerHTML
console.log( 'innerHTML : ', lbl.innerHTML );

// Reset the value of it's InnerHTML
lbl.innerHTML = '<b> Calgary, Alberta, Canada </b>';

// Print it again
console.log( 'innerHTML : ', lbl.innerHTML );

// Changing HTML Style
lbl.style.color = 'teal';
para.style.color = 'red';