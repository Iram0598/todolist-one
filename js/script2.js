const user = document.querySelector('#user');
const password = document.querySelector('#password');

const btn = document.querySelector('.btn')

btn.addEventListener('click', function(e){
    e.preventDefault();

    //Validation

    if(user.value=='admin' && password.value=='password')
    {
        alert("Login successful")
        window.location = "home.html"


    }
    else if(user.value=='admin' && password.value=='')
    {
        alert("পাসওয়ার্ড কেডা দিবো?")
    }
    else if(user.value=='' && password.value=='password')
    {
        alert("নাম কেডা লেখবো?")
    }
    else
    {
        alert("কিছুই লেখস নাই বেটা")
    }
})