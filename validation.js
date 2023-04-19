function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form--message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
}



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

/*
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
