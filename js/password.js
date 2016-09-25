function buttonPress()
{
    var passwordOne = document.forms["passForm"]["pass"].value;
    var passwordTwo = document.forms["passForm"]["confirm"].value;
    if(passwordOne.length < 8 || passwordTwo.length < 8)
    {
        alert("One or both passwords are less than 8 characters long");
    }
    if(passwordOne != passwordTwo)
    {
        alert("Passwords do not match");
    }
}
