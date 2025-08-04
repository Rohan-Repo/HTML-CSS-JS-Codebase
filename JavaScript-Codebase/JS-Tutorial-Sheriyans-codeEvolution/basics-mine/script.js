function getDateTime(){
    document.getElementById('dateTime').innerHTML = Date()
}

function greetUserStatic() {
    let name = document.getElementById("name").value;
    if( name )
        document.getElementById("nameValue").innerText = 'Hello, ' + name;    
    else
    document.getElementById("nameValue").innerText = 'Please Enter your Name';    

}

function greetUserDynamic() {
    let textBox = document.getElementById("name2");
    let para = document.getElementById("nameValue2");

    // Check if the Value is Present or Not - Null String Check
    if( textBox.value )  
        para.innerText = `Hello, ${textBox.value}` ;
    // The ${textBox.value} just adds the value inside the p Tag dynamically
    // Similar to f-Strings in Python
    else
        para.innerText = 'Hello, User' ;
}

function clearText(){
    document.getElementById("name").value = '';
    document.getElementById("name2").value = '';
    document.getElementById("nameValue").innerText = '';
    document.getElementById("nameValue2").innerText = '';

}

function changeTheme(theme){
    // To Navigate and look-through an HTML Page and extract an element based on it's ID or Type and manipulate the DOM using JS
    let body = document.querySelector('body');
    // The above statement is the equivalent of document.getElementsByTagName('body') 

    if( theme == 'lgt' ){
        body.style.backgroundColor = 'lightcyan';
        body.style.color = 'teal'
    }    
    else
    if( theme == 'drk' ){
        body.style.backgroundColor = 'black';
        body.style.color = 'springgreen'
    }
    else
    if( theme == 'def' ){
        body.style.backgroundColor = 'lemonchiffon';
        body.style.color = 'purple'
    }
}