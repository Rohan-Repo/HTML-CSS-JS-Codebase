function greetMsg(){
    let userName =
        document.getElementById('userName')
        .value;
    
    // console.log( userName );

    if( !userName ){
        document.getElementById('userMsg')
        .innerHTML = 'Please Enter a Name!';
    }
    else{
        let msg = 'Hello, ' + userName;
        msg = msg + "<br />";
        msg = msg + "Today's Date = " + new Date();

        console.log( msg );

        document.getElementById('userMsg')
        .innerHTML = msg;
    }
}