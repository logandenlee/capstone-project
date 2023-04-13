const username = document.getElementById('username').trim;
const password = document.getElementById('password').trim;
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []

    if(username.value === '' || username.value == null) {
        messages.push('Please enter a username.')
    }

    if(username.value.length < 6 || username.value.length > 20) {
        messages.push('Username must be 6-20 characters long.')
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        messages.push('Username must only contain alphanumeric characters.');
    }

    if (password.value.length < 6 || password.value.length > 20) {
        messages.push('Password must be 6-20 characters long.')
    }

    if (password.value === 'password') {
        messages.push("Please enter a different password.")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
}
)

/*
function validate() {
    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    username = username.trim();
    password = password.trim();
    


    else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return "Username must only contain alphanumeric characters.";
    }

    else if (//incorrect username/password) {
        return "Incorrect username/password. Please try again.";
    }
        
    else {
        login(username, password)
    }
}
*/


/*
function login(username, password) {
    // Sanitize username and password input
    username = username.trim();
    password = password.trim();

    // Perform login logic
    // ...
  }
  */
