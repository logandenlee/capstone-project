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

function encryptPassword(password) {
    const salt = generateRandomSalt(); 
    const hash = crypto.subtle.digest("SHA-256", new TextEncoder().encode(password + salt)); 
    return {salt: salt, hash: hash};
  }
  
  function generateRandomSalt() {
    return crypto.getRandomValues(new Uint8Array(16)).join(''); // Generate a random 16-byte salt
  }
  
function comparePasswords(password, salt, storedHash) {
    const hash = crypto.subtle.digest("SHA-256", new TextEncoder().encode(password + salt)); 
    return hash === storedHash; 
  }

/*
function validate() {
    
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    usernameInput = usernameInput.trim();
    passwordInput = passwordInput.trim();
    
    const encryptedPassword = encryptPassword(password);

    if (comparePasswords(password, encryptedPassword.salt, storedHash)) {
        // password matches, perform login
    }


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
