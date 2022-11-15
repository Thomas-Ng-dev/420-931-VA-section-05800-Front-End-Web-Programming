const modal = document.getElementById("modalLoginJS");
const loginBtn = document.getElementById("login");
const span = document.getElementsByClassName("close")[0];

const modal2 = document.getElementById("modalSignUpJS");
const signUpBtn = document.getElementById("signUp");

loginBtn.onclick = function() 
{
    modal.style.display = "block";
}

signUpBtn.onclick = function() 
{
    modal2.style.display = "block";
    modal.style.display = "none";
}

span.onclick = function()
{
    modal.style.display = "none";
    modal2.style.display = "none";
}

window.onclick = function(event)
{
    if (event.target == modal) 
    {
      modal.style.display = "none";
      modal2.style.display = "none";
    }
}


