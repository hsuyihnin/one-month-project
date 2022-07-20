const btn = document.querySelector( '#button' );
document.getElementById( "button" ).addEventListener( "click", function ()
{
    document.querySelector( ".modal" ).style.display = "block";
     
} )
document.getElementById( "close" ).addEventListener( "click", function ()
{
    document.querySelector( ".modal" ).style.display = "none";
} )

document.getElementById( "submit" ).addEventListener( "click", function ()
{
    const name = document.querySelector( '#name' );
    const password = document.querySelector( '#password' );
    const email = document.querySelector( '#email' );
    const greet = document.querySelector( '.greet' );
    let nameInput = name.value;
    greet.textContent = "Hello!" + " " + nameInput;
    btn.innerHTML= "Log Out";
   
} )
